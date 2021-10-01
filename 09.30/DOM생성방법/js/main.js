/*
DOM 생성
방법1 - append() 활용해서 태그, 속성을 직접 다 설정 
방법2 - html() 활용해서 모든 태그와 속성을 아예 문자열로 전체를 만들어서 삽입 

*/

//append() 
/*
$("body")
    .append(
       $("<div>")
            .addClass("box")
            .append(
                $("<a>")
                    .attr({
                        href : "https://naver.com",
                        target :"_blank"
                    })
                    .text("네이버")
            )
    )

*/

//html() : 선택자안에 기존의 내용을 지우고 새로운 태그를 문자열 형태로 삽입 
/*
var result = ""; 
result += "<h1>TEXT</h1>"; 
result += "<div class='box'>"; 
result += "<a href='https://naver.com' target='_blank'>네이버</a>";
result += "</div>"; 

$("body").html(result); 
*/

//append() 
/*
$("body")
    .append(
        $("<article>")
            .addClass("item")
            .append(
                $("<a>")
                    .attr({ href : "#"})
                    .append(
                        $("<img>")
                            .attr({ src : "img/pic1.jpg"})
                    )
            )
            .append(
                $("<h2>")
                    .text("Title comes here.")
            )

    )

    */

 $("body")
    .append(
        $("<article>")
            .addClass("item")
            .append(
                $("<a>")
                    .attr({ href : "#"})
                    .append(
                        $("<img>")
                            .attr({ src : "img/pic1.jpg"})
                    ),
                $("<h2>")
                    .text("Title comes here.")
            )
    )


//html() 
/*
let result = ""; 
result += "<article class='item'>"; 
result += "<a href='#'>"
result += "<img src='img/pic1.jpg'>"; 
result += "</a>"; 
result += "<h2>Title comes here</h2>"; 
result += "</article>"; 


let result ="<article class='item'><a href='#'><img src='img/pic1.jpg'></a><h2>Title Comes here.</h2></article>";

$("body").html(result); 

*/

//es6 문자열 표기법 
let tit = "Title comes here"; 
let result = `<article class="item">
                    <a href="#">
                        <img src="img/pic1.jpg"> 
                    </a>
                    <h2>${tit}</h2>
                </article>`; 

$("body").html(result); 