

let lastPos = 0
const nav = document.querySelector('#nav');
const section1 = document.querySelector('.section1');

// 1. 消失
document.addEventListener('scroll',function(){
    let currentPos =  window.scrollY;
  //   往下滑
    if(currentPos > lastPos){
        nav.style.top = "-60px";
    }else{
    nav.style.top = "0px";
    }
    lastPos = currentPos;
});

// 2. 換顏色

const changeColor = (entries, observer) =>{
entries.forEach(entry=>{
    if(!entry.isIntersecting){
    nav.classList.add('scrolled');
    }else{
    nav.classList.remove('scrolled');
    }
})
}

let observer = new IntersectionObserver(changeColor);
observer.observe(section1);