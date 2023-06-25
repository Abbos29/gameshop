// Custom Scripts
// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const navInner = document.querySelector('.navbar__inner')
  const navInner2 = document.querySelector('.navbar__inner-2')
  const body = document.querySelector('body')
  const header = document.querySelector('header')

  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      header.classList.add('active')
      navInner.classList.add('active')
      navInner2.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      header.classList.remove('active')
      navInner.classList.remove('active')
      navInner2.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  menu.addEventListener("click", (event) => {
    if(event.target){
      menu.classList.remove('active')
      header.classList.remove('active')
      navInner.classList.remove('active')
      navInner2.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      header.classList.remove('active')
      navInner.classList.remove('active')
      navInner2.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
window.addEventListener('scroll', fixedNav)





// SWIPER

const swiperGame5 = new Swiper('.swiper__games-5', {
  
  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  initialSlide: 3,
  centeredSlides: true,
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 20,
  
  breakpoints: {
    1450: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    }
  }
});
