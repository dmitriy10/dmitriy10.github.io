
$('[data-accordion2]').click(function() {
	var target = $(this).attr('data-accordion2');
	// $('[data-accordion2]').removeClass('active');
	// $(this).toggleClass('active');
	// $('.accordion2-content' + target).slideToggle(300);
	if ($(this).hasClass('active')) {

		$('[data-accordion2]').removeClass('active');
		$('.accordion2-content').slideUp();

	} else {

		$('.accordion2-content').slideUp();
		$('[data-accordion2]').removeClass('active');

		$(this).addClass('active');
		$('.accordion2-content' + target).slideDown(300);
	}
});






  