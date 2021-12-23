
//gnb 1depth li를 모두 탐색
const gnb_li = document.querySelectorAll("#gnb>li");

//1depth li마다 반복을 돌면서 이벤트 연결
gnb_li.forEach((li, index)=>{
  //각 1depth li에 마우스호버시 서브패널 보이기
  li.addEventListener("mouseenter",e=>{
    e.currentTarget.querySelector(".sub").style.display="block";
  })

  //각 1depth li에 마우스아웃시 서브패널 숨기기
  li.addEventListener("mouseleave", e=>{
    e.currentTarget.querySelector(".sub").style.display="none";
  })

  //각 1depth li에 포커스발생시 해당 요소의 자식 서브패닐 보이기
  li.addEventListener("focusin",e=>{
    e.currentTarget.querySelector(".sub").style.display="block";
  })


  //각 1depth li의 .sub ul까지 탐색후 마지막 자식 li요소를 선택 해서 
  //해당 요소에서 포커스가 떠나면 제일 가까운 부모요소인 sub를 숨김처리
  li.querySelector(".sub ul").lastElementChild.addEventListener("focusout",e=>{
    e.currentTarget.closest(".sub").style.display="none";
  })  
})


//스킵네비게이션 이벤트
const btns = document.querySelectorAll("#skip a");

btns.forEach((btn, index)=>{
  btn.addEventListener("focusin",e=>{
    e.currentTarget.classList.add("on");
  })

  btn.addEventListener("focusout",e=>{
    e.currentTarget.classList.remove("on");
  })
})