import likeImg from '../assets/heart.svg';
import createPopup from './popup.js';
import createPop from './reserveWindow.js';
import createLike from './createLike.js';
import displayLike from './displayLike.js';
import countDisplayedShows from './showCounter.js';

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
      <button class="btn-comment" data-show-id="${show.id}"">Comments</button>
      <button class="btn-reserve" id="btn-reserve-${show.id}">Reservations</button>
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

    // Attach click event listener to reservation button
    const reserveButtons = div.querySelector('.btn-reserve');
    reserveButtons.addEventListener('click', (event) => {
      const { showId } = event.target.dataset;
      createPop(show, showId);
    });
  });

  // Call the counter function and update the DOM
  const displayedShowsCount = countDisplayedShows();

  const showsCounterElement = document.querySelector('.shows-counter');
  showsCounterElement.textContent = displayedShowsCount;
};

export default displayShows;
