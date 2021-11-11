/*
   기존es5 객체지향의 불편한점

   1. 생성자 함수와 그에 수반되는 다양한 메서드들이 따로 떨어져 표기되어 있으므로 구조적으로 안정적이지 않음

   2. 특정 생성자의 프토로타입에 메서드를 등록하기 위해서는 생성자.prototype 형식으로 일일이 지정을 해줘야 됨

   3. 메서드 안쪽의 this값이 이벤트문, ajax문, each, setTimeout문에서는 값이 변경이 되기 때문에 일일이 .bind(this)로 해당 값을 고정시켜야함


   ES6클래스방식으로 변환순서
   1. 먼저 class 생성자명 {} 전체 코드를 묶어줌
   2. 그 안쪽에 명시적으로 contructor함수를 생성
   3. 해당 클래스 블록안쪽에 prototype 에 담겨야 되는 메서드를 넣어줌
   4. 메서드는 생성자.prototype 을 생략하고 집어넣음
   5. 메서드안쪽의 익명함수를 화살표 함수
*/
class Tab {
   constructor(selector, option){
      if(!selector){
         console.error("프레임 선택자를 필수로 입력하세요.")
         return
      }
   
      var defaults = {
         activeName : "on"
      }
      //var results = Object.assign({}, defaults, option); //es6전용
      var results = $.extend({}, defaults, option); //es5전용
      console.log(results);
   
      this.init(selector, results); 
      this.bindingEvent();  
   }

   init(selector, results){
      this.$tab = $(selector); 
      this.$btn = this.$tab.find("ul li"); 
      this.$box = this.$tab.children("div"); 
      this.activeName = results.activeName;
   }
   
   bindingEvent(){
      this.$btn.on("click", (e)=>{
         e.preventDefault();    
         this.activation(e.currentTarget);       
      });
   }
   
   activation(el){
      var target = $(el).children("a").attr("href"); 
   
      this.$btn.removeClass(this.activeName); 
      $(el).addClass(this.activeName); 
      this.$box.hide(); 
      $(target).show(); 
   }    
}











   
   
   
   


 