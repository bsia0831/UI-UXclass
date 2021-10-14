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


//마커표시하기 -----------------------------------------------------------
var imageSrc = 'img/marker1.png', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(232, 99), // 마커이미지의 크기입니다 //64, 69
    imageOption = {offset: new kakao.maps.Point(128, 99)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
      
// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new kakao.maps.LatLng(37.5109446,127.0567967); // 마커가 표시될 위치입니다

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition, 
    image: markerImage // 마커이미지 설정 
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map); 






//교통정보 표시하기 ---------------------------------------------------
var t_on = document.querySelector(".t_on"); 
var t_off = document.querySelector(".t_off"); 

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

  
//지도 이동하기 ------------------------------------------------------
var b1 = document.querySelector(".b1"); 
var b2 = document.querySelector(".b2"); 

b1.addEventListener("click", function(e){
   e.preventDefault(); 
   setCenter(); 
});

b2.addEventListener("click", function(e){
   e.preventDefault(); 
   panTo(); 
}); 


function setCenter() {            
   // 이동할 위도 경도 위치를 생성합니다 
   var moveLatLon = new kakao.maps.LatLng(37.5070292,126.7541541);
   
   // 지도 중심을 이동 시킵니다
   map.setCenter(moveLatLon);
}

function panTo() {
   // 이동할 위도 경도 위치를 생성합니다 
   var moveLatLon = new kakao.maps.LatLng(37.5070292,126.7541541);
   
   // 지도 중심을 부드럽게 이동시킵니다
   // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
   map.panTo(moveLatLon);            
}  