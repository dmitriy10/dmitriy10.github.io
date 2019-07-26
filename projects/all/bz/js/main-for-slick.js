
// SLIDER JQuery
$('.slider').slick({
	autoplay: false,
	autoplaySpeed: 3000,
	slidesToShow: 5,
	slidesToScroll: 5,
	dots: false,
	arrows: false,
	fade: false,
	pauseOnHover: true,
	responsive: [
		{
			breakpoint: 1800,
			settings: {
			  slidesToShow: 4,
			  slidesToScroll: 4,
			}
		},
		{
			breakpoint: 1350,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 3,
			}
		},
		{
			breakpoint: 1000,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2
			}
		},
		{
			breakpoint: 850,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  centerMode: true,
			  centerPadding: '200px',
			}
		},
		{
			breakpoint: 700,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  centerMode: true,
			  centerPadding: '50px',
			}
		},
		{
			breakpoint: 450,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  centerMode: true,
			  centerPadding: '0',
			}
		}
	]
});

