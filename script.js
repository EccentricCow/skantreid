'use strict';

(() => {
    let wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animate__animated',
        offset: 200,
    })
    wow.init();
    // main
    const toggle = document.querySelector('.mobile-menu-toggle');
    const menu = document.querySelector('.header-nav-list');

    toggle.addEventListener('click', function () {
        this.classList.toggle('active');
        menu.classList.toggle('active');
    });

    const studioImage = document.getElementById('studio-image');
    const r = document.querySelector(':root');
    const mainSlider = document.querySelector('.main__slider');
    const headerNavItems = document.querySelectorAll('.header-nav-item a:not(.phone-link)');
    const mainSliderBtns = document.querySelectorAll('.slide_btn');
    let currentSlide = 0;
    let direction = 1;
    let intervalId;

    resetInterval();

    mainSliderBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            showNextSlide();
            resetInterval();
        })
    })

    function showNextSlide() {
        if (currentSlide === 0) {
            currentSlide = 1;
            direction = 1;
        } else {
            currentSlide = 0;
            direction = -1;
        }
        headerNavItems.forEach(item => {
            item.classList.remove('light-line', 'dark-line');
        });
        mainSlider.classList.remove('slide-left', 'slide-right');
        if (direction === 1) {
            mainSlider.classList.add('slide-right');
            headerNavItems.forEach(item => item.classList.add('light-line'));
            r.style.setProperty('--mainColor', 'white');
            studioImage.classList.add('animate-spine');
        } else {
            mainSlider.classList.add('slide-left');
            headerNavItems.forEach(item => item.classList.add('dark-line'));
            r.style.setProperty('--mainColor', 'var(--darkGray)');
            studioImage.classList.remove('animate-spine');
        }
    }

    function resetInterval() {
        clearInterval(intervalId);
        // intervalId = setInterval(showNextSlide, 5000);
    }

    if (window.matchMedia('(max-device-width: 1023px)').matches) {
        const advantagesSlider = document.getElementById('advantages');
        $(advantagesSlider).slick({
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: false,
            variableWidth: true,
            arrows: true,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ],

        });
        document.querySelectorAll('.advantages.slick-slider .slick-arrow').forEach(btn =>
            document.querySelector('.advantages.slick-slider .slick-list').appendChild(btn)
        );
    }

    // if (window.matchMedia('(max-device-width: 767px)').matches) {
    //     $(advantagesSlider).slick();
    // }


    // methods
    const methodsSlider = document.getElementById('methods-slider');
    $(methodsSlider).slick({
        slidesToShow: 3,
        infinite: false,
    });


})();


// let direction = false;
// const mainSlider = $('.main__slider');
// mainSlider.slick({
//     arrows: false,
//     infinity: false,
//     // autoplay: true,
//     autoplaySpeed: 1000,
//     pauseOnFocus: false,
//     pauseOnHover: false,
//     slidesToShow: 1,
//     fade: false,
// })
//     .on('afterChange', (event, slick, currentSlide, nextSlide) => {
//         // mainSlider.slick('slickGoTo', 0);
//         console.log(currentSlide);
//     })


// $('.advantages__inner').slick({
//     infinite: false,
//     lazyLoad: 'ondemand',
//     variableWidth: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     centerMode: true,
//     appendArrows: $('#advantages__num'),
//     prevArrow: '<button type="button" id="advantages__arrow_prev" class="slider__arrows">\n' +
//         '                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">\n' +
//         '                    <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>\n' +
//         '                </svg>\n' +
//         '            </button>',
//     nextArrow: '<button type="button" id="advantages__arrow_next" class="slider__arrows">\n' +
//         '                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">\n' +
//         '                    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>\n' +
//         '                </svg>\n' +
//         '            </button>',
// })
//     .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
//         advantagesNumCenter.text(sliderChangeActiveNum(nextSlide));
//     })
// }

// autoplay: false,
//     allowTouchMove: false,
//     swipe: false,
//     infinite: false,
//     arrows: false,
//     variableWidth: true,
//     slidesToShow: 6,
//     focusOnSelect: true,
//     asNavFor: '.portfolio__slider'


// infinite: false,
//     lazyLoad: 'ondemand',
//     initialSlide: 1,
//     centerMode: true,
//     variableWidth: true,
//     centerPadding: 0,
//     responsive: [
//     {
//         // изменения при 1140р
//         breakpoint: 1142,
//         settings: {
//             initialSlide: 0,
//         }
//     },
// ],
//     appendArrows: $('#reviews__num'),
//     prevArrow: $('#reviews__arrow_prev'),
//     nextArrow: $('#reviews__arrow_next'),