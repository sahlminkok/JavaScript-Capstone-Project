const displayShows = (shows) => {
  const showsList = document.querySelector('.shows-list');
  showsList.innerHTML = '';
  shows.forEach((result) => {
    const div = document.createElement('div');
    div.className = 'show-item';
    div.innerHTML = `
      <img src="${result.image.original}" alt="${result.name}" class="show-image">
      <p>${result.name}</p>
      <button>Comments</button>
      <button>Reservations</button>
    `;

    showsList.appendChild(div);
  });
};

export default displayShows;