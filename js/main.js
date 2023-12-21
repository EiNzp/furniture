
// burger menu

const iconMenuButton = document.querySelector('.menu__icon-button');
const menuBody = document.querySelector('.menu__body');

if (iconMenuButton && menuBody) {
  iconMenuButton.addEventListener('click', function (e) {
    document.body.classList.toggle('body_lock')
    iconMenuButton.classList.toggle('menu__icon-button_active');
    menuBody.classList.toggle('menu__body_active');
  })
}

// brands
const brandsLink = document.querySelector('.brands__link');
const brandsItems = document.querySelectorAll('.brands__item');

if (brandsItems) {
  if (brandsItems.length > 8) {
    for (let i = 8; i < brandsItems.length; i++) {
      brandsItems[i].classList.add('brands__item_hide');
    }
    brandsLink.addEventListener('click', function (e) {
      e.preventDefault()
      for (let i = 8; i < brandsItems.length; i++) {
        brandsItems[i].classList.toggle('brands__item_hide');
      }
      brandsLink.classList.toggle('brands__link_active')
    })
  }
}

// slider Swiper

// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });

// const swiper = new Swiper('.leading-brands__slider', {
//   // Optional parameters
//   direction: 'horizontal',
//   // loop: true,

//   // Navigation arrows
//   navigation: {
//     nextEl: '.leading-brands__button-next',
//     prevEl: '.leading-brands__button-prev',
//   },

//   keyboard: {
//     enabled: true,
//     onlyInViewport: true,
//   },

//   // slidesPerView: 1,
//   slidesPerView: 'auto',
//   spaceBetween: 40,

//   slidesPerGroup: 1,

//   // centeredSlides: true,

//   initialSlide: 0,

//   grabCursor: true,
// });


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  // loop: true,
  slidesPerView: 2,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1.15,      
      spaceBetween: 30
    },
    900: {
      slidesPerView: 2.15,      
      spaceBetween: 30
    }
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',

    clickable: true,

    dynamicBullets: true,
  },

  grabCursor: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});