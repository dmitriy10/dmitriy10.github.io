$.fn.modal = function(options) {

	// Vars
	var params = $.extend({
		speed: 300, 
		timingFunction: 'ease'
	}, options);

	$selector = this;

	// Controllers
	function modalController(target) {
		if (target == 'close') {
			$selector.removeClass('active');
			$selector.find('.modal').removeClass('active');
			$selector.find('.overlay').removeClass('active');
			// $selector.siblings().removeClass('active');
		} else {
			$selector.find('.modal').removeClass('active');
			$selector.addClass('active');
			$selector.children('.modal' + target).addClass('active');
			$selector.children('.overlay').addClass('active');
			$selector.siblings().removeClass('active');
		}
	}

	// Init
	$selector.find('.modal').css('transition', 'all ' + params.speed + 'ms ' + params.timingFunction);

	// Actions
	$('[data-modal]').click(function() {
		var target = $(this).attr('data-modal');
		modalController(target);
	});

	$('.overlay').click(function() {
		$selector.removeClass('active');
		$selector.find('.modal').removeClass('active');
		$selector.find('.overlay').removeClass('active');
	});


}




$(this).siblings().children().addClass('hidden');
$(this).siblings().children().removeClass('show');
if ( $(this).children().hasClass("show") ) {
	$(this).children().removeClass('show');
	$(this).children().addClass('hidden');
}
else {
	$(this).children().removeClass('hidden');
	$(this).children().addClass('show');
}