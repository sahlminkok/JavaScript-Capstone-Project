import displayShows from './displayShows.js';

const fetchShows = (baseUrl) => {
  fetch(baseUrl)
    .then((response) => response.json())
    .then((data) => {
      const result = data.map((element) => element.show);
      displayShows(result);
    });
};

export default fetchShows;