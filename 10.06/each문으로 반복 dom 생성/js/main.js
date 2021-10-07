/*
.each() : 배열이나 반복되는 DOM을 반복처리 가능 
*/

const fruit = ["banana", "apple", "melon", "strawberry"]; 
/*
for(let i=0; i<fruit.length; i++){
    console.log(i);
    console.log(fruit[i]); 
}
*/

$(fruit).each(function(index, data){
    console.log(index); 
    console.log(data); 
});

/*
<ul>
    <li><a href="링크주소1">링크주소1</a></li>
    <li><a href="링크주소2">링크주소2</a></li>
    <li><a href="링크주소3">링크주소3</a></li>
</ul>
*/

const links = [
    "https://www.naver.com", 
    "https://www.nate.com",
    "https://google.com"
];

/*
let result = ""; 
result += "<ul>"; 

$(links).each(function(index,data){
    result += "<li><a href='"+data+"'>"+data+"</a></li>"; 
});

result+= "</ul>";
$("body").html(result); 
*/

$("body").append("<ul>"); 
$(links).each(function(index,data){
    $("ul").append(
        $("<li>")
            .append(
                $("<a>")
                    .attr({ href : data })
                    .text(data)
            )
    )
});