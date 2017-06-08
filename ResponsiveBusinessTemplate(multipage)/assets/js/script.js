(function ($) {
	"use strict";

    jQuery(document).ready(function($){

/// ----------  slider   ------------ 

     $(".header-slide").owlCarousel({
           
           singleItem:true,
           navigation: true,
           autoPlay: 4000, //Set AutoPlay to 5 seconds
           pagination:false,        
           loop: true,
           
           navigationText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>" ],
           transitionStyle:"fadeUp"
            

          
       });

 $()
  

      
 /// ----------  light box  ------------   


$('.gallery-lightbox').magnificPopup({ 
  type: 'image',
  removalDelay: 300,
  mainClass: 'mfp-with-fade',
  closeOnContentClick: true,
   gallery:{enabled:true},
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
      
    }


});


///  slick nav( mobile menu)

 $(function(){
   $('#navigation').slicknav({
        prependTo:'.responsive-menu'
   });

  });


//Initiat WOW JS ......
  new WOW().init();

// For scroll up 
   $(window).scroll(function() {
            if ($(this).scrollTop() > 180) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });

    $('.scrollup').click (function () {
       $("html,body").animate({
          scrollTop:0

       }, 700);
          return false;
    }); 





    });




/// site preloader

    jQuery(window).load(function(){
           
        jQuery(".site-preloader").fadeOut(3000)
        
    });
 
jQuery(window).load (function () {
    jQuery(".scrollup").fadeOut()

 }); 





}(jQuery));	