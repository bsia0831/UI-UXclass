const title = document.querySelector("#title");
console.log(title);

/*
요소 선택하기
document.querySelector();
document.querySelectorAll();

변수: 자주쓰는 값
변수 만드는 방법
const 변수명 = document.querySelector();
const: 절대 변하지 않는 값일때
let: 변하는 값일때
*/

const frame =document.querySelector("#wrap");
console.log(frame);

const box1 = document.querySelector("#wrap .box1");
console.log(box1);

const item = document.querySelector("#wrap article");
console.log(item);

const items = document.querySelectorAll("#wrap article");
console.log(items);

/* 
for of 반복문
    for(let "반복하는 요소가 담길 변수" of "반복시킬 그룹"){
        반복실행할 구문
    }
*/

for (let item of items) {
    console.log(item);
}

/*
for(let "반복하는 수서가 담길 변수"; 반복할 횟수의 최대값; 증감연산자){
    반복할 실행문
}

for(let i=0; i<group.length; i++){
    console.log(group[i]);
}
*/


for(let i=0; i<items.length; i++){
    console.log(ietms[i]);
}