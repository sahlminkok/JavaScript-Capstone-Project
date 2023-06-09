import reserveCounter from './reserveCounter.js';

const bodyTag = document.querySelector('body');

const getReservation = async (id) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UKP27MmenkdUVvm9H93H/comments?item_id=item${id}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const renderReservations = async (id) => {
  const reserves = await getReservation(id);
  const reservesCount = document.querySelector('.reserve-count');
  const reservesContainer = document.querySelector('.display-reserve');

  if (reserves) {
    reservesContainer.innerHTML = '';
    for (let i = reserves.length - 1; i >= 0; i -= 1) {
      reservesContainer.innerHTML += `
        <li class="show-reserves">
        ${reserves[i].creation_date} - ${reserves[i].creation_date} by ${reserves[i].username}}
        </li>
        `;
    }

    const showReserve = document.querySelectorAll('.show-reserve');
    const count = reserveCounter(showReserve);
    if (count > 0) {
      reservesCount.innerHTML = `(${count})`;
    } else {
      reservesCount.innerHTML = '(0)';
      reservesContainer.innerHTML = 'no reserves...';
    }
  }
};

const showModal = async (id) => {
  const show = `https://api.tvmaze.com/shows/${id}`;
  const response = await fetch(show);
  const data = await response.json();
  const projectOverlay = document.createElement('section');
  projectOverlay.classList.add('popup-conatiner');

  const modalContent = `
  <div class="popup-card">
  <span class="work-close">X</span>
  <div class="show">
      <img src="${data.image.original}" class="show-img" alt="">
      <h2>${data.name}</h2>
      <ul class="show-details">
          <li>Rating: ${data.rating.average}</li>
          <li>Length: ${data.runtime}</li>
          <li>Language: ${data.language}</li>
          <li>Status: ${data.status}</li>
      </ul>
  </div>
  <div class="display-reserves-section">
      <h3>Reservations <span class="reserves-count"></span></h3>
      <ul class="display-reserves">
      </ul>
  </div>

  <div class="Add-reserve">
      <h3>Add a Reservation</h3>
      <form id="${id}" class="reserve-form">
          <input type="text" class="form-control" id="username" placeholder="Your name" required>
          <input type="text" class="form-control" id="start-date" placeholder="Start Date" required>
          <input type="text" class="form-control" id="end-date" placeholder="End Date" required>
          <button class="btn">Reserve</button>
      </form>
  </div>

</div>
      `;

  projectOverlay.innerHTML = modalContent;
  bodyTag.appendChild(projectOverlay);
  const closeBtn = document.querySelector('.work-close');
  closeBtn.addEventListener('click', () => {
    bodyTag.removeChild(projectOverlay);
  });

  renderReservations(id);

  const addReservation = async (id) => {
    const username = document.getElementById('username');
    const startDate = document.getElementById('start-date');
    const endDate = document.getElementById('end-date');

    const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UKP27MmenkdUVvm9H93H/comments';
    const data = {
      item_id: `item${id}`,
      username: username.value,
      startDate: startDate.value,
      endDate: endDate.value,
    };
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    username.value = '';
    startDate.value = '';
    endDate.value = '';

    renderReservations(id);
  };

  const reserveForm = document.querySelector('.reserve-form');
  reserveForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addReservation(e.target.id);
  });
};

export default showModal;