//輪播圖
$(".slickContainer1").slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
        {
            breakpoint: 414,
            settings: {
                //arrows: false,
                //centerMode: true,
                centerPadding: '20px',
                slidesToShow: 1
            }
        }
        ],
})


/* 手機版輪播圖 */

$(".slickContainer2").slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
})

// scroll_top 
$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});

$("#toTop").click(function() {
    $("html, body").animate({scrollTop: 0}, 500);
});
    