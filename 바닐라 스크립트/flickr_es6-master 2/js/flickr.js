/*
39d6e86ec62077747de49698953a05a8

https://www.flickr.com/services/rest/?method=flickr.test.echo&name=value

flickr.interestingness.getList
*/
const main = document.querySelector("main"); 
const frame = document.querySelector("#list"); 
const input = document.querySelector("#search"); 
const btn = document.querySelector(".btnSearch"); 
const loading = document.querySelector(".loading");
const base = "https://www.flickr.com/services/rest/?"; 
const method1 = "flickr.interestingness.getList";
const method2 = "flickr.photos.search";
const key = "39d6e86ec62077747de49698953a05a8";
const per_page = 20; 
const format = "json"; 


//interestingness 메소드 
const url1 = `${base}method=${method1}&api_key=${key}&per_page=${per_page}&format=${format}&nojsoncallback=1`; 




//페이지 로딩후 interestingness 메서드 호출 
callData(url1); 

btn.addEventListener("click", e=>{
   let tag = input.value; 
   if(tag == "") return; 
   //search 메서드 
   const url = `${base}method=${method2}&api_key=${key}&per_page=${per_page}&format=${format}&nojsoncallback=1&tags=${tag}&privacy_filter=1`;

   callData(url); 
});


input.addEventListener("keypress", e=>{
   if(e.key = "Enter"){
      let tag = input.value; 

      if(tag == "") return; 
      const url = `${base}method=${method2}&api_key=${key}&per_page=${per_page}&format=${format}&nojsoncallback=1&tags=${tag}&privacy_filter=1`;

      callData(url); 
   }
})

//동적 팝업 생성 
frame.addEventListener("click", e=>{
   e.preventDefault(); 

   if(e.target !== e.target.closest(".item").querySelector(".thumb")) return; 
   let target = e.target.closest(".item"); 
   let imgSrc = target.querySelector("a").getAttribute("href"); 

   let pop = document.createElement("aside"); 
   let pops = `
               <img src="${imgSrc}">
               <span class="close">CLOSE</span>
   `; 
   pop.innerHTML = pops; 
   document.querySelector("main").append(pop); 
}); 


//팝업닫기 버튼 클릭 이벤트 위임 
main.addEventListener("click", e=>{
   let target = e.target.closest("aside"); 

   if(target !== null){
      let close = target.querySelector(".close"); 
      if(e.target == close) target.remove(); 
   }
   
})





function callData(url){
   frame.innerHTML =""; 
   loading.classList.remove("off"); 
   frame.classList.remove("on"); 

   fetch(url)
   .then(data=>{
      let result = data.json(); 
      return result; 
   })
   .then(json=>{   
      let items = json.photos.photo;   
      createList(items);
      delayLoading();      
   })   
}

function createList(items){
   let htmls =""; 
   
   //배열의 갯수만큼 반복
   items.map(data=>{
      console.log(data);      

      let imgSrcBig = `https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_b.jpg`;
      let imgSrc = `https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_m.jpg`;

      htmls+=`
            <li class="item">
               <div>
                  <a href="${imgSrcBig}">
                     <img class="thumb" src="${imgSrc}" alt="">
                  </a>
                  <p>${data.title}</p>
                  <span>
                     <img class="profile" src="http://farm${data.farm}.staticflickr.com/${data.server}/buddyicons/${data.owner}.jpg"> 
                     <strong>${data.owner}</strong>
                  </span>
               </div>
            </li>
      `;
   }); 

   //http://www.flickr.com/buddyicons/${data.owner}.jpg

   frame.innerHTML = htmls; 
}

function delayLoading(){
   //동적으로 생성된 이미지의 전체 갯수를 구함 
   const imgs = frame.querySelectorAll("img"); 
   const len = imgs.length; 
   let count = 0; 

   //이미지 갯수만큼 반복을 돌명서 
   for(let el of imgs){
      //각 이미지가 로딩이 완료되면 1씩 count값 증가 
      el.onload =()=>{
         count++; 

         //모든 이미지가 로딩이 완료되면 isoLayout 함수 호출 
         if(count === len) isoLayout(); 
      }

      let thumb = el.closest(".item").querySelector(".thumb"); 
      thumb.onerror = e =>{
         e.currentTarget.closest(".item").querySelector(".thumb").setAttribute("src", "img/k1.jpg"); 
      }

      let profile = el.closest(".item").querySelector(".profile"); 
      profile.onerror = e =>{
         e.currentTarget.closest(".item").querySelector(".profile").setAttribute("src", "https://www.flickr.com/images/buddyicon.gif");
      }
   }
}

function isoLayout(){
   loading.classList.add("off"); 
   frame.classList.add("on"); 

   new Isotope("#list",{
      itemSelector :".item", 
      columnWidth : ".item", 
      transitionDuration : "0.5s"
   })
}