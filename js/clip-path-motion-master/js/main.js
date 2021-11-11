var enableClick = true;

$("ul li").on("click", function(){
   var isOn = $(this).hasClass("on");
   if(isOn) return;

   if(enableClick){
      enableClick = false;
      var i = $(this).index();

      $("ul li").removeClass("on");
      $("ul li").eq(i).addClass("on");

      //현재 활성화되어 있는 패널에 upper를 지우고 lower를 붙여서
      //마스크영역은 그대로 보이는 상태에서 아래쪽 레이어로 살짝 이동
      $("article.upper").removeClass("upper").addClass("lower");
      //앞으로 활성화될 i번째 패널을 찾아서 upper를 붙여서 마스크 모션을 실행하고 제일 위쪽으로 땡겨옴
      $("article").eq(i).addClass("upper");

      setTimeout(function(){
         $("article.lower").removeClass("lower");
         enableClick = true;
      },1000);
   }

   
});