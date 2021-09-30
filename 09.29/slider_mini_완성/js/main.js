const $slider = $("#slider"); 
const $panel = $slider.find(".panel"); 
const $btns = $slider.find(".navi li"); 
const $circle = $slider.find("#circle"); 
let enableClick = true; 
let speed = 1000; 

//event binding 
$btns.on("click", function(e){
    e.preventDefault(); 

    let isOn = $(this).hasClass("on"); 
    if(isOn) return; 

    var i = $(this).index(); 

    if(enableClick){
        $panel.animate({ marginLeft : (-100 * i) +"%"}, speed, function(){
            enableClick = true; 
        }); 

        $btns.removeClass("on"); 
        $btns.eq(i).addClass("on"); 

        $circle.removeClass(); 
        $circle.addClass("rot"+i); 

        enableClick = false; 
    }
   
}); 

