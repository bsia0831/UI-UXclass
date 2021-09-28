/*
1번예제
//자식요소 선택하기
//요소.children
const list = document.querySelector(".list");
const items = list.children;

console.log(list);
console.log(items);
console.log(items[0]);
console.log(items[1]);
console.log(items[2]);
console.log(items[3]);

//부모요소 선택하기 - 직계부모 탐색
//요소.parentElement
const item2 = document.querySelector(".item2");
console.log(item2);
console.log(item2.parentElement);

2번예제
//제일 가까운 상위부모요소 선택하기
//.parentElement가 직계부모만 선택할 수 있으므로 .closest()명령어를 이용하여 선택자를 기준으로 제일 가까운 상위 부모요소를 탐색
//요소.closest()
const li = document.querySelector("li");
console.log(li);
console.log(li.closest("main"));
*/

//3번예제
//형제요소 선택하기
//요소.previousElementSibling
//요소.nextElementSibling
const item3 = document.querySelector(".item3");
console.log(item3);

console.log(item3.previousElementSibling);
console.log(item3.nextElementSibling);