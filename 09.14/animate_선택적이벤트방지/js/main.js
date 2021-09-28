/*
.fadeIn(속도) : fade효과 추가(서서히 나타남)
.fadeOut(속도) :fade효과 추가 (서서히 사라짐) 

.show() : display:block으로 요소 보임 
.hide() : display:none으로 요소 숨김  

//DOM Caching 
: 별도의 변수에 자주 사용하는 값을 저장하는 것 
:DOM요소를 캐싱하면 코드의 실행속도가 크게 향상 
*/

//DOM Caching
const $btn1 = $(".btn1"); 
const $btn2 = $(".btn2"); 
const $top = $(".top"); 
const $right = $(".right"); 
const $bottom = $(".bottom"); 
const $left = $(".left"); 
const $content = $(".content"); 
const $close1 = $content.children(".close");
const $wrap2 = $("#wrap2");
const $close2 = $wrap2.children(".close"); 
let speed = 1000; 
let isDone = true; 

//event binding 
$btn1.on("click", function(e){
    e.preventDefault(); 
        

    if(isDone){
        closeWrap2(); 
        openWrap1(); 

        isDone = false; 
    } 
}); 

//close1을 클릭했을 때 
$close1.on("click", function(e){
    e.preventDefault(); 
    closeWrap1();     
});

$btn2.on("click", function(e){
    e.preventDefault();
    closeWrap1();  
    openWrap2(); 
});

$close2.on("click", function(e){
    e.preventDefault(); 
    closeWrap2(); 
});

/* 함수 정의 부분  */
//첫번째 박스 여는 함수 정의
function openWrap1(){
    $top.animate({width: "100%"},speed, function(){
        $right.animate({height:"100%"},speed, function(){
            $bottom.animate({width: "100%"},speed, function(){
                $left.animate({height :"100%"},speed, function(){
                    $content.fadeIn(speed/2 , function(){
                        $close1.animate({right: 30, opacity:1}, speed); 
                        isDone = true; 
                    }); 
                });
            });
        });
    }); 
}

//첫번째 박스 닫는 함수 정의 
function closeWrap1(){
    $close1.animate({ right:0, opacity: 0}, speed/2); 
    $content.fadeOut(speed/2, function(){
        $top.animate({width: 0},speed/2);
        $right.animate({ height: 0}, speed/2); 
        $bottom.animate({ width: 0},speed/2); 
        $left.animate({height:0},speed/2);  
    });
}

//두번째 박스 여는 함수 정의 
function openWrap2(){
    $wrap2.animate({height : 400, marginTop: -200 },speed); 
}

//두번째 박스 닫는 함수 정의 
function closeWrap2(){
 $wrap2.animate({ height: 0, marginTop:0},speed/2); 
}