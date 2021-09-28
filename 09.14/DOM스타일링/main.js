/*
DOM Styling with jQuery

$(선택자).css()
-선택한 DOM의 css변경 .css(변경할 내용)
-선택한 DOM의 css값을 알아냄 .css("속성명"); 
-해당 메서드로 변경한 css값을 stylesheet로는 재변경불가

*/

//$(".box").css("width", "400px"); 
$(".box").css({
    width:400, 
    margin:50,
    backgroundColor:"pink"
});

let boxPadding = $(".box").css("padding"); 
//let boxWid = $(".box").css("width");
let boxWid = $(".box").width(); 
let boxWid2 = $(".box").outerWidth(); 
console.log(boxWid); 
console.log(boxWid2); 
console.log(boxPadding); 