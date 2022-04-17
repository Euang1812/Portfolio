'use strict'

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

const home = document.querySelector('#home');
const about = document.querySelector('#about');
const skill = document.querySelector('#skill');
const work = document.querySelector('#work');
const testimonials = document.querySelector('#testimonials');
const contact = document.querySelector('#contact');

document.addEventListener('scroll',()=>{
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }
});

//Handle scrolling when tapping on the navbar menu

const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click',(e)=>{
    const link = e.target.dataset.link;
    if(link == null){
        return;
    }

    console.log(e.target.dataset.link);
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: 'smooth'});
});