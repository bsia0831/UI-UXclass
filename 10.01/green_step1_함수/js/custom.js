//DOM Caching 
const $tab = $("#tab"); 
const $btns = $tab.find("#btns li a"); 
const $boxs = $tab.find(".boxs div"); 
let speed = 500; 
let isDone = true; 

//event binding
$btns.on("click", function(e){
    e.preventDefault(); 

    let isOn = $(this).hasClass("on"); 
    if(isOn) return; 

    if(isDone){
        isDone =false; 
        //클릭한 버튼의 부모인 li의 순번 구하기 
        let i = $(this).parent("li").index(); 
        let ht = $boxs.eq(i).height(); 
        console.log(i); 

        activation(i, ht, $(this));
    }
    
});

function activation(index, height, el) {
        //모든 버튼 비활성화& 클릭버튼 활성화 
        $btns.removeClass("on"); 
        el.addClass("on"); 

        $boxs.fadeOut(speed); 
        $boxs.eq(i).fadeIn(speed); 

        $tab.animate({ height : ht, marginTop:-height/2},speed, function(){
            isDone = true; 
        });
}