$(document).ready(function(){
    $(".banner_carousel").owlCarousel({
        items:1,
        nav:true,
        loop:true,
        autoplay:true,
        autoplayTimeout:5000,
        smartSpeed:1000,
        autoplayHoverPause:true, 
        
    });
    
  });

  $(document).ready(function(){
    $(".brand_carousel").owlCarousel({
        items:5,
        nav:true,
        loop:true,
        autoplay:true,
        autoplayTimeout:5000,
        smartSpeed:1000,

        responsive:{
          575:{
              items:3,
          }     
        }
      
    });
    
  });  
  