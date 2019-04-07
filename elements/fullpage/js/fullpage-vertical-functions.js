
function getHash() {
    return window.location.hash.toString().slice(1);
}
function setHash(value) {
    window.location.hash = value;
}
function fullpageInit() {
    var $siteHeader = $('.site-header-fullpage-vertical');
    $('.fullpage-container').fullpage({
        navigation: true,

        afterLoad: function(anchor) {
            $('.section[data-anchor="' + anchor + '"]').find('.content').addClass('active');
            $siteHeader.removeClass('collapsed');
        },

        onLeave: function(prevIndex, nextIndex) {
            $('.section[data-index="' + prevIndex + '"]').find('.content').removeClass('active');
            $siteHeader.addClass('collapsed');
            setTimeout(function() {
                var hasClassSelector = $('.section[data-index="' + nextIndex + '"]');
                if ( hasClassSelector.hasClass('blue') ) {
                    $siteHeader.addClass('blue');
                } else {
                    $siteHeader.removeClass('blue');
                }

                if ( hasClassSelector.hasClass('red') ) {
                    $siteHeader.addClass('red');
                } else {
                    $siteHeader.removeClass('red');
                }

                if ( hasClassSelector.hasClass('yellow') ) {
                    $siteHeader.addClass('yellow');
                } else {
                    $siteHeader.removeClass('yellow');
                }

                if ( hasClassSelector.hasClass('green') ) {
                    $siteHeader.addClass('green');
                } else {
                    $siteHeader.removeClass('green');
                }
            }, 200);
        }
    });

    $('.btn.move-down').click(function() {
        fpApi.moveSectionDown();
    });
    $('.btn.move-top').click(function() {
        fpApi.moveSectionUp();
    });

    $('[data-menu]').click(function() {
        fpApi.moveTo($(this).attr('data-menu'));
    });
}
function scrollTo(selector) {
    $('body, html').animate({
        scrollTop: $('[data-anchor="' + selector + '"]').offset().top - 45
    }, 500);
    setHash(selector);
}
// function onScroll(){
// 	var scroll_top = $(document).scrollTop();
// 	$(".section").each(function(){
// 		var hash = $(this).attr("href");
        
//         // var hash = getHash();
//         // window.location.hash = hash;
//         // console.log(hash);
//         var target = $(hash);
//         // alert(getHash());
// 		if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
//             // window.location.hash = hash;
//             console.log(hash);
// 		} else {
// 			alert('false');
// 		}
// 	});
// }


