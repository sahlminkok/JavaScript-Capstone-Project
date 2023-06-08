import './styles/main.scss';
import logo from './assets/movie-logo.png';
import fetchShows from './modules/fetchShows.js';

const headerLogo = document.querySelector('#logo');
const footerImg = document.querySelector('.footer-logo');
const baseUrl = 'https://api.tvmaze.com/search/shows?q=marvel';

headerLogo.src = logo;
footerImg.src = logo;

fetchShows(baseUrl);
