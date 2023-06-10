import { getReservations, submitReservation } from './reservationRequest.js';
import reservationCounter from './reserveCounter.js';

let activeMovie = '';

async function renderReservations(id) {
  const reservations = await getReservations(id);
  let html = '';
  reservations.forEach((reservation) => {
    const htmlSegment = `<div class="reservation-records"><b>${reservation.date_start}*</b>   <b>${reservation.date_end}*</b> by <b> ${reservation.username}</b></div>`;
    html += htmlSegment;
  });
  reservationCounter(reservations);
  const container = document.querySelector('#listOfReservations');
  container.innerHTML = html;
}

function createPop(movie) {
  const reservationButton = document.getElementById(`btn-reserve-${movie.id}`);
  reservationButton.addEventListener('click', () => {
    const pupUpReserveImage = document.getElementById('reservation-img');
    pupUpReserveImage.innerHTML = `<img class="reserveImage" src="${movie.image.original}" alt="">`;
    const name = document.getElementById('rating-group');
    name.innerHTML = `<h3 class="card-title">${movie.name}</h3>`;
    const type = document.getElementById('length');
    type.innerHTML = `<h3 class="card-title">${movie.type}</h3>`;
    const language = document.getElementById('language');
    language.innerHTML = `<h3 class="card-title">${movie.language}</h3>`;
    const genre = document.getElementById('length');
    genre.innerHTML = `<h3 class="card-title">${movie.genres}</h3>`;
  });

  reservationButton.addEventListener('click', (event) => {
    document.getElementById('reservation-container').style.display = 'block';
    const movieID = event.target.id.split('-');
    // eslint-disable-next-line prefer-destructuring, no-undef
    activeMovie = movieID[2];
    // eslint-disable-next-line no-undef, no-use-before-define
    renderReservations(activeMovie);
  });

  const closeButton = document.getElementById('close-reserve-popup');
  closeButton.addEventListener('click', () => {
    document.getElementById('reservation-container').style.display = 'none';
  });
}

const reservationForm = document.getElementById('new-reserve');
reservationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  submitReservation(activeMovie, document.querySelector('#username').value, document.querySelector('#start-date').value, document.querySelector('#end-date').value);
  reservationForm.reset();
  setTimeout(() => {
    renderReservations(activeMovie);
  }, 1000);
});

export default createPop;