//스크롤바가 어느 영역에 있느냐에 따라 네비 버튼을 활성화 
const pos0 = $("#header").offset().top; //0
const pos1 = $("#news").offset().top; //1000
const pos2 = $("#brand").offset().top; //2000
const pos3 = $("#crew").offset().top; //3000
 
const posArr = []; //myScroll 클래스를 가진 
const $boxs = $(".myScroll"); 
const $btns = $("#navi li"); 
let len = $btns.length; //4 

for(let i=0; i<len; i++){
   posArr.push($boxs.eq(i).offset().top); 
}
 


$(window).on("scroll", function(){

   let scroll = $(this).scrollTop(); 
   console.log(scroll); 
/*
   $("#navi li a").removeClass("on");

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
    
   for(let i=0; i<len; i++){
      if(scroll >= posArr[i]){
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