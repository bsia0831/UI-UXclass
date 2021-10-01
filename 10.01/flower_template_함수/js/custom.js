const $btns = $(".navi li a");
const $boxs = $(".box");
let isDone = true;

$btns.on("click", function (e) {
    e.preventDefault();

    let isOn = $(this).hasClass("on");
    if (isOn) return;

    let tg = $(this).attr("href");

    if (isDone) {

        activeBtn($(this));
        showTab(tg);
        isDone = false;
    }

});

function activeBtn(el) {
    $btns.removeClass("on");
    el.addClass("on");
}

function showTab(target) {
    $boxs.fadeOut(1000);
    $boxs.removeClass("on");

    $(target).fadeIn(1000, function () {
        isDone = true;
    });
    $(target).addClass("on");
}
