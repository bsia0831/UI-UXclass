/*
문자열의 모든 내장함수는 보통 불변성을 유지 
문자열의 내장함수를 이용해서 특정 문자를 잘라낼 때 반환되는 값은 기존 문자열을 변경하는게 아닌 새로운 문자열이 복사가 되어서 반환 - 원본의 데이터가 훼손되지 않음 


문자열.length : 문자열 갯수 반환 
문자열.indexOf(text) : 특정 문자에서 시작하는 부분의 특정 문자열의 위치를 반환해줌 
문자열.lastIndexOf(text, [start]) : 특정 문자에서 끝나는 부분의 특정문자열의 위치를 반환  
문자열.search(text) : 특정 문자에서 시작하는 부분의 특정 문자열의 위치를 반환 

문자열.slice(start, [end]) : 특정문자에서 특정부분의 순서값을 넣어서 문자열을 자른다 
문자열.substring(start, [end]) : 특정문자에서 특정부분의 순서값을 넣어서 문자열을 자름  
문자열.substr(start, [length]) : 특정문자에서 특정 갯수만큼 문자열을 자름

문자열.replace("origin", "change") : 특정 문자열을 원하는 문자열로 변경(대소문자 구분)
문자열.toUpperCase() : 문자열을 대문자로 변경 
문자열.toLowerCase() : 문자열을 소문자로 변경 
문자열.concat(문자열2) : 두개의 문자열을 연결 
문자열.split("구분점") : 구분점을 기준으로 문자열을 분리해서 배열로 반환 

정규표현식 
/검사할 문자열/i : 문자열을 대소문자 구분없이 검사 
/검사할 문자열/g : 해당 문자열을 모두 찾아서 검사 
*/

let txt = "Hello World World"; 
//let result = txt.length; //17
//let result = txt.indexOf("Wo"); //6
//let result = txt.indexOf("Wo", 8); //12
//let result = txt.lastIndexOf("Wo"); //12
//let result = txt.search("Wo"); //6

//let fileType = "abc.gif"; 
//let result = fileType.substr(-3, 3); //gif

//let result = txt.replace("World", "Everyone"); //Hello Everyone World
//let result = txt.toUpperCase(); 
//let result = txt.toLowerCase();

//let result = txt.replace(/world/ig, "everyone"); 

let txt1 = "안녕하세요"; 
let name = "홍길동님"; 
//let result = txt1.concat(" ", name); //안녕하세요 홍길동님 

let className = "box1 box2 box3 box4"; 
let result = className.split(" "); 


console.log(result);