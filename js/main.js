
'use strict';

let menuLink = document.querySelectorAll('.menu__list-link');
let menuBox = document.querySelector('.--all__inner-works');

menuLink.forEach((el, i, a) => {
    el.addEventListener('click', e => {
        a.forEach(a => {
            if (a == e.target) {
                a.classList.toggle('active')
            } else {
                a.classList.remove('active')
            }
        })
        menuBox.classList.toggle('active')
    })
})

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.header__top-list');
const links = document.querySelector('.header__top-list li');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    body.classList.toggle('lock');
});







