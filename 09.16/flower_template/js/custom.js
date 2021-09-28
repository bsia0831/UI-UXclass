const $wrap = $("#wrap");
const $btns = $wrap.find("left ul li");
const $boxs = $wrap.find(".right>div");
let speed = 500;
let isDone = true; 

$btns.on("click", function (e) {
    e.preventDefault();

    let isOn = $(this).children("a").hasClass("on");
    if(isOn) return;
    if(isDone){
        isDone = false;
        let i = $(this).index();
        console.log(i);
    
        $btns.children("a").removeClass("on");
        $btns.eq(i).children("a").addClass("on");
    
        $boxs.fadeOut(speed);
        $boxs.eq(i).fadeIn(speed, function(){
            isDone = true;
        });
    }



})