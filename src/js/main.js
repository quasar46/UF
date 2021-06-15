$(document).ready(function () {

    $(function () {
        $('.tabs__caption').on('mouseover', 'li:not(.active)', function () {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('.tabs').find('.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });
    });

    $(function () {
        $('.tabs__caption2').on('click', 'li:not(.active)', function () {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('.tabs').find('.tabs__content2').removeClass('active').eq($(this).index()).addClass('active');
        });
    });

    $('.slick-objects').slick({
        slidesToShow: 2,
        infinite: true,
        autoplay: true,
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

    $('.missions').slick({
        slidesToShow: 4,
        infinite: true,
        prevArrow: $('.slick-missions__prev'),
        nextArrow: $('.slick-missions__next'),
    })

    $('.execution__slick ').slick({
        slidesToShow: 2,
        infinite: true,
        prevArrow: $('.slick-execution__prev'),
        nextArrow: $('.slick-execution__next'),
    })

    $(function () {
        let $slider = $('.slider-main');

        if ($slider.length) {
            let currentSlide;
            let slidesCount;
            let sliderCounter = document.createElement('div');
            sliderCounter.classList.add('slider__counter');

            let updateSliderCounter = function (slick, currentIndex) {
                currentSlide = slick.slickCurrentSlide() + 1;
                currentSlide = currentSlide < 10 ? "0" + currentSlide : currentSlide;
                slidesCount = slick.slideCount;
                slidesCount = slidesCount < 10 ? "0" + slidesCount : slidesCount;
                $(sliderCounter).html(currentSlide + '<span class="line"></span>' + slidesCount)
            };

            $slider.on('init', function (event, slick) {
                $slider.prepend(sliderCounter);
                // $('.slider-main__title').prepend(sliderCounter);
                updateSliderCounter(slick);
            });

            $slider.on('afterChange', function (event, slick, currentSlide) {
                updateSliderCounter(slick, currentSlide);
            });

            $slider.slick({
                slidesToShow: 1,
                // infinite: false,
                autoplay: true,
                prevArrow: $('.slick-arrow__prev'),
                nextArrow: $('.slick-arrow__next'),
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
                autoplay: true,
                prevArrow: $('.slick-advantage__prev'),
                nextArrow: $('.slick-advantage__next'),
            });
        }
    });

    $('#clamp').on('click', function () {
        $(this).siblings('p').toggleClass('line-clamp');
    })

    $('.toggle').on('click', function () {
        $(this).toggleClass('active');
        $(this).siblings().slideToggle();
    })

    $(function () {
        let headerMode = $('.header-main__head--mode');

        $(window).scroll(function () {
            if ($(this).scrollTop() > 1) {
                headerMode.addClass('active');
            } else {
                headerMode.removeClass('active');
            }
        });
    })

    setTimeout(function tick() {
        if (window.innerWidth < 768) {
            $('.header-main__animation').toggleClass('active');
            timerId = setTimeout(tick, 1000);
        }
    }, 2000);

    let showMore = function () {
        $('.device__show-more').on('click', function () {
            $(this).siblings('.hideContent').toggleClass('more');
        });
    }
    showMore();

    $(function () {
        $('a[href^="#"]').on('click', function (evt) {
            evt.preventDefault();

            var sc = $(this).attr("href"),
                dn = $(sc).offset().top;

            $('html, body').animate({
                scrollTop: dn
            }, 500);
        });
    });

});

document.addEventListener('DOMContentLoaded', function () {
    let showPopup = function () {

        let datas = document.querySelectorAll('[data-caption]');

        datas.forEach(data => {
            data.onmouseover = function (event) {
                let popupBlock = document.createElement('div');
                popupBlock.classList.add('popup-block');
                let html = data.getAttribute('data-caption');
                popupBlock.innerHTML = html;
                data.append(popupBlock);
            }
            data.onmouseout = function (event) {
                let popup = data.querySelector('.popup-block');
                popup.remove();
            }
        })
    }
    showPopup();

    const showMenu = function () {
        const body = document.querySelector('body');
        const burgers = document.querySelectorAll('.burger');
        const menu = document.querySelector('.menu');
        const close = document.querySelector('.menu__close');

        burgers.forEach(item => {
            item.addEventListener('click', () => {
                menu.classList.add('active');
                body.style.overflow = "hidden";
            })
        })
        close.addEventListener('click', () => {
            menu.classList.remove('active');
            body.style.overflow = "";
        })
    }
    showMenu();

    const titleToggle = document.querySelectorAll('.list-items__title');

    titleToggle.forEach((item) => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
            item.nextSibling.classList.toggle('active');
        })
    })

    const buttonsShow = document.querySelectorAll('.show-more');
    buttonsShow.forEach(button => {
        button.addEventListener('click', () => {
            for (let i of button.previousSibling.children[0].children) {
                i.classList.toggle('show');
            }
        })
    })

    const buttonsShowMode = document.querySelectorAll('.show-more-mode');
    buttonsShowMode.forEach(button => {
        button.addEventListener('click', () => {
            for (let i of button.previousSibling.children) {
                i.classList.toggle('show');
            }
        })
    })
})