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

        activation(i);
        matchHeight(i, $boxs)
    }
    
});

function activation(index) {
        //모든 버튼 비활성화& 클릭버튼 활성화 
        $btns.removeClass("on"); 
        $btns.parent("li").eq(index).children("a").addClass("on"); 

        $boxs.removeClass("on"); 
        $boxs.eq(index).addClass("on"); 
}



function matchHeight(index, item) {
    let ht = item.eq(index).height();

    $tab.animate({ height : ht, marginTop:-ht/2},speed, function(){
        isDone = true; 
    });
}