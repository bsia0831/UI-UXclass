// 이벤트 바인딩
// $(".btns li").on("click", function(){
//     $(this).children("a").css("border", "1px solid red");
//     console.log("test");
// });

/* 1번
$(".btns").on("click", function(){
    $(this).find("a").css("border", "1px solid blue");
});
*/

/* 2번
$(".btns li a").on("click", function(){
    $(this).parents().parents().css("border", "1px solid violet");
});
*/

/* 3번
$(".btns li").on("click", function(){
    $(this).siblings().css("border", "1px solid green");
});
*/

/* 4번
$(".btns li").on("click", function(){
    $(this).next().css("border", "1px solid red");
});
*/

/* 5번
$(".btns li").on("click", function(){
    $(this).last().css("border", "1px solid pink");
});
*/

/* 6번
$(".btns li").first().on("click", function(){
    $(this).css("border", "1px solid pink");
});
*/

/* 7번
$(".btns li").eq(1).on("click", function(){
    $(this).css("border", "1px solid pink");
});
*/

/* 8번
$(".btns li").eq(0).children("a").on("click", function(){
    $(this).parent().next().next().children("a").css("border", "1px solid pink");
});
*/

/* 9번
$(".btns li").on("click", function(){
    $(".btns li a").css("color", "");
    $(this).children("a").css("color", "red");
});
*/

/* 10번
*/
$(".btns li").on("click", function(){
    let i = $(this).index();
    console.log(i);
});