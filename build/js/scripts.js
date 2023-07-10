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

const swiperGame1 = new Swiper('.swiper__games-1', {
  
  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // initialSlide: 3,
  // centeredSlides: true,
  // grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 20,
  
  breakpoints: {
    1450: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 5,
    },
    768: {
      slidesPerView: 3,
    },
    480: {
      slidesPerView: 2,
    }
  }
});


const swiperGame2 = new Swiper('.swiper__games-2', {
  
  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // initialSlide: 1,
  // centeredSlides: true,
  // grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 20,
  
  breakpoints: {
    1450: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    }
  }
});





// DROPDOWN

var mainButtons = document.getElementsByClassName("dropdown__btn");
var buttonContainers = document.getElementsByClassName("dropdown__body");
var dynamicButtons = document.getElementsByClassName("dropdown__item");

for (var i = 0; i < mainButtons.length; i++) {
    mainButtons[i].addEventListener("click", function() {
        var container = this.nextElementSibling;
        container.style.display = "block";
    });
}

function replaceMainButton(button, containerIndex) {
    var container = buttonContainers[containerIndex - 1];
    var mainButton = container.previousElementSibling;
    mainButton.innerHTML = button.innerHTML;
    container.style.display = "none";
}

// Set the first buttons as selected initially
replaceMainButton(dynamicButtons[0], '1');
// replaceMainButton(dynamicButtons[0], '2');

