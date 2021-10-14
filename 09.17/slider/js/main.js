/*
선택자.length : 선택자의 갯수 구하기 
선택자.first() : 선택자중 첫번째 요소 
선택자.last() : 선택자 중 마지막 요소 

자식요소.appendTo(부모요소) : 자식요소를 부모요소안의 마지막부분에 붙여넣음 
자식요소.prependTo(부모요소) : 자식요소를 부모요소안의 처음부분에 붙여넣음  

.animate({속성: 속성값},speed, function(){
    //animate후에 일어날 이벤트
});

$(선택자).on("click", function(e){
    e.preventDefault();

}); 

*/

//애니메이션 시에 prev, next버튼 클릭을 방지하기 위한 변수 설정 
let enableClick = true; 
//list li 갯수를 자동계산하여 css적용하기 위한 변수 설정 
let len = $(".list li").length; 

//list 마지막 li를 list 제일 앞부분에 배치하여 1번 패널이 보이도록 처리 
$(".list li").last().prependTo(".list"); 

//li갯수를 구하여 .list의 width값에 적용 + 기타설정
$(".list").css({
    width: 100 * len +"%",
    marginLeft:"-100%"
}); 

//li갯수를 구하여 li의 widht값에 적용 + 기타설정 
$(".list li").css({
    width: 100 / len +"%", 
    float:"left"
});

//event binding 
//next버튼을 클릭했을 때 
$(".next").on("click", function(e){
    //링크이동금지 
    e.preventDefault(); 

    //변수 enableClick이 참이라면 
    if(enableClick){
        //즉시 enableClick변수를 false로 바꿔서 아래 애니메이션이 동작중일 때에는 next버튼을 클릭하더라도 아래 코드가 실행되지 않도록 처리 
        enableClick = false;

        //next버튼을 클릭하게 되면 marginLeft값을 -100%에서 -200%로 변경하고 
         
        $(".list").animate({marginLeft :"-200%"},1000, function(){
            //슬라이드 이동이 끝나면 순간적으로 css를 원상태인 -100%로 변경
            $(".list").css({marginLeft: "-100%"}); 
            //슬라이드중 첫번째를 list의 마지막으로 보내서 형태 유지 
            $(".list li").first().appendTo(".list"); 
            //모션이 끝나면 enableClick을 true로 바꾸어 버튼 클릭시 다시 코드 실행가능하도록 처리 
            enableClick = true; 
        });
         
    }
    
});

//prev버튼을 클릭했을 때 
$(".prev").on("click", function(e){
    e.preventDefault(); 
    if(enableClick){
        enableClick = false; 
        $(".list").animate({marginLeft:"0%"},1000, function(){
            $(".list").css({marginLeft:"-100%"}); 
            $(".list li").last().prependTo(".list"); 
            enableClick = true; 
        }); 
    }
    
}); 

