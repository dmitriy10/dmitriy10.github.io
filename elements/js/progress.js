$.fn.progress = function(options) {

	// Vars
	var param = $.extend({
		'value': 0
	}, options);

	var $selector = this;

	// Controllers

	// Init
	if (!$selector.html().length) {
		$selector.html('<div class="progress">' +
							'<div class="bar">' +
								'<div class="active-bar"></div>' +
							'</div>' +
						'</div>' +
						'<div class="value"></div>');
	}

	if (param.value <= 0) 		param.value = 0;
	else if (param.value >= 100)  param.value = 100;
	
	if (param.value <= 0 || param.value >= 100) console.log('Incorect value of [progress]');

	$selector.find('.active-bar').css('width', param.value + '%');
	$selector.find('.value').html(param.value + '%');

	// Actions

}









