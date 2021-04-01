$(document).ready(function(){ 
    $(".btn-cmn").click(function () {
     if(!$(this).hasClass('active-btn'))
     {    
         $(".btn-cmn.active-btn").removeClass("active-btn");
          $(".btn-cmn.active-btn").css("transition","all .4s ease-in-out");
         $(this).addClass("active-btn");  
         $(this).css("transition","all .4s ease-in-out");      
     }
   });
 });