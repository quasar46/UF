$(document).ready(function () {

    $(function () {
        $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });
    });

    $('.slick-objects').slick({
        slidesToShow: 2,
        infinite: true,
        prevArrow: $('.slick-objects__prev'),
        nextArrow: $('.slick-objects__next'),
    })

    const asides = document.querySelectorAll('.objects__aside');
    $('.slick-objects').on('afterChange', function (event, slick, currentSlide) {
        asides.forEach((aside, i) => {
            aside.classList.remove('active');
            if (currentSlide == i) {
                aside.classList.add('active');
            }
        })
    });

    $(function () {
        let $slider = $('.slick-hero');

        if ($slider.length) {
            let currentSlide;
            let slidesCount;
            let sliderCounter = document.createElement('div');
            sliderCounter.classList.add('slider__counter');

            let updateSliderCounter = function (slick, currentIndex) {
                currentSlide = slick.slickCurrentSlide() + 1;
                slidesCount = slick.slideCount;
                $(sliderCounter).html(currentSlide + '<span class="line"></span>' + slidesCount)
            };

            $slider.on('init', function (event, slick) {
                $slider.prepend(sliderCounter);
                updateSliderCounter(slick);
            });

            $slider.on('afterChange', function (event, slick, currentSlide) {
                updateSliderCounter(slick, currentSlide);
            });

            $slider.slick({
                slidesToShow: 1,
                // infinite: false,
                prevArrow: $('.slick-hero__prev'),
                nextArrow: $('.slick-hero__next'),
            });
        }
    });

    $(function () {
        let $sliderAdvantage = $('.slick-advantage');

        if ($sliderAdvantage.length) {
            let currentSlide;
            let slidesCount;
            let sliderCounter = document.createElement('div');
            sliderCounter.classList.add('slider__counter');
            sliderCounter.classList.add('slider__counter--blue');

            let updateSliderCounter = function (slick, currentIndex) {
                currentSlide = slick.slickCurrentSlide() + 1;
                slidesCount = slick.slideCount;
                $(sliderCounter).html(currentSlide + '<span class="line line--blue"></span>' + slidesCount)
            };

            $sliderAdvantage.on('init', function (event, slick) {
                $sliderAdvantage.prepend(sliderCounter);
                updateSliderCounter(slick);
            });

            $sliderAdvantage.on('afterChange', function (event, slick, currentSlide) {
                updateSliderCounter(slick, currentSlide);
            });

            $sliderAdvantage.slick({
                slidesToShow: 4,
                infinite: true,
                prevArrow: $('.slick-advantage__prev'),
                nextArrow: $('.slick-advantage__next'),
            });
        }
    });

    $('#clamp').on('click', function () {
        $(this).siblings('p').toggleClass('line-clamp');
    })

    $(function () {
        let header = $('.header-main__wrapper');
        let headerHeight = header.height();

        $(window).scroll(function () {
            if ($(this).scrollTop() > 1) {
                header.addClass('fixed');
                $('.header-main').css({
                    'paddingTop': headerHeight + 'px'
                });
            } else {
                header.removeClass('fixed');
                $('.header-main').css({
                    'paddingTop': 0
                })
            }
        });
    })

    setTimeout(function tick() {
        $('.header-main__animation').toggleClass('active');
        timerId = setTimeout(tick, 1000);
    }, 2000);


    // function slickObjects() {
    //     const asides = document.querySelectorAll('.objects__aside');
    //     const arrowsObject = document.querySelectorAll('.slick-objects__arrow');
    //     const itemsObject = document.querySelectorAll('.slick-objects__item');
    //     // const countItem = document.querySelectorAll('[data-slick-index]');

    //     function hideAsides() {
    //         asides.forEach(item => {
    //             item.classList.remove('active');
    //         })
    //         asides[0].classList.add('active');
    //     }
    //     hideAsides();

    //     arrowsObject.forEach(arrow => {
    //         arrow.addEventListener('click', function () {
    //             asides.forEach(aside => {
    //                 aside.classList.remove('active');
    //             });
    //             itemsObject.forEach((item, i) => {
    //                 if (item[i].getAttribute('data-slick-index') == i) {
    //                     asides[i].classList.add('active');
    //                 }
    //                 // if (itemsObject[countItem.getAttribute('data-slick-index')].classList.contains('slick-current')) {
    //                 //     asides[countItem.getAttribute('data-slick-index')].classList.add('active');
    //                 // }
    //             })
    //         })
    //     })
    // }

    // slickObjects();

});