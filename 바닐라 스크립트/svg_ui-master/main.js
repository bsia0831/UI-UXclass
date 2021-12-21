const btnUp = document.querySelector(".btnUp");
const panel = document.querySelector(".panel");
const panel_li= panel.querySelectorAll("li");
const len = panel_li.length-1;

btnUp.addEventListener("click", e=>{
    e.preventDefault();

    //클래스 on있는 활성화 패널을 변수에 저장
    let current_item = panel.querySelector(".on");
    //활성화된 패널의 순번을 저장
    let current_index = parseInt(current_item.getAttribute("data-index"));
    //다음 패널의 순번이 저장될  변수를 미리 생성
    let next_index;

    //다음 패널의 순번 구함
    (current_index !== len) ? next_index = current_index+1 : next_index=0;

    //현재패널을 위쪽으로 올림
    current_item.classList.remove("on");
    current_item.classList.add("up");

    //다음순번의 패널을 선택해서  일단 down클래스를 붙여서 아래쪽에 대기
    panel_li[next_index].classList.add("down");

    setTimeout(()=>{
        panel_li[next_index].classList.remove("down");
        panel_li[next_index].classList.add("on");

        panel.querySelector(".up").classList.remove("up");
    },500)
})