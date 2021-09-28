// section, article 변수설정
const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");

const deg = 45;
let i = 0;
const len = lists.length-1;

for(let el of lists) {
    el.style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;

    let pic = el.querySelector(".pic");
    pic.style.backgroundImage = `url(../img/member${i+1}.jpg)`
    i++;
}