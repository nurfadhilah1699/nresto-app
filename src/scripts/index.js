import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import './data/katalogList.js';

const menuToggle = document.querySelector('#menuToggle');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const navMobile = document.querySelector('#navMobile');

menuToggle.addEventListener('click', function (event) {
    navMobile.classList.toggle('open');
    event.stopPropagation();
});

hero.addEventListener('click', function () {
    navMobile.classList.remove('open');
});

main.addEventListener('click', function () {
    navMobile.classList.remove('open');
});

