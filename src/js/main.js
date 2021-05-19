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

    $('.toggle').on('click', function () {
        $(this).toggleClass('active');
        $(this).siblings().slideToggle();
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
        if (window.innerWidth < 768) {
            $('.header-main__animation').toggleClass('active');
            timerId = setTimeout(tick, 1000);
        }

    }, 2000);

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

    let showDevice = function () {
        let deviceWrapper = document.querySelector('.selection');
        let tabsMini = deviceWrapper.querySelectorAll('button[data-for="deviceMini"]');
        let tabsNorma = deviceWrapper.querySelectorAll('button[data-for="deviceNorma"]');
        let tabsProm = deviceWrapper.querySelectorAll('button[data-for="deviceProm"]');
        let contentDevice = deviceWrapper.querySelectorAll('.selection__wrapper');

        tabsMini.forEach((tab, i) => {
            tab.onclick = function () {
                contentDevice.forEach(item => {
                    item.classList.remove('active');
                })
                contentDevice[0].classList.add('active');
            }
        })
        tabsNorma.forEach((tab, i) => {
            tab.onclick = function () {
                contentDevice.forEach(item => {
                    item.classList.remove('active');
                })
                contentDevice[1].classList.add('active');
            }
        })
        tabsProm.forEach((tab, i) => {
            tab.onclick = function () {
                contentDevice.forEach(item => {
                    item.classList.remove('active');
                })
                contentDevice[2].classList.add('active');
            }
        })
    }
    showDevice();

    let showMore = function () {
        $('.show-more').on('click', function (event) {
            $(this).siblings('.hideContent').toggleClass('active');
        });
    }
    showMore();

    document.addEventListener('click', function (evt) {
        console.log(evt.target.className);
    })


});

$(function () {
    $('a[href^="#"]').on('click', function (evt) {
        evt.preventDefault();

        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;

        $('html, body').animate({ scrollTop: dn }, 500);
    });
});