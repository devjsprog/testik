function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});



$(document).ready(function () {

  // HEADER ON SCROLL
  const headerBottom = $(".header-bottom");
  $(document).scroll(function () {
    if (window.pageYOffset > $(".header").height() * 1.25) {
      headerBottom.addClass("_fixed");
    } else {
      headerBottom.removeClass("_fixed");
    }
  });

  // SLIDER
  const slider = new Swiper('.game-slider__body', {
    navigation: {
      nextEl: '.game-slider__next',
      prevEl: '.game-slider__prev',
    },
    pagination: {
      el: '.game-slider__pagination',
      clickable: true,
    },
    centeredSlides: true,
     slidesPerView: 2,
     loop: true,
     spaceBetween: 65,
     slideToClickedSlide: true,
     autoHeight: true,
     autoplay: {
        delay: 5000, 
        stopOnLastSlide: false,
     },
    speed: 800,
    preloadImages: false,
    lazy: {
      loadPrevNext: true,
    },
    allowTouchMove: false,

    breakpoints: {
      320: {
         slidesPerView: 1,         
      },
      576: {
         slidesPerView: 1,
      },
      760: {
         slidesPerView: 2,
         spaceBetween: 25,
         centeredSlides: false,
         slideToClickedSlide: false,
      },
      992: {
         slidesPerView: 2,
         spaceBetween: 65,
         centeredSlides: true,
      }

    }


  });

  
  // HAMBURGER 
  $('.header__burger').click(function () {
    $(this).toggleClass('_animated');
    $('.header-mobile').toggleClass('_active');
    $('body').toggleClass('_fixed');
  });

  const flipCards = document.querySelectorAll('.info-status__card');
  // FLIP CARDS
  if($(window).width() <= 992) {
    flipCards.forEach(element => {
      element.addEventListener('click', function () {
        this.classList.toggle('_reversed');
      });
    });
  }

  // DROPDOWN
  let isMobile = {
    Android: function() {return navigator.userAgent.match(/Android/i);},
    BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
    iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
    Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
    Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
    any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
  };
  if(isMobile.any()) {
    $('body').addClass('touch');
    $('.header-top__language').click(function(){
      $(this).toggleClass('_active');
    });
  } else {
    $('body').addClass('mouse');
  }



});

