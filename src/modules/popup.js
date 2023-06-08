const popup = (movie) => {
  // Create a modal element
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.style.display = 'block';

  // Create the modal content
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  modalContent.innerHTML = `
    <span class="close">&times;</span>
    <img src="${movie.image.original}" class="img-popup">
    <h2 class="movie-heading">${movie.name}</h2>
    <div class="dis">
    <p>Type: ${movie.type}</p>
    <p>Genres : ${movie.genres}</p>
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
};

export default popup;