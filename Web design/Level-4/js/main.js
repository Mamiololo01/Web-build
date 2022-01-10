jQuery(document).ready(function(){
    "use strict"
    $('.slider').ripples({
        dropRadius: 10,
        perturbance: 0.01,
    
      });

   $(".text").typed({
       strings: ["First sentence.","Second sentence."],
       typespeed: 0,
       loop: true,
   });

});