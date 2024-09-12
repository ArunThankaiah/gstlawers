;(function($) {
    "use strict";
    /*slider area Carousel*/
    function sliderCarousel(){
        if( $('.slider-carousel').length ){
            $('.slider-carousel').owlCarousel({
                loop:true,
                margin:0,
                autoplay: true,
                nav: false,
                items: 1
            })
        }
    }    
    sliderCarousel();
    
    //team area carousel====*/
    function teamCarousel(){
        if( $('.team').length ){
            $('.team').owlCarousel({
                loop:false,
                margin:30,
                autoplay: true,
                nav: false,
                items: 3,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1,
                    },
                    650:{
                        items:2,
                    },
                    1000:{
                        items:3,
                    }
                }
            })
        }
    }    
    teamCarousel();
    
    /*======latest area carousel====*/
    function latestCarousel(){
        if( $('.l-slider').length ){
            $('.l-slider').owlCarousel({
                loop:true,
                margin:0,
                autoplay: true,
                nav: false,
                items: 1
            })
        }
    }    
    latestCarousel();
    
    /*======location area carousel====*/
    function locationSlider(){
        if( $('.location-slider').length ){
            $('.location-slider').owlCarousel({
                loop:true,
                margin:30,
                autoplay: true,
                nav: false,
                items: 4,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1,
                    },
                    450:{
                        items:1,
                    },
                    650:{
                        items:2,
                    },
                    768:{
                        items:3,
                    },
                    1000:{
                        items:4,
                    }
                }
            })
        }
    }    
    locationSlider();
    
    /*======location area carousel====*/
    function leadersSlider(){
        if( $('.leaders-slider').length ){
            $('.leaders-slider').owlCarousel({
                loop:true,
                margin:30,
                autoplay: true,
                nav: false,
                items: 2,
                responsiveClass:true,
            })
        }
    }    
    leadersSlider();
    

      // stick menu function
    
    var nav_offset_top = $('#main_navbar').offset().top;
    
        $('#main_navbar').affix({
            offset: {
                top: nav_offset_top,
               
            }
        });
    
    /*----------------------------------------------------*/
    /*  Google Map
    /*----------------------------------------------------*/        
        function mapBox () {
            if ( $( '#mapBox' ).length ){
                var $lat = $('#mapBox').data('lat');
                var $lon = $('#mapBox').data('lon');
                var $zoom = $('#mapBox').data('zoom');

                var map = new GMaps({
                    el: '#mapBox',
                    lat: $lat,
                    lng: $lon,
                    scrollwheel: false,
                    scaleControl: true,
                    streetViewControl: true,
                    panControl: true,
                    disableDoubleClickZoom: true,
                    mapTypeControl: true,
                    zoom: $zoom
                }) 
            }
        }
        mapBox ();
      // stick menu function
    
    new WOW().init();
    
    
    // preloader js
    $(window).load(function() { // makes sure the whole site is loaded
		$('.loader').fadeOut(); // will first fade out the loading animation
		$('.sampleContainer').delay(150).fadeOut('slow'); // will fade out the white DIV that covers the website.
		$('body').delay(150).css({'overflow':'visible'})
    })
    
    
})(jQuery)

