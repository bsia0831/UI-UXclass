/*
focus 이벤트
focus: 인터렉션이 가능한 요소에 사용자가 접근
focusin: 포커스가 들어감
focusout: 포커스가 나감
*/
//전역변수 
const $tab = $("#tab"); 
const $btns = $tab.find("dt a"); 
const $boxs = $tab.find("dd");

$btns.on("click focusin", function(e){
    e.preventDefault();

    let isOn = $(this).hasClass("on");
    if(isOn) return;

    var target = $(this).attr("href");
    console.log(target);

    $boxs.hide();
    $(target).show();

    $btns.removeClass("on");
    $(this).addClass("on");
});