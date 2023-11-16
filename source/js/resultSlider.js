$(document).ready(function(){
    $('.result__slider').slick({
        arrows: false,
        variableWidth: false,
        adaptiveHeight: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1488,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 755,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }
    );
});