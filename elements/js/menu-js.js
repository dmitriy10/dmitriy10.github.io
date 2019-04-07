$('.btn-menu').click(function() {
	if ( $('.drop-menu').hasClass("show") ) {
		$('.drop-menu').removeClass('show');
		$('.drop-menu').addClass('hidden');
    }
    else {
		$('.drop-menu').removeClass('hidden');
        $('.drop-menu').addClass('show');
        $('.drop').siblings().children().removeClass('show');
    }
});

$('.drop').click(function() {
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
});


// $('.drop-new').click(function() {
//     $(this).siblings().children().addClass('hidden');
//     $(this).siblings().children().removeClass('show');
// 	if ( $(this).hasClass("show") ) {
// 		$(this).removeClass('show');
//         $(this).addClass('hidden');
//     }
//     else {
// 		$(this).children().removeClass('hidden');
//         $(this).children().addClass('show');
//     }
// });
