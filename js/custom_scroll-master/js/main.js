var boxs = $(".wrap>section");
var base = -300;
var pos = [];

var init = function(){
   //box1 init
   $(".obj1").css({transform: "rotate(45deg)"});

   //box2 init
   $("#box2 h1").css({opacity: 0});
   $(".obj2").css({width: 0});

   //box3 init
   $(".obj3").css({
      transform: "scale(2)",
      opacity: 0
   });

   //box4 init
   $("#box4 path").css({strokeDashoffset: 990});

   //box5 init
   $("#box5 .obj5_1").css({top: 0});
   $("#box5 .obj5_2").css({top: 200});
}

var custom = [
   //box1 
   function(scroll){
      $(".obj1").css({
         transform: "rotate("+(45+scroll/10)+"deg)"
      })
   },

   //box2
   function(scroll){
      var current_scroll = scroll - pos[1]-base;
      var opacity_scroll = current_scroll/1000;
      var wid_scroll;
      (current_scroll >= 600) ? wid_scroll= 600 : wid_scroll = current_scroll;
      
      
      $("#box2 h1").css({
         opacity: 0+opacity_scroll
      });

      $(".obj2").css({
         width: wid_scroll
      })
   },

   //box3
   function(scroll){
      var current_scroll = scroll - pos[2]-base;
      $(".obj3").css({
         transform: "scale("+(2-current_scroll/400)+")",
         opacity: 0+ current_scroll/500
      })
   },

   //box4 
   function(scroll){
      var current_scroll = (scroll - pos[3]-base)*2;
      var svg_scroll;
      (current_scroll>=990) ? svg_scroll = 990 : svg_scroll = current_scroll;     

      $("#box4 path").css({
         strokeDashoffset: 990 - svg_scroll
      });
   },

   //box5
   function(scroll){
      var current_scroll = scroll - pos[4]-base;

      $("#box5 .obj5_1").css({
         top: current_scroll
      });

      $("#box5 .obj5_2").css({
         top: 200+ (current_scroll/2)
      })
   }
   
];

//박스의 갯수만큼 반복을 돌며 해당 박스의 새로 위치값 배열에 저장
boxs.each(function(_, box){   
   pos.push($(box).offset().top);
});


//브라우저 스크롤시
$(window).on("scroll",function(){
   var scroll = $(this).scrollTop();
   //일단은 기존 박스들의  자식요소 모양을 초기화
   init();

   boxs.each(function(index){
      //각 스크롤 영역마다
      if(scroll>= pos[index]+base){
         //custom배열에 있는 익명함수를 호출 (이떄 인수로 scroll값 전달)
         custom[index](scroll);
      }
   })
});



