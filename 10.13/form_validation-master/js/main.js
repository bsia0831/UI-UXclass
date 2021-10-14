$("input[type=submit]").on("click", function(e){
    
   
   if(!isTxt("userid", 5)) e.preventDefault(); 
   if(!isTxt("comments", 20)) e.preventDefault(); 
   if(!isEmail("email")) e.preventDefault(); 
   if(!isCheck("gender")) e.preventDefault(); 
   if(!isCheck("hobby")) e.preventDefault(); 
   if(!isSelect("edu")) e.preventDefault(); 

   //비밀번호 인증함수 호출 
   if(!isPwd("pwd1", "pwd2", 5)) e.preventDefault(); 
}); 

//텍스트 인증 함수 정의 
function isTxt(name, len){
  
   if(len === undefined) len = 5; 
   let txt = $("[name="+ name +"]").val();


   if(txt.length >= len){      
      $("[name="+name+"]").parent().find("p").remove(); 
      return true;  
   }else{      
      $("[name="+name+"]").parent().find("p").remove(); 
      $("[name="+name+"]").parent().append(
         "<p>입력항목을 "+ len+"글자 이상 입력하세요</p>"
      ); 
      return false;  
   }
}

//이메일 인증함수 정의 
function isEmail(name){
    
   let txt = $("[name="+name+"]").val(); 

   if(/@/.test(txt)){      
      $("[name="+name+"]").parent().find("p").remove(); 
      return true; 
   }else{      
      $("[name="+name+"]").parent().find("p").remove(); 
      $("[name="+name+"]").parent().append(
         "<p>@를 포함한 전체 메일주소를 입력하세요.</p>"
      ); 
      return false; 
   }
}


//chec 인증 함수 정의 
function isCheck(name){

   //인풋 요소가 체크되어 있는 지 확인하여 
   let isCheck = $("input[name="+name+"]").is(":checked"); 
   
   //체크되어 있으면 에러메시지 지우고 true 반환 
   if(isCheck){
      $("input[name="+name+"]").parent().find("p").remove(); 
      return true; 
   }else{
      //체크되어 있지 않으면 에러 메시지 생성하고 false 반환 
      $("input[name="+name+"]").parent().find("p").remove(); 
      $("input[name="+name+"]").parent().append(
         "<p>필수 입력항목을 체크해 주세요. </p>"
      );
      return false; 
   }
}

//select 인증 함수 정의 
function isSelect(name){

   let sel = $("select[name="+name+"]").children("option:selected").val(); 

   if(sel !==""){
      $("select[name="+name+"]").parent().find("p").remove(); 
      return true; 
   }else{
      $("select[name="+name+"]").parent().find("p").remove(); 
      $("select[name="+name+"]").parent().append(
         "<p>필수 입력항목을 선택해 주세요 </p>"
      ); 
      return false; 
   }
}


//비밀번호 인증 함수 정의 
function isPwd(name1, name2, len){

   //두 개의 비밀번호 값을 저장 
   let pwd1 = $("input[name="+name1+"]").val(); 
   let pwd2 = $("input[name="+name2+"]").val(); 

   //각각 숫자, 문자, 특수문자를 정규표현식으로 저장 
   let num = /[0-9]/; 
   let eng = /[a-zA-Z]/; 
   let spc = /[~!@#$%^&*()_+\[\]-]/;

   //두개의 비밀번호가 동일하고, 최소글자수 이상이며, 숫자,문자,특수문자를 포함하면 
   if(pwd1 ===pwd2 && pwd1.length >=len && num.test(pwd1) && eng.test(pwd1) && spc.test(pwd1)){
      //에러메시지 제거하고 인증하고 true값 반환 
      $("input[name="+name1+"]").parent().find("p").remove(); 
      return true; 
   }else{
      //그렇지 않으면 에러메시지 출력하고 false 반환 
      $("input[name="+name1+"]").parent().find("p").remove(); 
      $("input[name="+name1+"]").parent().append(
         "<p>비밀번호는 "+len+"글자 이상 영문, 특수문자, 숫자를 포함해서 동일하게 입력하세요.</p>"
      ); 
      return false; 
   }
}