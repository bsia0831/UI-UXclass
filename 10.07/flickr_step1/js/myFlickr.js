/*
//일정기간 가장 인기있는 사진들 출력 
https://www.flickr.com/services/rest/?method=flickr.interestingness.getList

//원하는 이미지 출력 
https://www.flickr.com/services/rest/?method=flickr.photos.search

"d61e30a1010fe3e1dab106d3a2df0f21"
*/
$.ajax({
    url:"https://www.flickr.com/services/rest/?method=flickr.photos.search",
    //url:"https://www.flickr.com/services/rest/?method=flickr.interestingness.getList", 
    dataType:"json", 
    data:{
        api_key:"d61e30a1010fe3e1dab106d3a2df0f21", 
        per_page:5, 
        format:"json",
        nojsoncallback:1, 
        privacy_filter : 5, 
        tags :"landscape" // 검색할 이미지 키워드 입력 - method가 photos.search일 때 (interestingnesss일때는 주석처리)
    }
})
.success(function(data){
    console.log(data); 
})
.error(function(err){
    console.err("데이터를 호출하는데 실패했습니다"); 
})