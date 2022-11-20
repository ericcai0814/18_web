

//輪播  圖
    $(".slickContainer").slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
    });

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
    