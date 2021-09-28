//모든 article 요소를 변수 items에 저장 
const items = document.querySelectorAll("article"); 

//aside 변수에 저장 
const aside = document.querySelector("aside"); 
const close = aside.querySelector("span"); 

//article 요소의 갯수만큼 반복 
for(let el of items){
    //현재 반복하는 article 요소에 mouseenter 이벤트 발생 
    el.addEventListener("mouseenter", e=>{
        //자식요소인 video 재생 
        e.currentTarget.querySelector("video").play(); 
    });

    //현재 반복하는 article 요소에 mouseleave 이벤트 발생 
    el.addEventListener("mouseleave", e=>{
        //자식요소인 video 일시정지 
        e.currentTarget.querySelector("video").pause(); 
    }); 

 
    //목록 클릭시 영상소개 페이지 보여주기 
    //현재 반복 돌고 있는 article 요소에 click 이벤트 발생 
    el.addEventListener("click", e=>{
        //제목과 본문내용, video요소 src값을 변수에 저장 
        let tit = e.currentTarget.querySelector("h2").innerText; 
        let txt = e.currentTarget.querySelector("p").innerText; 
        let vidSrc = e.currentTarget.querySelector("video").getAttribute("src");
        
        //aside 요소 안쪽의 콘텐츠에 위의 변수 내용을 적용 
        aside.querySelector("h1").innerText = tit; 
        aside.querySelector("p").innerText = txt; 
        aside.querySelector("video").setAttribute("src", vidSrc); 

        //aside 요소 안쪽의 동영상 재생하고 
        //aside요소에 on을 붙여 팝업 패널 활성화 
        aside.querySelector("video").play(); 
        aside.classList.add("on"); 
    });

    //닫기 버튼 클릭시 
    close.addEventListener("click", ()=>{
        //aside 요소에 클래스 on을 제거해 비활성화하고 
        //안쪽의 동영상을 재생중지 
        aside.classList.remove("on"); 
        aside.querySelector("video").pause(); 
    })

}




