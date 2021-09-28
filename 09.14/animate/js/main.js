/*
$(선택자).animate({바꿀속성},지속시간,가속도효과,콜백함수); 

animate()로 모션 적용이 불가능한 속성 
- transform, gradient, box-shadow

.animate()메서드의 마지막 인수에 함수(콜백함수)를 넣으면 해당함수는 강제로 동기화를 해준다 

자주쓰는 특이한 가속도 효과명
"easeOutBounce" - 통통 튕기는 모션 
"easeOutBack" - 살짝 밀렸다가 다시 제자리로 돌아오는 모션 
"easeOutElastic" - 고무줄 튕기듯 흔들리는 모션
"easeOutExpo" - 점점 느려지는 모션 
"easeInOutBack"  
*/


$(".btn1").on("click", function(){
    $(".box1").animate({marginLeft : 700},1000,"easeInOutBack" ); 

}); 

/*
버튼2를 클릭하면 
박스2가 1초동안 margin-left가 500만큼 이동하고 그 다음 
        1초동안 margin-top이 500만큼 이동하고 그 다음 
        1초동안 margin-left이 0으로 이동하고 그 다음  
        1초동안 margin-top이 0으로 이동한다
*/
/*
$(".btn2").on("click", function(){
    $(".box2").animate({ marginLeft : 500},1000); 
    $(".box2").animate({marginTop: 500},1000); 
    $(".box2").animate({marginLeft: 0},1000); 
    $(".box2").animate({marginTop:0},1000, function(){
        $(this).css({backgroundColor :"red"})
    });
}); 
*/
/*
$(".btn2").on("click", function(){
    $(".box2").animate({marginLeft: 500},1000, function(){
        $(this).animate({marginTop: 500},1000, function(){
            $(this).animate({marginLeft: 0},1000, function(){
                $(this).animate({marginTop:0},1000, function(){
                    $(this).css({backgroundColor:"red" });
                });
            });
        });
    });
});
*/
//선택자가 동일한 경우 메서드를 계속해서 연결해서 호출하는 방식 (메서드 체이닝)
$(".btn2").on("click", function(){
    $(".box2")
    .animate({marginLeft: 500},1000)
    .animate({marginTop: 500},1000)
    .animate({marginLeft : 0},1000)
    .animate({marginTop:0},1000, function(){
        $(this).css({backgroundColor :"red"}); 
    });
    
});