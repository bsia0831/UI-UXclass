const link = document.querySelector("a");

link.addEventListener("click", (e)=>{
    //이벤트의 기본기능을 실행하지 말라는 명령어
    e.preventDefault();
    console.log("링크를 클릭했습니다.");
});

/*
이벤트 지정하기 
요소명.addEventListener("이벤트", (전달될값)=>{
    실행될 구문
});
*/