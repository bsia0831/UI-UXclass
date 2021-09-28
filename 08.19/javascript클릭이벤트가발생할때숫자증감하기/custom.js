const btnPlus = document.querySelector(".btnPlus"); 
const btnMinus = document.querySelector(".btnMinus"); 

//제어할 숫자값을 0으로 초기화
let num = 0; 

//btnPlus를 클릭할 때마다 
btnPlus.addEventListener("click", e=>{
    //기본동작 금지 
    e.preventDefault(); 
    //num값을 1씩 증가 
    // num += 1
    //num++;
    num+=3;  
    console.log(num); 
}); 

//btnMinus를 클릭할 때마다 
btnMinus.addEventListener("click", e=>{
    e.preventDefault(); 
    //num값을 1씩 감소 
    //num--;
    num-=3; 
    console.log(num); 
});

/*
num값은 변하는 수이기 때문에 let으로 변수선언
let num = 0; 

1씩증가 : num++ 
1씩감소 : num-- 

*/