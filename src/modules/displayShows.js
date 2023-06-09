import likeImg from '../assets/heart.svg';
import createPopup from './popup.js';
import createLike from './createLike.js';
import displayLike from './displayLike.js';

const displayShows = (shows) => {
  const showsList = document.querySelector('.shows-list');
  showsList.innerHTML = '';

  shows.slice(0, 8).forEach(async (show) => {
    const div = document.createElement('div');
    div.className = 'show-item';
    div.innerHTML = `
      <img src="${show.image.original}" alt="${show.name}" class="show-image">
      <div class="info">
        <p>${show.name}</p>
        <div class="likes">
          <img alt="likes-btn" src="${likeImg}" class="likes-btn" data-show-id="${show.id}">
          <p><span class="like-count"></span> likes</p>
        </div>
      </div>
      <button class="btn-comment" data-show-id="${show.id}">Comments</button>
      <button>Reservations</button>
    `;

    showsList.appendChild(div);

    const likeBtn = div.querySelector('.likes-btn');
    const likeCount = div.querySelector('.like-count');

    displayLike(show.id).then((initialLikeCount) => {
      likeCount.textContent = initialLikeCount;
    });

    likeBtn.addEventListener('click', (event) => {
      const { showId } = event.target.dataset;
      createLike(showId).then((newLikeCount) => {
        likeCount.textContent = newLikeCount;
      });
    });

    // Attach click event listener to comment button
    const commentButton = div.querySelector('.btn-comment');
    commentButton.addEventListener('click', (event) => {
      const { showId } = event.target.dataset;
      createPopup(show, showId);
    });
  });
};

export default displayShows;
