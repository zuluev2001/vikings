$(function() {



    $('.menu__btn').on('click', function() {
        $('.menu__list').toggleClass('menu__list--active');
    });


    $('.heroes__silder-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.heroes__silder-text',
        prevArrow: '<button class="slick-btn slick-prev"><img src="images/arrow-left.png" alt="prev"></button>',
        nextArrow: '<button class="slick-btn slick-next"><img src="images/arrow-right.png" alt="next"></button>',
        responsive: [{
            breakpoint: 769,
            settings: {
                arrows: false
            }
        }]
    });

    $('.heroes__silder-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.heroes__silder-img',
        fade: true,
        arrows: false
    });


});