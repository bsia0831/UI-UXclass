 //변수 저장 
 const frame = document.querySelector("section"); 
 const lists = frame.querySelectorAll("article");
 const prev = document.querySelector(".btnPrev"); 
 const next = document.querySelector(".btnNext"); 
 const audio = frame.querySelectorAll("audio"); 
 const deg = 45; //각각의 article 요소 회전할 각도 
 let i = 0;
 const len = lists.length-1; //순번이 0부터 시작하므로 전체갯수에서 1을 뺌
 let num = 0; 
 let active = 0; //활성화 패널의 순번이 저장될 변수. 0번이 활성화된 상태 

 //prev 버튼을 클릭했을 때 
prev.addEventListener("click", ()=>{
    //음악 초기화 함수 실행 
    initMusic(); 
    num++; 
    //전체 프레임을 45도씩 회전
    frame.style.transform = `rotate(${num * deg}deg)`; 

    //현재 패널의 순번이 0번이면 다시 마지막 패널의 순번으로 변경하고 
    //그렇지않으면 현재 패널의 순번에서 1씩 감소시켜서 activation 함수 호출 
    if(active == 0){
        active = len; //7
    }else{
        active--; 
    }
   // console.log(active); 
   // (active == 0) ? active = len : active--; 
    activation(active, lists);
});

next.addEventListener("click", ()=>{
    //음악 초기화 함수 실행 
    initMusic(); 

    num--; 
    frame.style.transform = `rotate(${num * deg}deg)`;

    //현재 패널의 순번이 마지막 순번이면 다시 처음 패널의 순번으로 변경하고 
    //그렇지 않으면 현재패널 순번에서 1씩 증가시켜서 activation 함수를 호출 
    if(active == len){
        active = 0; 
    }else{
        active++; 
    }
    activation(active,lists); 
});

//모든 오디오 요소를 반복하면서 정지시키고, .pic요소의 모션을 중지해서 초기화하는 함수 정의
function initMusic(){
    for(let el of audio){
        el.pause(); 
        el.load(); 
        el.closest("article").querySelector(".pic").classList.remove("on"); 
    }
} 

//함수 설정 
function activation(index, lists){
    //모든 article에  on을 제거하여 비활성화 
    for(let el of lists){
        el.classList.remove("on"); 
    }

    //해당순번의 article에 on 추가하여 활성화 
    lists[index].classList.add("on"); 
}


 //article 갯수만큼 반복 
 for(let el of lists){
    let pic = el.querySelector(".pic");
    let play = el.querySelector(".play"); 
    let pause = el.querySelector(".pause"); 
    let load = el.querySelector(".load"); 
      

    //각 article 요소를 45도씩 회전하고 아래로 배치 
    el.style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;         
    pic.style.backgroundImage = `url(../img/member${i+1}.jpg)`; 
    i++; 

    //play버튼을 클릭시 
    play.addEventListener("click", e=>{
        let isActive = e.currentTarget.closest("article").classList.contains("on"); 
        if(isActive){
            //play버튼부터 .pic을 찾아서 클래스 on을 추가하여 활성화 
            e.currentTarget.closest("article").querySelector(".pic").classList.add("on"); 
            //play버튼부터 audio요소를 찾아서 음악재생 
            e.currentTarget.closest("article").querySelector("audio").play();
        }          
    });

    //pause 버튼을 클릭시 
    pause.addEventListener("click", e=>{
        let isActive = e.currentTarget.closest("article").classList.contains("on"); 
        if(isActive){
            //pause 버튼부터 .pic을 찾아서 on을 제거하여 비활성화 
            e.currentTarget.closest("article").querySelector(".pic").classList.remove("on"); 
            //pause버튼부터 audio를 찾아서 재생중지 
            e.currentTarget.closest("article").querySelector("audio").pause();
        }
         
    }); 

    //load 버튼을 클릭시 
    load.addEventListener("click", e=>{
        let isActive = e.currentTarget.closest("article").classList.contains("on"); 
        if(isActive){
            //load 버튼부터 pic을 찾아서 on을 추가하여 활성화 
            e.currentTarget.closest("article").querySelector(".pic").classList.add("on"); 
            //load버튼부터 audio를 찾아서 처음으로 되돌림   
            e.currentTarget.closest("article").querySelector("audio").load();
            //play버튼부터 audio요소를 찾아서 음악재생 
            e.currentTarget.closest("article").querySelector("audio").play();
        } 
    });

 }
 