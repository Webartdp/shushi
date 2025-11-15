document.addEventListener('DOMContentLoaded', function () {

    /* ---------- SLIDER .center ---------- */
    $('.center').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="custom-prev"><img src="assets/img/prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="custom-next"><img src="assets/img/next.svg" alt=""></button>'
    });

    /* ---------- SLIDER .slider-product ---------- */
    $('.slider-product').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button type="button" class="custom-prev"><img src="assets/img/prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="custom-next"><img src="assets/img/next.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    /* ---------- SLIDER .sale-slider ---------- */
    $('.sale-slider').slick({
        centerMode: true,
        centerPadding: '300px',
        slidesToShow: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: '<button type="button" class="custom-prev"><img src="assets/img/prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="custom-next"><img src="assets/img/next.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    infinite: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    infinite: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    /* ---------- SEO text toggle ---------- */
    const clip = document.getElementById('seo-clip');
    const btn = document.getElementById('seo-toggle');

    function setState(open) {
        clip.classList.toggle('is-open', open);
        btn.setAttribute('aria-expanded', String(open));
        btn.textContent = open ? 'Закрити текст для роботів' : 'Читати текст для роботів';

        if (!open) {
            btn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }

    if (btn) {
        btn.addEventListener('click', function () {
            const open = !clip.classList.contains('is-open');
            setState(open);
        });
    }

$('.product-image-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
  fade: true,
  cssEase: 'linear',
  arrows: false,
  autoplaySpeed: 2000,
});
$('.slider-menu').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 6,
  prevArrow: '<button type="button" class="custom-prev-menu"><img src="assets/img/prev.svg" alt=""></button>',
  nextArrow: '<button type="button" class="custom-next-menu"><img src="assets/img/next.svg" alt=""></button>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});


});