/*
1. tab의 btn을 클릭하면 
2. click 이벤트의 기본클릭이동금지 
3.해당박스를 보이게 한다 
- 1. 클릭한 버튼의 순번을 구한다 .index();  
- 2. 다른 박스는 안보이게 처리 
- 3. 해당 순번에 해당하는 박스는 보이게
4.클릭한 버튼은 활성화 

.index() 순번을 구하는 방법 
.eq(순번) 순번째를 찾는 방법 

*/
 
/*
//event binding 
//tab btn을 클릭했을 때 
$("#tab ul li a").on("click", function(e){
    //기본링크이동 금지 
    e.preventDefault(); 

    //클릭한 버튼a의 부모 li의 순번을 구한다 
    let i = $(this).parent().index(); 

    //모든 그룹의 박스를 안보이게 처리 
    $("#tab .group div").hide(); 
    //순번에 해당하는 박스는 보이게 처리 
    $("#tab .group div").eq(i).show(); 

    //모든 btns를 비활성화 
    $("#tab ul li a").removeClass("on"); 
    //순번에 해당하는 li의 자식인 a태그 활성화 
    $("#tab ul li").eq(i).children("a").addClass("on"); 
}); 
*/

/*
1. 버튼을 클릭하면 
2. 링크이동금지 
3. 클릭한 버튼의 href값 구해서 
4. 해당박스는 보이게 / 다른 박스는 비활성화 처리 

.attr("href")
*/

$("#tab ul li a").on("click", function(e){
    e.preventDefault(); 

    let target = $(this).attr("href"); 
   //console.log(target); 

    $("#tab .group div").hide(); 
    $(target).show(); 
}); 