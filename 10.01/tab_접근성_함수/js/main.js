/*
focus 이벤트 
focus : 인터렉션이 가능한 요소에 사용자가 접근 
focusin : 포커스가 들어감 
focusout : 포커스가 나감 
*/
//전역변수 
const $tab = $("#tab");
const $btns = $tab.find("dt a");
const $boxs = $tab.find("dd");

//버튼을 클릭했을 때 
$btns.on("click focusin", function (e){
    //기본링크이동금지 
    e.preventDefault();

    let isOn = $(this).hasClass("on");
    if (isOn) return;

    //클릭한 버튼의 href속성값 구해서 target에 담는다  
    var target = $(this).attr("href");
    console.log(target);

    activation(target, $(this));
});

function activation(tg, el) {
    //박스 비활성화하고 
    //클릭한 버튼에 해당하는 박스만 활성화
    $boxs.hide(); //$("#tab dd").hide(); 
    $(tg).show();

    //모든 버튼 비활성화
    //클릭한 버튼만 활성화 
    $btns.removeClass("on"); //$("#tab dt a").removeClass("on");
    el.addClass("on");
}