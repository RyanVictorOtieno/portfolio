$(document).ready(function(){
	$(window).scroll(function(){
		if(this.scrollY > 20){

			$('.navbar').addClass("sticky");

		} else{
			$('.navbar').removeClass("sticky");
		}

		if (this.scrollY  > 500){
			$('.sroll-up-btn').addClass("show");
		}else{
			$('.sroll-up-btn').removeClass("show");
		}
	});

	// Slide up script
	$('.sroll-up-btn').click(function(){
		$('html').animate({scrollTop: 0});
	});
	
	// Toggle menu/navbar function
	$('.menu-btn').click(function(){
		$('.navbar .menu').toggleClass("active");
		$('.menu-btn i').toggleClass("active");
	});

	// Typing animation script
	var typed = new Typed(".typing", {
		strings: ["Developer", "UX/UI Designer", "Freelancer", "Blogger"],
		typedSpeed:0, 
		backSpeed: 60,
		loop:true
	});
	var typed = new Typed(".typing-2", {
		strings: ["Developer", "UX/UI Designer", "Freelancer", "Blooger"],
		typedSpeed:0, 
		backSpeed: 60,
		loop:true
	});

	// Owl carousel script
	$('.carousel').owlCarousel({ 
		margin : 20,
		loop: true,
		autoplayTimeOut:2000,
		autoplayHoverPause: true,
		responsive: {
				0:{
					items: 1,
					nav: false
				},

				600:{
					items: 2,
					nav: false
				},
				1000:{
					items: 3,
					nav: false
				}
			}
	});
});