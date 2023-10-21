 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });
 
 // Scroll to a Specific Div
 if($('.scroll-to-target').length){
	$(".scroll-to-target").on('click', function() {
		var target = $(this).attr('data-target');
	   // animate
	   $('html, body').animate({
		   scrollTop: $(target).offset().top
		 }, 1500);

	});
}
(function($) {

	$(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            // Show the button when scrolling down, adjust 100 to your preference
            $('.scroll-to-top').fadeIn();
        } else {
            // Hide the button when at the top
            $('.scroll-to-top').fadeOut();
        }
    });

	//PRE LOADING
$(document).ready(function() {
    setTimeout(function() {
        $('#preloader').fadeOut('slow');
    }, 1000); // Delay for 1000 milliseconds (1 second)
});

	"use strict";
	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// Scrollax
   $.Scrollax();


// Burger Menu
var burgerMenu = function() {
    // Toggle the menu when the burger menu icon is clicked
    $('body').on('click', '.js-fh5co-nav-toggle', function(event) {
        event.preventDefault();
        toggleMenu();
    });

    // Close the menu when a menu item is clicked
    $('#ftco-nav ul li a').on('click', function() {
        if ($('#ftco-nav').is(':visible')) {
            toggleMenu();
        }
    });

    function toggleMenu() {
        if ($('#ftco-nav').is(':visible') && $('.js-fh5co-nav-toggle').hasClass('active')) {
            $('.js-fh5co-nav-toggle').removeClass('active');
            // Close the menu here, e.g., by hiding it.
            $('#ftco-nav').hide();
        } else {
            $('.js-fh5co-nav-toggle').addClass('active');
            // Open the menu here, e.g., by showing it.
            $('#ftco-nav').show();
        }
    }
};

burgerMenu();


	var onePageClick = function() {
		
		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
	    event.preventDefault();
		
	    var href = $.attr(this, 'href');
		
	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 70			
	    }, 500, function() {
			
	    	// window.location.hash = href;
	
	    });
		});

	};

	onePageClick();
	

	var carousel = function() {
		$('.carousel-friends').owlCarousel({
			autoplay: true,
			autoHeight: true,
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			dots: true,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 5
				}
			}
		});

		$('.carousel-testimony').owlCarousel({
			autoplay: true,
			autoHeight: true,
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			touchDrag: true,  // Allow touch interactions
 	mouseDrag: false, 
			dots: true,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});

	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

//   var bgVideo = function() {
// 		$('.player').mb_YTPlayer();
// 	};
// 	bgVideo();


	function makeTimer() {

		var endTime = new Date("24 november 2023 8:43:00 GMT+05:30");			
		endTime = (Date.parse(endTime) / 1000);

		var now = new Date();
		now = (Date.parse(now) / 1000);

		var timeLeft = endTime - now;

		var days = Math.floor(timeLeft / 86400); 
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
		var sec = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (sec < "10") { sec = "0" + sec; }

		$("#days").html(days + "<span>Days</span>");
		$("#hours").html(hours + "<span>Hours</span>");
		$("#minutes").html(minutes + "<span>Minutes</span>");
		$("#sec").html(sec + "<span>sec</span>");		

}

setInterval(function() { makeTimer(); }, 1000);

})(jQuery);

// Family Slider Js
$('.wd_family_slider .owl-carousel').owlCarousel({
	loop:true,
	margin:10,
	nav:true,
	touchDrag: true,  // Allow touch interactions
 	mouseDrag: false, 
	navText:["<i class='fa fa-angle-left'></i>" , "<i class='fa fa-angle-right'></i>"],
	responsive:{
		0:{
			items:1
		},
		600:{
			items:2
		},
		1000:{
			items:4
		}
	}
});
// gallery
$('.portfolio-menu ul li').click(function(){
	$('.portfolio-menu ul li').removeClass('active');
	$(this).addClass('active');
	
	var selector = $(this).attr('data-filter');
	$('.portfolio-item').isotope({
		filter:selector
	});
	return  false;
});
$(document).ready(function() {
var popup_btn = $('.popup-btn');
popup_btn.magnificPopup({
type : 'image',
gallery : {
	enabled : true
}
});
});
