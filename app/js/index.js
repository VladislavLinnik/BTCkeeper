// wow initialize
new WOW().init();

// review slider
$('.js-reviewSlider').slick({
    arrows: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<button id="reviews-btn-prev" class="reviews-btn btn-prev">&#8592;</button>',
    nextArrow: '<button id="reviews-btn-next" class="reviews-btn btn-next">&#8594;</button>',
    responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
  });



// smooth transition for anchors
$("#menu").on("click","a", function (event) {
    event.preventDefault();

    //забираем идентификатор блока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1000 мс
    $('body,html').animate({scrollTop: top}, 1000);
});

// sticky header
// $(window).scroll(function() {
//     if ($(this).scrollTop() > 500){
//         $('.header').addClass("header--fixed");
//     }
//     else{
//         $('.header').removeClass("header--fixed");
//     }
// });

// mobile navbar
$( '.nav-toggler' ).click( function() {
    if ( $( '#menu' ).is( ':hidden' ) ) {
        $( '#menu' ).show('slideToggle');
    }
    else {
        $( '#menu' ).hide('slideToggle');
    }
});