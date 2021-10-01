const $slider = $("#slider"); 
const $panel = $slider.find(".panel"); 
const $btns = $slider.find(".navi li"); 

//event binding 
$btns.on("click", function(e){
    e.preventDefault(); 
    var i = $(this).index(); 

    $panel.animate({ marginLeft : (-100 * i) +"%"}, 1000); 

    $btns.removeClass("on"); 
    $btns.eq(i).addClass("on"); 
}); 

/*
marginLeft 
 0 - 첫번째 버튼 클릭시  -100% * 0 
-100% - 두번째 버튼 클릭시  -100% * 1
-200% - 세번째 버튼 클릭시  -100% * 2
-300% - 네번째 버튼 클릭시  -100% * 3 
-400% - 다섯번째 버튼 클릭시  -100% * 4

//prev , next 
$panel.animate({ marginLeft: "-200%"}, 1000, function(){
    $panel.css({ marginLeft: "-100%"}); 

})
*/