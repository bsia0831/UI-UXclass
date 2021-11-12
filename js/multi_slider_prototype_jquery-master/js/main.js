class Slider{
   
   constructor(selector, opt){

      if(!selector){
         console.error("selector값은 필수입력사항입니다"); 
         return; 
      }


      const defaults ={      
         prev : ".prev", 
         next : ".next", 
         speed : 500
      }

      let result_opt = Object.assign({}, defaults, opt);

      //DOM초기화 메서드 호출  
      this.initDOM(selector, result_opt); 

      //이벤트 연결 메서드 
      this.bindingEvent(); 

      this.init(this.$slider);   
   }

   //필수 전역변수를 인스턴스로 넘겨주는 코드를 함수로 묶어서 관리 
   initDOM(selector, result_opt){
      this.$slider = $(selector);    
      this.$prev = $(result_opt.prev); 
      this.$next = $(result_opt.next); 
      this.speed = result_opt.speed; 
   }

   bindingEvent(){
      this.$next.on("click", e=>{
         e.preventDefault();    
         this.next(this.$slider);       
      }); 

      this.$prev.on("click", e=>{
         e.preventDefault();     
         this.prev(this.$slider);        
      }); 
   }

   init(el){
      let len = el.children("ul").find("li").length; 
      el.children("ul").css({ width: 100 * len +"%"}); 
      el.children("ul").find("li").css({ width: 100 / len +"%"}); 
      el.children("ul").find("li").last().prependTo(el.children("ul")); 
   }

   next(el){
      el.children("ul").animate({ marginLeft : "-200%"}, this.speed, function(){
         $(this).css({ marginLeft : "-100%"}); 
         $(this).children("li").first().appendTo(this); 
      });
   }


   prev(el){
      el.children("ul").animate({marginLeft : "0%"},this.speed, function(){
         $(this).css({ marginLeft : "-100%"}); 
         $(this).children("li").last().prependTo(this); 
      }); 
   }
}

 