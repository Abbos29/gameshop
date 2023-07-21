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
  spaceBetween: 140,
  
  breakpoints: {
    1450: {
      slidesPerView: 1,
      spaceBetween: 120,
    },
    1390: {
      slidesPerView: 1,
      spaceBetween: 300,
    }
  }
});





// DROPDOWN

var dropdownButtons = document.getElementsByClassName("dropdown__btn");
var dropdownContainers = document.getElementsByClassName("dropdown__body");

// Закрытие всех открытых dropdown'ов при клике вне области
document.addEventListener("click", function(event) {
  for (var i = 0; i < dropdownContainers.length; i++) {
    var container = dropdownContainers[i];
    var button = dropdownButtons[i];
    if (!container.contains(event.target) && !button.contains(event.target)) {
      container.classList.remove("show");
    }
  }
});

// Открытие/закрытие dropdown'a при клике на кнопку
for (var i = 0; i < dropdownButtons.length; i++) {
  (function(index) {
    var button = dropdownButtons[index];
    var container = dropdownContainers[index];
    button.addEventListener("click", function() {
      container.classList.toggle("show");
    });
  })(i);
}

// Замена текста в главной кнопке и закрытие dropdown'a
function replaceMainButton(button, containerIndex) {
  var container = dropdownContainers[containerIndex - 1];
  var mainButton = container.previousElementSibling;
  mainButton.innerHTML = button.innerHTML;
  container.classList.remove("show");
}

// Set initial selected items
var initialItems = document.getElementsByClassName("dropdown__item");
for (var i = 0; i < initialItems.length; i++) {
  var dropdown = initialItems[i].closest(".dropdown");
  var mainButton = dropdown.querySelector(".dropdown__btn");
  mainButton.innerHTML = initialItems[i].innerHTML;
}

// Set first item as selected
for (var i = 0; i < dropdownButtons.length; i++) {
  var container = dropdownContainers[i];
  var firstItem = container.firstElementChild;
  var mainButton = container.previousElementSibling;
  mainButton.innerHTML = firstItem.innerHTML;
}
