import displayShows from './displayShows.js';

const fetchShows = (baseUrl) => {
  fetch(baseUrl)
    .then((response) => response.json())
    .then((data) => {
      const result = data.map((element, index) => ({
        ...element.show,
        id: `show-${index}`,
      }));
      displayShows(result);
    });
};

export default fetchShows;