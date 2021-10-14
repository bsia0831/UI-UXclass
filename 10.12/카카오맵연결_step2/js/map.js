var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(37.5109446,127.0567967), //지도의 중심좌표.
	level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴


//지도 이동 막기 
setDraggable(true); 
// 버튼 클릭에 따라 지도 이동 기능을 막거나 풀고 싶은 경우에는 map.setDraggable 함수를 사용합니다
function setDraggable(draggable) {
   // 마우스 드래그로 지도 이동 가능여부를 설정합니다
   map.setDraggable(draggable);    
}

//지도 확대 축소 켜기 //끄기는 false  
setZoomable(true); 
// 버튼 클릭에 따라 지도 확대, 축소 기능을 막거나 풀고 싶은 경우에는 map.setZoomable 함수를 사용합니다
function setZoomable(zoomable) {
   // 마우스 휠로 지도 확대,축소 가능여부를 설정합니다
   map.setZoomable(zoomable);    
}

 

//교통정보 표시하기 ---------------------------------------------------
var t_on = document.querySelectorAll(".traffic li")[0];  
var t_off = document.querySelectorAll(".traffic li")[1]; 

t_on.addEventListener("click", function(e){
   e.preventDefault(); 
   // 지도에 교통정보를 표시하도록 지도타입을 추가합니다
   map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC); 

   t_on.classList.add("on"); 
   t_off.classList.remove("on"); 
});

t_off.addEventListener("click", function(e){
   e.preventDefault(); 
   // 아래 코드는 위에서 추가한 교통정보 지도타입을 제거합니다
   map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);  

   t_on.classList.remove("on"); 
   t_off.classList.add("on"); 
});

// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
var mapTypeControl = new kakao.maps.MapTypeControl();

// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);   

 


//마커표시하기 -----------------------------------------------------------
var branch_btns = document.querySelectorAll(".branch li"); 
var markerOptions = [
   { 
      title: "본점", 
      latlng : new kakao.maps.LatLng(37.5109446,127.0567967), 
      imgSrc : "img/marker1.png", 
      imgSize : new kakao.maps.Size(232, 99),
      imgPos : {offset: new kakao.maps.Point(128, 99)}, 
      button :  branch_btns[0]
   },
   {
      title: "지점1", 
      latlng : new kakao.maps.LatLng(37.507099922888266,126.75640469886633), 
      imgSrc : "img/marker2.png", 
      imgSize : new kakao.maps.Size(232, 99),
      imgPos : {offset: new kakao.maps.Point(116, 99)}, 
      button :  branch_btns[1]
   },
   {
      title: "지점2",  //37.529852,126.9646949
      latlng : new kakao.maps.LatLng(37.52964557140191,126.96444186998666), 
      imgSrc : "img/marker3.png", 
      imgSize : new kakao.maps.Size(232, 99),
      imgPos : {offset: new kakao.maps.Point(116, 99)}, 
      button :  branch_btns[2]
   }
];


for(let i=0; i<markerOptions.length; i++){
   new kakao.maps.Marker({
      map:map,  
      position:markerOptions[i].latlng, 
      title:markerOptions[i].title, 
      image:new kakao.maps.MarkerImage(markerOptions[i].imgSrc,markerOptions[i].imgSize, markerOptions[i].imgPos)
   }); 

   markerOptions[i].button.onclick = function(){
      moveTo(markerOptions[i].latlng); 
   }

}
  
function moveTo(target) {            
   // 이동할 위도 경도 위치를 생성합니다 
   var moveLatLon = target;
   
   // 지도 중심을 이동 시킵니다
   map.setCenter(moveLatLon);
}

