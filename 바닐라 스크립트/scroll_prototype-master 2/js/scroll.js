class MyScroll{
    constructor(option){
      this.init(option); 
      this.bindingEvent(); 
   }
   
   init(option){
      this.boxs = $(option.panel); 
      this.btns = $(option.btns); 
      this.posArr; 
      this.enableEvt = true; 
      this.base = option.base; 
   }
   
   bindingEvent(){
      //처음 로딩시 세로위치값 배열에 저장  
      this.setPos(); 
      //브라우저 리사이즈시 세로위치값 새로 저장 
      $(window).on("resize", ()=>{
         this.setPos();     
         //let activeIndex = $("#navi li a.on").parent().index(); 
         let activeIndex = this.btns.children("a").filter(".on").parent().index(); 
         this.moveScroll(activeIndex);
      }); 
   
       //마우스휠 이벤트 
    this.boxs.on("mousewheel", e=>{
      e.preventDefault();   
      
      if(this.enableEvt){
         this.enableEvt = false; 
         let i = $(e.currentTarget).index();  
   
         if(e.originalEvent.deltaY > 0){          
            this.moveScroll(i+1); 
         }else{         
            this.moveScroll(i-1); 
         }
      }   
    }); 
   
      //네비 버튼 클릭시 해당 섹션의 세로 위치값으로 이동 
      this.btns.on("click", e=>{
         e.preventDefault(); 
   
         let isOn = $(e.currentTarget).children("a").hasClass("on"); 
         if(isOn) return; 
   
         if(this.enableEvt){
            this.enableEvt = false; 
            var i = $(e.currentTarget).index(); 
            this.moveScroll(i);
         }      
      }); 
   
         //브라우저 스크롤시 스크롤 위치값에 따라서 버튼 활성화 
      $(window).on("scroll", ()=>{
         let scroll = $(window).scrollTop();
         this.activation(scroll);    
      });
   }
   
    
   
   activation(scroll){
      //스크롤값과 posArr의 값을 비교하여 버튼 활성화 
      this.boxs.each(index=>{
         if(scroll >= this.posArr[index] + this.base){
            this.btns.children("a").removeClass("on"); 
            this.btns.eq(index).children("a").addClass("on"); 
   
            this.boxs.removeClass("on"); 
            this.boxs.eq(index).addClass("on"); 
         }
      })
   }
   
   moveScroll(index){
      $("html,body").stop().animate({ scrollTop : this.posArr[index]}, 1000, ()=>{
         this.enableEvt = true; 
      });
   }
   
    //posArr 배열에 섹션 세로 위치값 배열에 저장 
    setPos(){
      this.posArr =[]; 
      this.boxs.each(index=>{
         this.posArr.push(this.boxs.eq(index).offset().top); 
      });
   }
}
