//스크롤바가 어느 영역에 있느냐에 따라 네비 버튼을 활성화 
//step1 각 navi버튼 연결 요소의 offset().top값을 변수에 저장 
//const pos0 = $("#header").offset().top; //0
//const pos1 = $("#news").offset().top; //1000
//const pos2 = $("#brand").offset().top; //2000
//const pos3 = $("#crew").offset().top; //3000
 




//step2 빈배열을 만들어 push로 myScroll 클래스를 가진 요소의 offset().top값을 저장 
let posArr = []; //myScroll 클래스를 가진 
const $boxs = $(".myScroll"); 
const $btns = $("#navi li"); 
let len = $btns.length; //4 
let baseLine = 0; 
/*
baseLine : 
해당영역이 브라우저 끝에 닿지 않아도 네비버튼 활성화, 영역 활성화되도록 값을 빼줌   
*/


//posArr에 myScroll 클래스를 가진 요소의 offset().top값을 저장 
for(let i=0; i<len; i++){
   posArr.push($boxs.eq(i).offset().top); 
}
 
//브라우저 리사이즈 시 다시 세로위치값 갱신 
$(window).on("resize", function(){
   //일단 배열을 비워서 배열값이 4개만 담기도록 
   posArr =[]; 
   for(let i=0; i<len; i++){
      posArr.push($boxs.eq(i).offset().top); 
   }
  // console.log(posArr); 
}); 


//브라우저에서 스크롤 시 
$(window).on("scroll", function(){

   //스크롤바 위치를 변수에 저장 
   let scroll = $(this).scrollTop(); 
    
/*
//step1 navi 버튼 활성화 

//모든 navi li a 비활성화 후 
   $("#navi li a").removeClass("on");

   //해당영역에 스크롤바가 있을 때 해당 순번의 navi li a를 활성화 
   if(scroll >= posArr[0] && scroll < posArr[1] ){
      $("#navi li").eq(0).children("a").addClass("on"); 
   }
   if(scroll >= posArr[1] && scroll < posArr[2] ){
      $("#navi li").eq(1).children("a").addClass("on"); 
   }
   if(scroll >= posArr[2] && scroll < posArr[3] ){
      $("#navi li").eq(2).children("a").addClass("on"); 
   }
   if(scroll>=posArr[3]){
      $("#navi li").eq(3).children("a").addClass("on"); 
   }
   */

   //[0, 1000, 2000, 3000]
   //step2 반복문으로 해당 영역에 스크롤바 위치할 때 해당 네비버튼 활성화 처리  
   for(let i=0; i<len; i++){
      if(scroll >= posArr[i] +baseLine){
         $btns.children("a").removeClass("on");
         $btns.eq(i).children("a").addClass("on"); 
      }
   }
   

    
})

//navi 버튼을 클릭했을 때 
$("#navi li a").on("click", function(e){
   e.preventDefault(); 

   let target = $(this).attr("href"); 
   console.log(target); 
   let targetPos = $(target).offset().top; 

   $("html,body").animate({ 
      scrollTop : targetPos
   }, 1000);
}); 

/*
.scrollTop() 선택한 요소의 스크롤바 수직위치값을 반환 
scrollTop : 스크롤바 위치 

.offset().top 
: 선택한 요소의 위치를 가져오거나 특정한 위로 이동 
: 문서끝부터 선택한 요소까지의 거리 

header :0 
visual : 100
news : 1000
brand : 2000 
crew : 3000
*/