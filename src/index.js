import './styles/main.scss';
import logo from './assets/movie-logo.png';
import footerLogo from './assets/logo-open.jpg';

const headerLogo = document.querySelector('#logo');
const footerImg = document.querySelector('.footer-logo');

headerLogo.src = logo;
footerImg.src = footerLogo;