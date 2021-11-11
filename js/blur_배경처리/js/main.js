$(".btnToggle").on("click", function(e){
   e.preventDefault();

   $("aside").toggleClass("on");
})