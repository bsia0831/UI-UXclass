//DOM Caching 
const $slider1 = $("#slider1"); 
const $slider2 = $("#slider2"); 
const $prev = $(".prev"); 
const $next = $(".next"); 
let speed = 1000; 

init($slider1);
init($slider1); 
 

//event binding 
$next.on("click", function(e){
    e.preventDefault(); 
    next($slider1);
    next($slider2);
});

$prev.on("click", function(e){
    e.preventDefault(); 
    prev($slider1); 
    prev($slider2);
}); 

function init(el){
    let len = el.children("ul").find("li").length; 
    el.children("ul").css({ width : 100 * len +"%"}); 
    el.children("ul").find("li").css({ width : 100 / len +"%"}); 
    el.children("ul").find("li").last().prependTo(el.children("ul"));    
}

function prev(el){
    el.children("ul").animate({marginLeft : "0%"}, speed, function(){
        $(this).css({ marginLeft : "-100%"}); 
        $(this).children("li").last().prependTo(this); 
    }); 
}

function next(el){
    el.children("ul").animate({ marginLeft : "-200%"}, speed, function(){
        $(this).css({ marginLeft : "-100%"}); 
        $(this).children("li").first().appendTo(this);
    });
}
