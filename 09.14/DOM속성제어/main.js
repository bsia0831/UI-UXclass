/*
선택자.attr() : 선택한 DOM 속성 제어 
선택자.attr({속성명 : 속성값}) : 해당 속성값 변경 
선택자.attr("속성명") : 해당속성값 반환 
선택자.text() : 해당 DOM의 텍스트내용을 반환 
선택자.text("텍스트") : 해당 DOM의 텍스트 내용 변경 
*/

let link = $("#test").attr("href"); 
console.log(link); 

$("#test").attr({
    href : "https://nate.com",
    target : "_self", 
    title :"네이트로 이동"
}).text("네이트");
