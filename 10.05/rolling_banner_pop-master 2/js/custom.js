var num=0;
var timer;

timer = setInterval(move, 20);

$(".listBox").on("mouseenter",function(){    
    clearInterval(timer);
});
$(".listBox").on("mouseleave", function(){    
    timer = setInterval(move,20);
});

//썸네일 클릭시 동적 레이어팝업 생성
$(".list li").on("click", function(e){
    e.preventDefault();

    $("body")
        .append(
            $("<aside class='pop'>")
                .append(
                    $("<div class='con'>"),
                    $("<span class='btnClose'>").text("close")
                )
                .fadeIn(500)
        )
});

//레이어 닫기버튼 클릭시 제거
$("body").on("click", ".pop .btnClose", function(){
    $(".pop").fadeOut(500,function(){
        $(this).remove();
    })
});

//setInterval로 반복할 공통 함수 분리
function move(){
    if(num <= -240){        
        num = 0;        
        $(".list").find("li").first().appendTo($(".list"));
    }else{ 
        num -= 2;
    }    
    $(".list").css({left: num});
}