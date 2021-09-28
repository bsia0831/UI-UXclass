const $tab = $("#tab");
const $btns = $tab.find("#btns li a");
const $boxs = $tab.find(".boxs div");
let speed = 500;
let isDone = true;

$btns.on("click", function (e){
    e.preventDefault();

    let isOn = $(this).hasClass("on");
    if(isOn) return;

    if(isDone){
        isDone = false;

        let i = $(this).parent("li").index();
        let ht = $boxs.eq(i).height();
        console.log(i);
    
        $btns.removeClass("on");
        $(this).addClass("on");
    
        $boxs.fadeOut(speed);
        $boxs.eq(i).fadeIn(speed);
    
        $tab.animate({ height : ht, marginTop: ht/2}, speed, function(){
            isDone = true;
        });
    }
});