class MyForm{

   constructor(selector, options){

      if(!selector){
         console.error("form 선택자는 필수 입력사항입니다"); 
         return;
      }
      this.init(selector); 
      this.bindingEvent(options); 
   }
   
   init(selector){
      this.form = $(selector); 
      this.btnSubmit = this.form.find("input[type='submit']"); 
   }
   
   bindingEvent(options){
      //submit 버튼을 클릭했을 때 
   
      //검사항목 갯수를 배열로 받아서 반복처리 
      options.forEach( (opt)=>{
         this.btnSubmit.on("click", (e)=>{
            if(opt.type==="text"){
               if(!this.isTxt(opt.name, opt.len)) e.preventDefault(); 
            }
            if(opt.type==="email"){
               if(!this.isEmail(opt.name)) e.preventDefault();  
            }
            if(opt.type==="check"){
               if(!this.isCheck(opt.name)) e.preventDefault(); 
            }
            if(opt.type==="select"){
               if(!this.isSelect(opt.name)) e.preventDefault();
            }
            if(opt.type==="password"){
               if(!this.isPwd(opt.name[0], opt.name[1], opt.len)) e.preventDefault(); 
            }          
         }); //이벤트구문 안쪽의 this를 인스턴스값으로 고정 
      }); //반복문 안쪽의 this를 인스턴스값으로 고정 
   
      
   }
   
   
   
   
   
   
    
   //텍스트 인증 함수 정의 - 결과값으로 true/false 값을 전달 
   isTxt(name, len){
      //최소 글자수 5글자 전달 
      if(len === undefined ) len = 5; 
      
      //input의 value값을 변수에 저장 
      let txt = $("[name = "+name+"]").val(); 
       
      //텍스트의 글자수가 최소글자수 이상일 때 return으로 true 값 전달 
      if(txt.length >= len){
         $("[name = "+name+"]").parent().find("p").remove(); 
         return true; 
      }else{
      //텍스트 글자수가 최소 글자를 넘기지 못하면 에러메시지 생성, return 으로 false전달 
      $("[name = "+name+"]").parent().find("p").remove(); 
      $("[name = "+name+"]").parent().append(
            "<p>아이디를 "+len+"자 이상 입력하세요</p>"
         )
         return false; 
      }
      
   }
   
   //이메일 인증 함수 정의 
   isEmail(name){
   
      let txt = $("[name="+name+"]").val(); 
   
      //txt에 @가 포함되어 있다면 
      if(/@/.test(txt)){
         $("[name="+name+"]").parent().find("p").remove(); 
         return true; 
      }else{
         //txt에 @가 포함되어 있지 않다면 
         //이미 생성된 중복 에러 메시지 제거 
         //에러 메시지 출력 
         $("[name="+name+"]").parent().find("p").remove(); 
         $("[name="+name+"]").parent().append(
            "<p>@를 포함한 전체 메일 주소를 입력하세요.</p>"
         )
         return false; 
      }
   }
   
   //체크박스 인증 함수정의 
   isCheck(name){
   
      //인풋요소가 체크되어있는지 확인 
      let isCheck = $("input[name="+name+"]").is(":checked"); 
   
      //체크되어 있다면 
      if(isCheck){
         //에러메시지 지우고 true값 전달 
         $("input[name="+name+"]").parent().find("p").remove(); 
         return true;
      }else{
         //체크되어 있지 않다면 - 에러메시지 생성하고 false 값 전달 
         $("input[name="+name+"]").parent().find("p").remove(); 
         $("input[name="+name+"]").parent().append(
            "<p>필수 입력사항을 체크해 주세요</p>"
         )
         return false; 
      }
   
   }
   
   //셀렉트박스 인증 함수 정의 
   isSelect(name){
   
      //셀렉박스의 선택한 옵션의 value값을 변수에 저장 
      let sel = $("select[name="+name+"]").children("option:selected").val();  
   
      //sel이 빈값이 아니라면 - 선택한 옵션값이 있다면 
      if(sel !==""){
         $("select[name="+name+"]").parent().find("p").remove(); 
         return true;
      }else{
         $("select[name="+name+"]").parent().find("p").remove(); 
         $("select[name="+name+"]").parent().append(
            "<p>필수 입력항목을 선택해주세요</p>"
         )
         return false; 
      }
   }
    
   isPwd(name1, name2, len){
      //비밀번호 2개 값을 변수에 저장 
      let pwd1 = $("input[name="+name1+"]").val(); 
      let pwd2 = $("input[name="+name2+"]").val(); 
   
      //각각 숫자, 문자, 특수문자를 정규표현식으로 저장 
      let num = /[0-9]/; 
      let eng = /[a-zA-Z]/; 
      let spc = /[~!@#$%^&*()_+-\[\]]/; 
   
      //만약 두개의 비밀번호가 동일하다면 
      
      if(pwd1 === pwd2 && pwd1.length >= len && num.test(pwd1) && eng.test(pwd1) && spc.test(pwd1)){
         $("input[name="+name1+"]").parent().find("p").remove(); 
         return true; 
      }else{
         $("input[name="+name1+"]").parent().find("p").remove(); 
         $("input[name="+name1+"]").parent().append(
            "<p>비밀번호는 "+len+"자 이상이고 영문자, 숫자, 특수문자를 포함해서 동일하게 써 주세요</p>"
         )
         return false; 
      }
   }
   
}
