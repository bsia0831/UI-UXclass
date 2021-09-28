const list = document.querySelectorAll(".list li"); 
console.log(list); 

for(let el of list){
    el.addEventListener("click", e=>{
        e.preventDefault(); 
        console.log(e.currentTarget.innerText);
        //e.currentTarget.innerText = "click"; 
    });
}

/*
클릭한 요소 - e.currentTarget 
선택한 요소의 텍스트 탐색 - 선택자.innerText 
선택한 요소의 텍스트 변경 - 선택자.innerText = "변경할 텍스트"; 
*/