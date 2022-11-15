// 點擊漢堡後出現子選單
$(".menu-icon").on("click", function(){
    $(".main_nav_wrap").toggleClass("is-activeIn");
});
// 我有問題！！！！！！！！！！！！！！既得來改我
//點擊嚴選療程按鈕，出現療程內容
const sub_nav = document.getElementById("sub_nav");
$(".main_nav span").on("click", function(){
    $("#sub_nav").toggleClass("sub_nav_in");
    console.log("nav btn clicked");
})

// 點擊選單後 body畫面固定   
$(".menu-icon").on("click", function(){
    $("body").toggleClass("overfloat");
});