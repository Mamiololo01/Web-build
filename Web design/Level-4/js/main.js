jQuery(document).ready(function(){
    "use strict"
    $('.slider').ripples({
        dropRadius: 11,
        perturbance: 0.01,
    
      });

   $(".text").typed({
       strings: ["<strong>Optimal service.</strong><strong class='primary'>","delivery with Level-4."],
       typespeed:0,
       loop:true,
   });

   $(".counter").counterUp({
    delay: 10,
    time: 1000
});
  
     $('a').smoothScroll();

    new WOW().init();

});