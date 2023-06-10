// showCounter.js
const countDisplayedShows = () => {
  const showElements = document.querySelectorAll('.show-item');
  return showElements.length;
};

export default countDisplayedShows;