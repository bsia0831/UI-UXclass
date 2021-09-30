const $slider = $("#slider"); 
const $panel = $slider.find(".panel"); 
const $btns = $slider.find(".navi li"); 
const $circle = $slider.find("#circle"); 
let enableClick = true; 
let speed = 1000; 

//event binding 
$btns.on("click", function(e){
    e.preventDefault(); 
    let isOn = $(this).hasClass("on"); 
    if(isOn) return; 

    var i = $(this).index(); 

    if(enableClick){         
        movePanel(i); 
        activationBtn(i);  
        rotation(i); 
        enableClick = false; 
    }   
}); 

//내비버튼 활성화 함수 정의 
function activationBtn(index){
    $btns.removeClass("on"); 
    $btns.eq(index).addClass("on");
}

//circle메뉴 활성화 함수 정의 
function rotation(index){
    $circle.removeClass(); 
    $circle.addClass("rot"+index);
}

//슬라이드 패널 함수 정의 
function movePanel(index){
    $panel.animate({ marginLeft : (-100 * index) +"%"}, speed, function(){
        enableClick = true; 
    });
}