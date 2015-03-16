		
	'use strict';
	//Check IE11
	function IEVersion() {
 		if (!!navigator.userAgent.match(/Trident\/7\./)) {
   		 	return 11;
		}
	}

	var DomainUrl = 'http://bazaarstorage.blob.core.windows.net/wedding';
	
	// Preloader
	//==================================================================================
	if( !device.tablet() && !device.mobile() ) {
		
		$(document).ready(function () {
		
			$('#logo, #slide_content').css({
				visibility: 'hidden'
			});
		
    		$("body").queryLoader2({
        		barColor: "#00c0b6",
        		percentage: true,
        		barHeight: 6,
        		completeAnimation: "grow",
				overlayId: "preloader",
				minimumTime: 1000,
				onComplete: function()
				{
					
					// WayPoint
					//====================================================
					$('.animation').css({
						visibility: 'hidden'
					});	
	
					$('.animation').waypoint(function() {
						$(this).css({ visibility: 'visible' });
 						$(this).addClass('animated');
						}, {
							offset: '95%'
					});
					
					// Hide Preloader
					//====================================================
					$("#start_preloader").fadeOut("fast", function(){
                   		$(this).remove();
                	}); 
					
					// Animate Logo and Slide Text
					//====================================================
					$('#logo, #slide_content').css({visibility: 'visible'});
					$("#logo").addClass("animated fadeInDown");
					$("#slide_content").addClass("animated delay1 fadeInRight");
					
				}
    		});
		});	
	}
	else
	{
		
		$('#logo, #slide_content').css({
			visibility: 'hidden'
		});
		
		window.addEventListener("DOMContentLoaded", function() {	
    		$("body").queryLoader2({
        		barColor: "#00c0b6",
        		percentage: true,
        		barHeight: 6,
        		completeAnimation: "fade",
				overlayId: "preloader",
				minimumTime: 1000,
				onComplete: function()
				{	
					// Hide Preloader
					//====================================================
					$("#start_preloader").fadeOut("fast", function(){
                   		$(this).remove();
                	}); 
					
					// Animate Logo and Slide Text
					//====================================================
					$('#logo, #slide_content').css({visibility: 'visible'});
					//$("#logo").addClass("animated fadeInDown");
					//$("#slide_content").addClass("animated delay1 fadeInRight");
				}
    		});
		});
	}

	// Supersized Slider
	//==================================================================================
	jQuery(function($){
		$.supersized({
			slides  :  	
			[ 
				{ image: DomainUrl + '/img/background2.jpg' },
				{ image: DomainUrl + '/img/background3.jpg' },
                { image: DomainUrl + '/img/background4.jpg' },
                { image: DomainUrl + '/img/background1.jpg' },
			]
		});
	});
	
	jQuery(document).ready(function($){
    	var deviceAgent = navigator.userAgent.toLowerCase();
   	 	var is_apple_device = deviceAgent.match(/(iphone|ipod|ipad)/);
    	if (is_apple_device) {
			$("#supersized, #supersized li").css("position","absolute");
    	}
	});

	// Sticky
	//==================================================================================
	$(document).ready(function(){
		$("#logo").sticky({ topSpacing: 0 });
		$("#nav").sticky({ topSpacing: 0 });
	});

	// One Page Nav
	//==================================================================================
	$(document).ready(function() {
		$('#nav_list').onePageNav({
    		scrollSpeed: 1200,
    		currentClass: 'active',
    		changeHash: true,
    		filter: ':not(.external)'
		});
	});
	
	// Responsive Nav Hack. Hide Menu After Click It
	//==================================================================================
	$(document).ready(function() {
		var navMain = $(".navbar-collapse");
        navMain.on("click", "a", null, function () {
            if ($(this).attr("href") !== "#") {
                navMain.collapse('hide');
            }
        });
	});
	
	// NiceScroll
	//==================================================================================
	$(document).ready(function() {
		if (IEVersion() != 11 && !device.tablet() && !device.mobile()) 
		{
			$('html').niceScroll({
    			cursorcolor: "#1A212C",
    			zindex: '99999',
    			cursorminheight: 60,
    			scrollspeed: 80,
    			cursorwidth: 7,
    			autohidemode: true,
    			background: "#aaa",
    			cursorborder: 'none',
    			cursoropacitymax: .7,
    			cursorborderradius: 0,
    			horizrailenabled: false
			});
		}
		
	});
	
	
	// Photo Divider - Scroll Background Attachment - IE11 
	//==================================================================================
	$(document).ready(function() {
		if (IEVersion() == 11) 
		{
	  		$('.photo_divider').addClass('photo_divider_ie11');
		}
	});
		
	// Photo Item Roll Over 
	//==================================================================================
	$('.photo_item_preview > a').click(function() {
		return false;
	});
	
	// Popup
	//=================================================================================
	$('.popup').magnificPopup({
  		type: 'ajax',
		ajax: {
			settings: {cache:false} 
			// Ajax settings object that will extend default one - http://api.jquery.com/jQuery.ajax/#jQuery-ajax-settings
			// For example:
			// settings: {cache:false, async:false}
		},
		callbacks: {
    		open: function() {
      			// Will fire when this exact popup is opened\
    		},
    		close: function() {
      			// Will fire when popup is closed
				if (IEVersion() != 11 && !device.tablet() && !device.mobile()) 
				{
	  				$('body').css('overflow','hidden');
				}
    		}
  		},
	});
	
	// Gallery - Photo Caption Animation
	//==================================================================================
	$('.photo_item').hover(
		function() {
			$(this).find( ".photo_caption" ).addClass('animated');
		},
		function() {
			$(this).find( ".photo_caption" ).removeClass('animated');
		}
	);
	
	// Gallery - Item
	//==================================================================================
	$('#ourVacation').magnificPopup({
    	items: [
      	{
      	    src: DomainUrl + '/img/we-1.jpg'
      	},
     	{
     	    src: DomainUrl + '/img/we-2.jpg'
      	},
      	{
      	    src: DomainUrl + '/img/we-3.jpg'
      	},
        {
            src: DomainUrl + '/img/we-4.jpg'
        },
        {
            src: DomainUrl + '/img/we-5.jpg'
        },
        {
            src: DomainUrl + '/img/we-6.jpg'
        },
        {
            src: DomainUrl + '/img/we-7.jpg'
        },
        {
            src: DomainUrl + '/img/we-8.jpg'
        },
        {
            src: DomainUrl + '/img/we-9.jpg'
        },
        {
            src: DomainUrl + '/img/we-10.jpg'
        },
        {
            src: DomainUrl + '/img/we-11.jpg'
        },
        {
            src: DomainUrl + '/img/we-12.jpg'
        },
        {
            src: DomainUrl + '/img/we-13.jpg'
        },
        {
            src: DomainUrl + '/img/we-14.jpg'
        },
        {
            src: DomainUrl + '/img/we-15.jpg'
        }
    	],
    	gallery: {
     	 	enabled: true
    	},
    	type: 'image', // this is default type
		callbacks: {
    		open: function() {
      			// Will fire when this exact popup is opened\
    		},
    		close: function() {
      			// Will fire when popup is closed
	  			if (IEVersion() != 11 && !device.tablet() && !device.mobile()) 
				{
	  				$('body').css('overflow','hidden');
				}
    		}
  		},
	});
	
	$('#friendGallery').magnificPopup({
	    items: [
        {
            src: DomainUrl + '/img/friend-9.jpg'
        },
        {
            src: DomainUrl + '/img/friend-10.jpg'
        },
     	{
     	    src: DomainUrl + '/img/friend-1.jpg'
      	},
      	{
      	    src: DomainUrl + '/img/friend-2.jpg'
      	},
      	{
      	    src: DomainUrl + '/img/friend-3.jpg'
      	},
      	{
      	    src: DomainUrl + '/img/friend-4.jpg'
      	},
    	{
	        src: DomainUrl + '/img/friend-0.jpg'
    	},
        {
            src: DomainUrl + '/img/friend-5.jpg'
        },
        {
            src: DomainUrl + '/img/friend-6.jpg'
        },
        {
            src: DomainUrl + '/img/friend-7.jpg'
        },
        {
            src: DomainUrl + '/img/friend-8.jpg'
        }
    	],
    	gallery: {
     	 	enabled: true
    	},
    	type: 'image', // this is default type
		callbacks: {
    		open: function() {
      			// Will fire when this exact popup is opened\
    		},
    		close: function() {
      			// Will fire when popup is closed
	  			if (IEVersion() != 11 && !device.tablet() && !device.mobile()) 
				{
	  				$('body').css('overflow','hidden');
				}
    		}
  		},
	});
	
	$('#familyGallery').magnificPopup({
	    items: [
        {
            src: DomainUrl + '/img/family-0.jpg'
        },
      	{
      	    src: DomainUrl + '/img/family-1.jpg'
      	},
     	{
     	    src: DomainUrl + '/img/family-2.jpg'
      	},
      	{
      	    src: DomainUrl + '/img/family-3.jpg'
      	},
        {
            src: DomainUrl + '/img/family-4.jpg'
        },
        {
            src: DomainUrl + '/img/family-5.jpg'
        },
        {
            src: DomainUrl + '/img/family-6.jpg'
        },
        {
            src: DomainUrl + '/img/family-7.jpg'
        },
        {
            src: DomainUrl + '/img/family-8.jpg'
        },
    	],
    	gallery: {
     	 	enabled: true
    	},
    	type: 'image', // this is default type
		callbacks: {
    		open: function() {
      			// Will fire when this exact popup is opened\
    		},
    		close: function() {
      			// Will fire when popup is closed
	  			if (IEVersion() != 11 && !device.tablet() && !device.mobile()) 
				{
	  				$('body').css('overflow','hidden');
				}
    		}
  		},
	});
	
	$('#category4').magnificPopup({
    	items: [
      	{
        	src: 'images/gallery/gallery_photo10.jpg'
      	},
     	{
        	src: 'images/gallery/gallery_photo11.jpg',
      	},
      	{
        	src: 'images/gallery/gallery_photo12.jpg',
      	}
    	],
    	gallery: {
     	 	enabled: true
    	},
    	type: 'image', // this is default type
		callbacks: {
    		open: function() {
      			// Will fire when this exact popup is opened\
    		},
    		close: function() {
      			// Will fire when popup is closed
	  			if (IEVersion() != 11 && !device.tablet() && !device.mobile()) 
				{
	  				$('body').css('overflow','hidden');
				}
    		}
  		}
	});

	// Gallery - 2
	//==================================================================================
	var $gallery = $('#gallery2');
	// initialize Masonry after all images have loaded  
	$gallery.imagesLoaded( function() {
		$gallery.masonry({
			columnWidth: ".grid_sizer",
			itemSelector: ".masonry_col",
			transitionDuration: "1s",
		});
	});
	
	$('#gallery2').magnificPopup({
 		delegate: '.photo_item_overlay a', // child items selector, by clicking on it popup will open
  		type: 'image',
		gallery: {
          enabled:true
        },
		callbacks: {
    		open: function() {
      			// Will fire when this exact popup is opened
    		},
    		close: function() {
      			// Will fire when popup is closed
	  			if (IEVersion() != 11 && !device.tablet() && !device.mobile()) 
				{
	  				$('body').css('overflow','hidden');
				}
    		}
  		},
	});
	
	// Owl Carousel - Gift Registry
	//==================================================================================
	$(document).ready(function() {
    	$("#registry_logo").owlCarousel({
			items : 4, 
			autoPlay: 2000,
			stopOnHover: true,
			pagination: false
		});
	});

    // Childhood
    //==================================================================================
	var childhood = $('#childhood');
	// initialize Masonry after all images have loaded  
	childhood.imagesLoaded(function () {
	    childhood.masonry({
	        columnWidth: ".grid_sizer_blog",
	        itemSelector: ".masonry_col_blog",
	        transitionDuration: "1s",
	        gutter: 20
	    });
	});

    //  PREWEDDING PHOTO
	//==================================================================================
	var $prewedding = $('#prewedding');
	// initialize Masonry after all images have loaded  
	$prewedding.imagesLoaded(function () {
	    $prewedding.masonry({
			columnWidth: ".grid_sizer_blog",
			itemSelector: ".masonry_col_blog",
			transitionDuration: "1s",
			gutter: 20
		});
	});


	// Magnific
    //==================================================================================
	$('#prewedding, #childhood').magnificPopup({
	    delegate: '.photo_item_wrap a', // child items selector, by clicking on it popup will open
	    type: 'image',
	    closeOnContentClick: false,
	    closeBtnInside: false,
	    mainClass: 'mfp-with-zoom mfp-img-mobile',
	    image: {
	        verticalFit: true,
	        //titleSrc: function (item) {
	        //    return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank">image source</a>';
	        //}
	    },
	    gallery: {
	        enabled: true
	    },
	    zoom: {
	        enabled: true,
	        duration: 300, // don't foget to change the duration also in CSS
	        opener: function (element) {
	            return element.find('img');
	        }
	    }

	});

	$('.zoom-gallery').magnificPopup({
	    delegate: 'a', // child items selector, by clicking on it popup will open
	    type: 'image',
	    closeOnContentClick: false,
	    closeBtnInside: false,
	    mainClass: 'mfp-with-zoom mfp-img-mobile',
	    image: {
	        verticalFit: true,
	        titleSrc: function (item) {
	            return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank">image source</a>';
	        }
	    },
	    gallery: {
	        enabled: false 
	    },
	    zoom: {
	        enabled: true,
	        duration: 300, // don't foget to change the duration also in CSS
	        opener: function (element) {
	            return element.find('img');
	        }
	    }

	});
	
	$(document).ready(function() {
		var a = 0;
	
		// Get some more blocks
		jQuery('#blogmore').click(function(){
			
			$(this).hide();
			$('#loading_more').show();
			a = a + 1;
			jQuery.get('/luv/morephoto', function( data ) {
				// Make jQuery object from HTML string
				var $moreBlocks = $($.parseHTML(data)).filter('*');
				
				$moreBlocks.hide();
				// Append new blocks
				jQuery('#prewedding').append($moreBlocks);
				
				$moreBlocks.imagesLoaded().progress( function( imgLoad, image ) {
    				// get item
    				// image is imagesLoaded class, not <img>, <img> is image.img
    				var $item = $( image.img ).parents( ".masonry_col_blog" );
    				// un-hide item
    				$item.show();
    				// masonry does its thing
    				jQuery('#prewedding').masonry('appended', $item);
  				});
				
				$moreBlocks.imagesLoaded().done(function () {

				    jQuery('#blogmore').hide();
				    $('#loading_more').hide();

					//if (data == "empty")
					//{
					//	jQuery('#blogmore').hide();
					//	$('#loading_more').hide();
					//}
					//else
					//{
					//	$('#loading_more').hide();
					//	$('#blogmore').show();
					//}
					
					if( !device.tablet() && !device.mobile() ) {
						$.waypoints('refresh');
					}
  				});
						
			}); 	
			return false;				
		});
	});
	
	// Gmap
	//==================================================================================
   	jQuery(document).ready(function($) {
        $("#location_map").gMap({
             maptype: google.maps.MapTypeId.ROADMAP, 
             zoom: 13, 
             markers: 
			 	[
			 		{
			 		    latitude: 2.056622,
			 		    longitude: 102.587732,
			 		    html: "<strong>The Wedding - Sin Kee Ting Restaurant (新奇珍)</strong>",
                		popup: true,               
			 		},
                    {
                        latitude: 2.036812,
                        longitude: 102.558491,
                        html: "<strong>The Party - Groom's house</strong>",
                        popup: true,      
                    }
                ], 
             panControl: true, 
             zoomControl: true, 
             mapTypeControl: true, 
             scaleControl: true, 
             streetViewControl: true, 
             scrollwheel: true, 
             //styles: [ { "stylers": [ { "hue": "#00c0b6" }, { "gamma": 1 }, { "saturation": -50 } ] } ], 
             onComplete: function() {
                 // Resize and re-center the map on window resize event
                 var gmap = $("#location_map").data('gmap').gmap;
                 window.onresize = function(){
                     google.maps.event.trigger(gmap, 'resize');
                     $("#location_map").gMap('fixAfterResize');
                 };
            }
        });
    });
	
	// Fix Photo Divider on Chrome and Retina Display
	//==================================================================================
	var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
	
	if (window.devicePixelRatio >= 2 && is_chrome && !device.tablet() && !device.mobile()) {
		// Choose one of the options below:
		
		// 1. Hack for Fixed Photo Divider
		//$(document).scroll(function(){
    		//$(this).find('.photo_divider').hide().show(0);
		//});
		
		// 2.Change Fixed to Scroll Photo Divider
		$('.photo_divider').css("background-attachment","scroll");
	} 
	
	// Style Switcher
	//==================================================================================
	var clicked = 0;
	$('#theme_options').click(function(){
		if (clicked == 0)
		{
			$( "#style_switcher" ).animate({ "left": "0px" }, "fast" );
			clicked = 2;
			return false;
		}
		else
		{
			$( "#style_switcher" ).animate({ "left": "-110px" }, "fast" );
			clicked = 0;
			return false;
		}
	});