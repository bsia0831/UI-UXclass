$.ajax({
    url:"https://www.flickr.com/services/rest/?method=flickr.photos.search",
    //url:"https://www.flickr.com/services/rest/?method=flickr.interestingness.getList", 
    dataType:"json", 
    data:{
        api_key:"d61e30a1010fe3e1dab106d3a2df0f21", 
        per_page:20, 
        format:"json",
        nojsoncallback:1, 
        privacy_filter : 1, 
        tags :"landscape" 
    }
})
.success(function(data){    
    
    let items = data.photos.photo; 
    console.log(items);
   
    $("#gallery").append("<ul>");
   
    $(items).each(function(index, data){
        let text = data.title;        
        if(!data.title){          
            text = "No description in this photo"; 
        }

        $("#gallery ul")
            .append(
                $("<li>")   
                    .append(
                        $("<div>").append(
                            $("<a>").attr({
                                href : "https://live.staticflickr.com/"+data.server+"/"+data.id+"_"+data.secret+"_b.jpg"
                            })
                            .append(                            
                                $("<img class='thumb'>").attr({
                                    src : "https://live.staticflickr.com/"+data.server+"/"+data.id+"_"+data.secret+"_m.jpg"
                                })
                            ),
                            $("<p>").text(text),    
                                                   
                            $("<div class='profile'>")
                            .append(
                                $("<img class='buddy'>").attr({
                                    //src : "https://www.flickr.com/buddyicons/"+data.owner+".jpg"
                                    src: "http://farm"+data.farm+".staticflickr.com/"+data.server+"/buddyicons/"+data.owner+".jpg"
                                }),
                                $("<span>").text(data.owner)
                            )   
                                                     
                        )
                    ) 
            )//gallery append ends       
    });    

    
    let imgNum=0;

    $("#gallery img").each(function(index, data){
        //????????? ???????????? ????????? ?????? ??????????????????
        data.onload = function(){
            //imgNum?????? 1??? ??????
            imgNum++;
            console.log(imgNum);

            //imgNum?????? 40???(?????????????????? ??????) ?????? ????????? ?????? ?????????????????? ??????????????? ??????
            if(imgNum === 40){                
                new Isotope("#gallery ul",{
                    itemSelector : "#gallery ul li",
                    columnWidth: "#galley ul li",                  
                    transitionDuration: "0.5s"
                });                
            }
        }        
    }); 
    
    
    
})
.error(function(err){
    console.err("???????????? ??????????????? ??????????????????"); 
});


$("body").on("click", "#gallery ul li", function(e){
    e.preventDefault(); 

    let imgSrc = $(this).children("a").attr("href"); 

    $("body").append(
        $("<div class='pop'>")
            .append(
                $("<img>").attr({ src : imgSrc}),
                $("<span>").text("close")
            )
    )
});

$("body").on("click", ".pop span", function(){
    $(".pop").remove(); 
});