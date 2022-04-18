'use strict'

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
const navbarName = document.querySelector('.navbar__logo__name');
document.addEventListener('scroll', () => {
  if (window.scrollY > (navbarHeight - 20)) {
    navbar.classList.add('navbar--dark');
    navbarMenu.classList.add('navbar--dark');
    navbarName.classList.add('navbar--dark');

  } else {
    navbar.classList.remove('navbar--dark');
    navbarMenu.classList.remove('navbar--dark');
    navbarName.classList.remove('navbar--dark');
  }

  navbarMenu.classList.remove('open');
});

//Handle scrolling when tapping on the navbar menu

const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (e) => {
  const link = e.target.dataset.link;
  if (link == null) {
    return;
  }

  navbarMenu.classList.remove('open');
  scrollIntoView(link);
});



//navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
})



//handle click on "contact me" button on home
const about = document.querySelector("#about");
const aboutHeight = about.getBoundingClientRect().height;
const contactBtn = document.querySelector('.home__contact');

contactBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
})

//Make home slowly fade to transparent as the window scrolls down

const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = (1 - window.scrollY / homeHeight);
})


//Show "arrow up" button when scrolling down

const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

arrowUp.addEventListener('click', () => {
  scrollIntoView('#home');
});


//Projects

const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  //Remove selection form the previous item and  select the new one
  const active = document.querySelector('.category__btn.selected');
  active.classList.remove('selected');

  const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
  // console.log(e.target.nodeName); nodeName은 무엇인지 확인차.!
  target.classList.add('selected');

  projectContainer.classList.add('anime-out');

  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisble');
      } else {
        project.classList.add('invisble');
      }
    });
    projectContainer.classList.remove('anime-out');
  }, 200);
})

//scroll function
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}


