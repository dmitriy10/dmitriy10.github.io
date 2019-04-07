
$.fn.accordion = function(options) {

	// Vars
	var param = $.extend({
		speed: 300, 
	}, options);

	$selector = this;

	// Controllers 
	function accordionController(target) {
		$(target).show(param.speed);
	}
	function accordionContentController(targetTwo) {
		$(targetTwo).addClass('active');
	}
	function accordionControllerDel(target) {
		$(target).hide(param.speed);
	}
	function accordionContentControllerDel(targetTwo) {
		$(targetTwo).removeClass('active');
	}
	// Init
	// $selector.find('.accordion').css('transition', 'all ' + param.speed + 'ms ' + param.timingFunction);

	// Actions
	$('[data-accordion]').click(function() {
		var target = $(this).attr('data-accordion');
		var targetTwo = $(this);
		targetTest = $(this);

		if ( $(targetTwo).hasClass("active") ) {
			$(targetTwo).parent().children().removeClass('active');
			$('.accordion-content').hide(param.speed);
			accordionContentControllerDel(targetTwo);
			accordionControllerDel(target);
		}
		else {
			$(targetTwo).parent().children().removeClass('active');
			$('.accordion-content').hide(param.speed);
			accordionController(target);
			accordionContentController(targetTwo);
		}
	});

}
