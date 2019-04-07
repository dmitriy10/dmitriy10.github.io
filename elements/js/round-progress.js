$.fn.progress = function(options) {

	// Vars
	var param = $.extend({
		'value': 0
	}, options);

	var $selector = this;

	// Controllers

	// Init
	if (!$selector.html().length) {
		$selector.html('<div class="left-bar-rounded-progress"></div>'+
						'<div class="right-bar-rounded-progress"></div>'+
						'<div class="mask-rounded-progress"></div>'+
						'<div class="value">80%</div>');
	}

	if (param.value <= 0) {
		$selector.find('.left-bar-rounded-progress').css('transform', 'rotate(0deg)');
		$selector.find('.value').html('0%');
	} else if (param.value >= 100) {
		$selector.find('.left-bar-rounded-progress').css('transform', 'rotate(360deg)');
		$selector.find('.value').html('100%');
	} else {
		if (param.value >= 50) {
			$selector.find('.mask-rounded-progress').css('opacity', '0');
			$selector.find('.right-bar-rounded-progress').css('opacity', '1');
		} else {
			$selector.find('.mask-rounded-progress').css('opacity', '1');
			$selector.find('.right-bar-rounded-progress').css('opacity', '0');
		}
		$selector.find('.left-bar-rounded-progress').css('transform', 'rotate(' + (360 / 100 * param.value) + 'deg)');
		$selector.find('.value').html(param.value + '%');
	}

	// Actions

}