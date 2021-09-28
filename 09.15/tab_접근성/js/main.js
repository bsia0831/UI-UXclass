//전역변수 
const $tab = $("#tab"); 
const $btns = $tab.find("dt a"); 
const $boxs = $tab.find("dd"); 

//이벤트 바인딩 
$btns.on("click", function(e){
    e.preventDefault(); 
    let isOn = $(this).hasClass("on"); 
    if(isOn) return; 

    let target = $(this).attr("href");     
    activation(target, $(this));    
}); 

//함수정의 
function activation(tg, el){
    console.log(tg); 
    $boxs.hide(); 
    $(tg).show(); 

    $btns.removeClass("on"); 
    el.addClass("on"); 
}