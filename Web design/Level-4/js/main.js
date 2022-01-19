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

   $(".counter").counterUp({
    delay: 10,
    time: 1000
});
  
    $('a').smoothScroll();

    new WOW().init();

});