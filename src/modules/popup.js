import createComment from './comment.js';
import showComments from './displayComment.js';

const createPopup = (show, showId) => {
  // Create a modal element
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.style.display = 'block';

  // Create the modal content
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  modalContent.innerHTML = `
    <span class="close">&times;</span>
    <img src="${show.image.original}" class="img-popup">
    <h2 class="movie-heading">${show.name}</h2>
    <div class="dis">
    <p>Type: ${show.type}</p>
    <p>Genres : ${show.genres}</p>
    </div>
    <div class="comment-container">
    <div class="show-comment"></div>
    </div>
    <div class="add-comment">
      <input type="text" class="name-input">
      <input type="text" class="message-input">
      <button class="btn-submit">Submit</button>
    </div>
  `;

  // Append the modal content to the modal element
  modal.appendChild(modalContent);

  // Append the modal element to the document body
  document.body.appendChild(modal);

  // Close the modal when the close button is clicked
  const closeButton = modalContent.querySelector('.close');
  closeButton.addEventListener('click', () => {
    document.body.removeChild(modal);
  });

  const submitButton = modalContent.querySelector('.btn-submit');
  submitButton.addEventListener('click', () => {
    const nameInput = modalContent.querySelector('.name-input');
    const messageInput = modalContent.querySelector('.message-input');
    const name = nameInput.value;
    const message = messageInput.value;

    createComment(showId, name, message);
    nameInput.value = '';
    messageInput.value = '';
  });
};

export default createPopup;