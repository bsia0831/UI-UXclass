/*
.scrollTop() 
- 선택한 요소의 스크롤바 수직 위치를 반환 
- 동적인 값 

.offset().top 
- 선택한 요소의 위치를 가져오거나 특정 위치로 이동 
- 문서 끝부터 선택한 요소까지의 거리 
- 정적인 값 

header : 0; 
visual : 100 
news : 600 
brand : 1300
crew : 2000 
footer : 2700 

let pos1 = $("#footer").offset().top; 
console.log(pos1); 

scroll >0 && scroll <100 : header 
scroll >=100 && scroll <600 : visual 
scroll >=600 && scroll <1300 : news 
scroll >=1300 && scroll <2000 : brand 
scroll >=2000 && scroll <2700 :creww 
scroll>=2700 : footer
*/

let pos0 = $("#header").offset().top; //0 
let pos1 = $("#news").offset().top; 
let pos2 = $("#brand").offset().top; 
let pos3 = $("#crew").offset().top; 


//화면에서 스크롤할 때 
$(window).on("scroll", function(){
    //현재 스크롤한 값을 변수에 담는다
    let scroll = $(this).scrollTop(); 

    //모든 내비 li a의 on을 제거하고 
    $("#navi li a").removeClass("on"); 

    //스크롤이 header 부분에 해당할 대 
    if(scroll>=pos0 && scroll < pos1){
        $("#navi li").eq(0).children("a").addClass("on"); 
    }
    //스크롤이 news에 해당할 때 
    if(scroll>=pos1 && scroll < pos2){
        $("#navi li").eq(1).children("a").addClass("on"); 
    }
    //스크롤이 brand에 해당할 때 
    if(scroll>=pos2 && scroll < pos3){
        $("#navi li").eq(2).children("a").addClass("on"); 
    }
    //스크롤이 crew에 해당할 때 
    if(scroll>=pos3 ){
        $("#navi li").eq(3).children("a").addClass("on"); 
    }
});



//내비 버튼을 클릭했을 때 
$("#navi li a").on("click", function(e){
    e.preventDefault(); 

    //클릭한 버튼에서 href값을 구해서 target에 담음 
    let target = $(this).attr("href"); 
    console.log(target); 

    //target의 세로위치값을 targetPos에 담음 
    let targetPos = $(target).offset().top; 
    console.log(targetPos); 

    //내비 버튼을 클릭하면 
    //문서의 스크롤바 위치값이 targetPos에 맞춰서 animate로 이동하도록 처리 
    $("html, body").animate({
        scrollTop : targetPos
    },1000);

    
});