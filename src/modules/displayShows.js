import likeImg from '../assets/heart.svg';
import createPopup from './popup.js';

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
      <button class="btn-comment" data-show-id="${show.id}"">Comments</button>
      <button>Reservations</button>
    `;

    showsList.appendChild(div);

    // Attach click event listener to comment button
    const commentButton = div.querySelector('.btn-comment');
    commentButton.addEventListener('click', (event) => {
      const { showId } = event.target.dataset;
      createPopup(show, showId);
    });
  }
};

export default displayShows;