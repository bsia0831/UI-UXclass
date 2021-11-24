$(document).ready(function(){
    var num = 0;
    console.log('visual');
})
$(document).ready(function(){
    var num = 1;
    $('#gnb>li').on('mouseenter',function(){
        $(this).children('ul').show();
        $(this).children('a').addClass('on');
    });
    $('#gnb>li').on('mouseleave',function(){
        $(this).children('ul').hide();
        $(this).children('a').removeClass('on');
    });
})
$(document).ready(function(){
    var num = 1;
    $('#gnb>li').on('mouseenter',function(){
        $(this).children('ul').show();
        $(this).children('a').addClass('on');
    });
    $('#gnb>li').on('mouseleave',function(){
        $(this).children('ul').hide();
        $(this).children('a').removeClass('on');
    });
})