 //輪播圖
 var splide = new Splide('.splide', {
    type: 'loop',
    perPage: 3,
    autoplay: true
});
var elms = document.getElementsByClassName('splide');
for (var i = 0; i < elms.length; i++) {
    new Splide(elms[i]).mount();
}
