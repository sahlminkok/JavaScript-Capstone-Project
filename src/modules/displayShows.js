import likeImg from '../assets/heart.svg';
import createPopup from './popup.js';
import showModal from './reserveWindow.js';

const displayShows = (shows) => {
  const showsList = document.querySelector('.shows-list');
  showsList.innerHTML = '';

  for (let i = 0; i < 8; i += 1) {
    const show = shows[i];
    const div = document.createElement('div');
    div.className = 'show-item';
    div.innerHTML = `
      <img src="${show.image.original}" alt="${show.name}" class="show-image">
      <div class="info">
        <p>${show.name}</p>
        <div class="likes">
          <img alt="likes-btn" src="${likeImg}" class="likes-btn">
          <p>10 likes</p>
        </div>
      </div>
      <button class="btn-comment">Comments</button>
      <button class="btn-reserve">Reservations</button>
    `;

    showsList.appendChild(div);

    // Attach click event listener to comment button
    const commentButton = div.querySelector('.btn-comment');
    commentButton.addEventListener('click', () => {
      createPopup(show);
    });

    const reserveButtons = document.querySelector('.btn-reserve');
    reserveButtons.addEventListener('click', (e) => {
      showModal(e.target.id);
    });
  }
};

export default displayShows;