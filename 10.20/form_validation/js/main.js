//submit 버튼을 클릭했을 때 
$("input[type=submit]").on("click", function(e){
   //인증 함수 결과값이 false이면 전송을 막음 
   //if(false) e.preventDefault(); 
   if(!isTxt('userid', 5)) e.preventDefault(); 
   if(!isTxt('comments', 20)) e.preventDefault(); 
    
});

 
//텍스트 함수 정의 - 결과값으로 true/false 값을 전달 
function isTxt(name, len){
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
         "<p>아이디를 5자 이상 입력하세요</p>"
      )
      return false; 
   }
   
}