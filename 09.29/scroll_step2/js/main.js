/*
.scrollTop() 
- 선택한 요소의 스크롤바 수직 위치를 반환 
- 동적인 값 

.offset().top 
- 선택한 요소의 위치를 가져오거나 특정 위치로 이동 
- 문서 끝부터 선택한 요소까지의 거리 
- 정적인 값  

배열 
let fruit = ["apple", "orange", "melon"];
console.log(fruit[0]);

fruit.push("strawberry"); 
console.log(fruit); 
console.log(fruit.length); 
*/


let posArr = []; 
const $btns = $("#navi li"); 
let $boxs = $(".myScroll"); 
let len = $btns.length; 

//posArr.push($boxs.eq(1).offset().top); 

//myScroll클래스가 있는 박스들을, 박스 갯수만큼 반복을 돌면서 posArr에 세로위치값을 저장하는 반복문 
for(let i=0; i<len; i++){
    posArr.push($boxs.eq(i).offset().top);     
}
//console.log(posArr); 

/*
//화면에서 스크롤할 때 
$(window).on("scroll", function(){
    //현재 스크롤한 값을 변수에 담는다
    let scroll = $(this).scrollTop(); 

    //모든 내비 li a의 on을 제거하고 
    $("#navi li a").removeClass("on"); 

    //스크롤이 header 부분에 해당할 대 
    if(scroll>=posArr[0] && scroll < posArr[1]){
        $("#navi li").eq(0).children("a").addClass("on"); 
    }
    //스크롤이 news에 해당할 때 
    if(scroll>=posArr[1] && scroll < posArr[2]){
        $("#navi li").eq(1).children("a").addClass("on"); 
    }
    //스크롤이 brand에 해당할 때 
    if(scroll>=posArr[2] && scroll < posArr[3]){
        $("#navi li").eq(2).children("a").addClass("on"); 
    }
    //스크롤이 crew에 해당할 때 
    if(scroll>=posArr[3] ){
        $("#navi li").eq(3).children("a").addClass("on"); 
    }
});
*/

$(window).on("scroll", function(){
    var scroll = $(this).scrollTop(); 
//0,600,1300,2700
    for(let i =0; i<len; i++){
        //스크롤이 posArr의 순번에 해당하는 값보다 크거나 같다면 
        if(scroll >= posArr[i]){
            //모든 버튼의 on을 제거하고 
            $btns.children("a").removeClass("on"); 
            //해당하는 버튼의 a에 on 추가 
            $btns.eq(i).children("a").addClass("on"); 
        }
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