

// $('.slider').slick({
// 	// arrows: false,
// 	dots: true,
// 	autoplay: true,
// 	// asNavFor: '.slider'
// });




$('.slider').slick({
	autoplay: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: false,
	arrows: true,
	fade: false,
	asNavFor: '.slider-x'
  });
  $('.slider-x').slick({
	// autoplay: true,
	arrows: false,
	slidesToShow: 3,
	slidesToScroll: 3,
	centerMode: true,
  focusOnSelect: true,
	asNavFor: '.slider',
  });
		  

