$(document).ready(function(){

	// animation on scroll
	var animateHTML = function() {
		var elems;
		var windowHeight;
		function init() {
			elems = document.querySelectorAll('.hidden');
			windowHeight = window.innerHeight;
			addEventHandlers();
			checkPosition();
		}
		function addEventHandlers() {
			window.addEventListener('scroll', checkPosition);
			window.addEventListener('resize', init);
		}
		function checkPosition() {
			for (var i = 0; i < elems.length; i++) {
				var positionFromTop = elems[i].getBoundingClientRect().top;
				if (positionFromTop - windowHeight <= 0) {
					elems[i].className = elems[i].className.replace(
					'hidden',
					'fade-in-element'
					);
				}
			}
		}
		return {
			init: init
		};
	};
	animateHTML().init();

	$('.enter').on('click',function(){
		$('.enter-section, .enter-inside').addClass('active')
	});
	$('.register').on('click',function(){
		$('.register-section, .register-inside').addClass('active');
		// $('.enter-section').removeClass('active')
	});
	$('.reset').on('click',function(){
		$('.reset-section, .reset-inside').addClass('active');
		// $('.enter-section').removeClass('active')
	});
	$('main').on('click',function(){
		$('.reset-section, .reset-inside, .enter-section, .register-section, .enter-inside, .register-inside').removeClass('active')
	});

	// materialize select and datepicker
	$('select').material_select();
	$('.datepicker').pickadate({
      	selectMonths: true,
      	selectYears: 15
    });

	var owl = $('.hourly-forecast-slider .owl-carousel');
	owl.owlCarousel({
	    loop:true,
	    nav:true,
	    navText: ['<img src="assets/img/arrow.svg" alt="arrow">','<img src="assets/img/arrow.svg" alt="arrow" style="transform: rotate(180deg)">'],
	    dots: false,
	    margin:0,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },            
	        960:{
	            items:5
	        },
	        1200:{
	            items:7
	        }
	    }
	});
	owl.on('mousewheel', '.owl-stage', function (e) {
	    if (e.originalEvent.deltaY>0) {
	        owl.trigger('next.owl');
	    } else {
	        owl.trigger('prev.owl');
	    }
	    e.preventDefault();
	});
});