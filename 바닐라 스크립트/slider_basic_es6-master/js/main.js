const frame = document.querySelector("#slider");
const panel = frame.querySelector(".panel");
const panel_li = panel.querySelectorAll("li");
const btns = frame.querySelectorAll(".btns li");
let enableClick = true;

btns.forEach((btn, index)=>{
   btn.addEventListener("click",e=> {
      e.preventDefault();

      let isOn = e.currentTarget.classList.contains("on");
      if(isOn) return;

      if(enableClick){
         enableClick = false;
         activation(index);   
      }  
   })
})

function activation(index){
   for(let el of btns) el.classList.remove("on");
   btns[index].classList.add("on");      

   new Anim(panel, {
      prop: "margin-left",
      value: -100*index+"%",
      duration: 500,
      callback: ()=>{
         enableClick = true;
      }
   })
}


