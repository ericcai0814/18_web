// ====================== 共用區 ======================
    // 導覽列下滑消失
    let lastPos = 0
    const nav = document.querySelector('#nav');
    const section1 = document.querySelector('.section1');

    // 1. 消失
    document.addEventListener('scroll',function(){
    let currentPos =  window.scrollY;
    //   往下滑
    if(currentPos > lastPos){
        nav.style.top = "-80px";
    }else{
    nav.style.top = "0px";
    }
    lastPos = currentPos;
});
    

    // AOS scroll 動畫
    AOS.init();

    var splide = new Splide('.splide', {
    type: 'loop',
    perPage: 3,
    autoplay: true
    });
    var elms = document.getElementsByClassName('splide');
    for (var i = 0; i < elms.length; i++) {
    new Splide(elms[i]).mount();
    }
 
    