

// $('.slider').slick({
// 	// arrows: false,
// 	dots: true,
// 	autoplay: true,
// 	// asNavFor: '.slider'
// });

$('.center').slick({
		centerMode: true,
		slidesToShow: 1,
});


$('.slider').slick({
	autoplay: true,
	autoplaySpeed: 3000,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: false,
	arrows: true,
	fade: false,
	pauseOnHover: true,
	responsive: [
		{
		  breakpoint: 800,
		  settings: {
			arrows: false,
		  }
		},
	]
});

		  

$('.small-slider').slick({
	autoplay: true,
	autoplaySpeed: 3000,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: false,
	arrows: true,
	fade: false,
	pauseOnHover: true,
	responsive: [
		{
		  breakpoint: 800,
		  settings: {
			arrows: false,
		  }
		},
	]
});
