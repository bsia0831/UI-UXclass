const main = document.querySelector("main");
const btns = main.querySelectorAll("ul li");
const boxs = main.querySelectorAll("section article");
const speed = convertSpeed(boxs[0]);
let enableClick = true;


btns.forEach((btn,index)=>{
   btn.addEventListener("click",e=>{
      e.preventDefault();
      let isOn = e.currentTarget.classList.contains("on");
      if(isOn) return;   
      
      if(enableClick){
         enableClick = false;
         activation(btns,index);
         activation(boxs,index);

      
         new Anim(main,{
            prop: "height",
            value: matchHT(index),
            duration: speed,
            callback: ()=>{
               enableClick= true;
            }
         })
      }      
   })
})

function activation(arr, index){
   for(let el of arr) el.classList.remove("on");
   arr[index].classList.add("on");
}

function matchHT(index){
   //css로 적용되어 있는  DOM의 스타일을 구할때는 아래 구문을 활용
   let ht = getComputedStyle(boxs[index]).height;
   ht = parseInt(ht);
   return ht;
}

function convertSpeed(el){
   let speed = getComputedStyle(el).transitionDuration;
   speed = parseFloat(speed) * 1000;
   return speed;
}


