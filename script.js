'use strict';

(() => {
    let wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animate__animated',
        offset: 200,
    })
    wow.init();

    document.querySelectorAll('.methods__slide').forEach(inner => inner.addEventListener('click', function () {
        this.children[0].classList.toggle('flipped');
    }));

    const mobileMenuSwitch = document.querySelector('.mobile-menu-toggle');
    const menu = document.querySelector('.header-nav-list');

    mobileMenuSwitch.addEventListener('click', function () {
        this.classList.toggle('active');
        menu.classList.toggle('active');
    });
    document.querySelectorAll('.header .nav__item').forEach(item => item.addEventListener('click', function () {
        mobileMenuSwitch.classList.toggle('active');
        menu.classList.toggle('active');
    }));

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
        intervalId = setInterval(showNextSlide, 5000);
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

    const methodsSlider = document.getElementById('methods-slider');
    $(methodsSlider).slick({
        slidesToShow: 3,
        infinite: false,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false,
                }
            }
        ],
    });

    const portfolioSlider = document.getElementById('portfolio__slider');
    $(portfolioSlider).slick({
        autoplay: true,
        slidesToShow: 3,
        autoplaySpeed: 1500,
        cssEase: 'linear',
        arrows: false,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 424,
                settings: {
                    slidesToShow: 1,
                }
            }
        ],
    });
})();