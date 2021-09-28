const $frame = $("#wrap");
const $btns = $frame.find("dt");
const $boxs = $frame.find("dd");
let speed = 500;

$btns.on("click", function (e) {
    e.preventDefault();

    var isOn = $(this).hasClass("on");

    if(isOn){
        $(this).removeClass("on");
        $(this).next().slideUp(speed);
    }
    else{
        $(this).addClass("on");
        $(this).next().slideDown(speed);
    }


});
