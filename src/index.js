import './styles/main.scss';
import logo from './assets/movie-logo.png';
import fetchShows from './modules/fetchShows.js';
// import fetchLikes from './modules/fetchLikes.js';
// import addLike from './modules/addLike.js';

const headerLogo = document.querySelector('#logo');
const footerImg = document.querySelector('.footer-logo');
const baseUrl = 'https://api.tvmaze.com/search/shows?q=marvel';

headerLogo.src = logo;
footerImg.src = logo;

fetchShows(baseUrl);

// const displayLikes = (likes) => {
//   const likeBtn = document.querySelector('.like-btn');
//   const likeCount = document.querySelector('.like-count');

//   for (let i = 0; i < 8; i +=1) {
//     const like = likes[i];

//   }
// }
