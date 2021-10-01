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

const $btns = $("#navi li"); 
const $boxs = $(".myScroll"); 
let posArr = []; 
let len = $btns.length; 
let baseLine = -300; 

//posArr.push($boxs.eq(1).offset().top); 

//myScroll클래스가 있는 박스들을, 박스 갯수만큼 반복을 돌면서 posArr에 세로위치값을 저장하는 반복문 
for(let i=0; i<len; i++){
    posArr.push($boxs.eq(i).offset().top);     
}

//브라우저 리사이즈시 다시 세로위치값 갱신 
$(window).on("resize", function(){
    //리사이즈했을 때 값 4개만 담기위해서 배열을 비움
    posArr = []; 
    for(let i=0; i<len; i++){
        posArr.push($boxs.eq(i).offset().top);     
    }

    console.log(posArr); 
});



$(window).on("scroll", function(){
    var scroll = $(this).scrollTop(); 
//0,600,1300,2700
    for(let i =0; i<len; i++){
        //스크롤이 posArr의 순번에 해당하는 값보다 크거나 같다면 
        if(scroll >= posArr[i] + baseLine){
            //모든 버튼의 on을 제거하고 
            $btns.children("a").removeClass("on"); 
            //해당하는 버튼의 a에 on 추가 
            $btns.eq(i).children("a").addClass("on"); 

            //모든 박스에 on을 제거 
            $boxs.removeClass("on");
            //해당순번- 화면에 보이는 박스에 on추가  
            $boxs.eq(i).addClass("on"); 
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