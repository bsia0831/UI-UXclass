/*
DOM 선택
const btns = document.querySelector(".btns");
const btns_li = btns.querySelectorAll("li");
console.log(btns_li);

for (let i = 0; i < btns_li.length; i++) {
    btns_li[i].style.border = "1px solid red";
}

for (let i = 0; i < btns_li.length; i++) {
    btns_li[i].addEventListener("click", e=>{
        console.log("test");
    });
}
*/

// DOM선택 jQuery
const btns_li = $(".btns li");

// DOM Styling with jQuery
$(".btns li").css("border", "1px solid blue");

$(".btns li").on("click", e=>{
    console.log("test");
});