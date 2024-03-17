$(function() {
    const mainSwiper=new Swiper(".main_slider .mainSwiper",{
slidesPerView: 1,
pagination: { 
    el: ".swiper-pagination",
},loop: true, 
autoplay: {
    delay: 3000
}
});
$("#gnb > ul > li").hover(
function(){
    $("#gnb").addClass("active");
    $(this).find("ul").addClass("active");
    $(".menu_bg").addClass("active");
},
function(){
    $("#gnb").removeClass("active");
    $(this).find("ul").removeClass("active");
    $(".menu_bg").removeClass("active");
}
);

$("#gnb > ul > li > a").focusin(function(){
$("#gnb").addClass("active");
$(this).parent().addClass("active");
$(this).next().addClass("active");
$(".menu_bg").addClass("active");
});

$("#gnb li li:last-child").focusout(function(){
$("#gnb").removeClass("active");
$(this).parent().parent().removeClass("active");
$(this).parent().removeClass("active");
$(".menu_bg").removeClass("active");
});



$(".section1 .pm_type .inner").hover(function(){
$(this).addClass("show_modal")

},
function(){
$(this).removeClass("show_modal")
}
);


$(".section2 .pm_type .inner").hover(function(){
$(this).addClass("show_modal_on")

},
function(){
$(this).removeClass("show_modal_on")
}
);

$(".section2 .image_type .inner").hover(function(){
$(this).children().addClass("p");

},
function(){
$(this).children().removeClass("p");
}
);

});
