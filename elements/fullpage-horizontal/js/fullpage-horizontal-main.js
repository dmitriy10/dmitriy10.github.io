var fpApi = $.fn.fullpage;

$(function() {
    var $siteHeader = $('.site-header-fullpage-horizontal');
    $('.fullpage-container').fullpage({
        controlArrows: false,
        lockAnchors: true,
        afterRender: function() {
            var slideIndex = parseFloat($('.slide[data-anchor="' + getHash() + '"]').attr('data-index')) - 1;

            fpApi.moveTo(1, slideIndex);
        },
        afterSlideLoad: function(nun, sectionNum, slideAnchor, slideNum) {

            $('.slide[data-anchor="' + slideAnchor + '"]').find('.content').addClass('active');

            setHash(slideAnchor);
            $siteHeader.removeClass('collapsed');
        },
        onSlideLeave: function(nun, sectionNum, beforeSlideNum, direction, origin) {
            $('.slide[data-index="' + (beforeSlideNum + 1) + '"]').find('.content').removeClass('active');

            $siteHeader.addClass('collapsed');

            setTimeout(function() {
                var hasClassSelector = $('.slide[data-index="' + (origin + 1) + '"]');
                // alert($sectionNum);
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

    $('.btn.move-right').click(function() {
        fpApi.moveSlideRight();
    });
    $('.btn.move-left').click(function() {
        fpApi.moveSlideLeft();
    });

    $('[data-menu]').click(function() {
        var anchor = $(this).attr('data-menu');
        var slideIndex = parseFloat($('.slide[data-anchor="' + anchor + '"]').attr('data-index')) - 1;
        fpApi.moveTo(1, slideIndex);
    });

});


$('.menu-mobile-container-fullpage-horizontal').click(function() {
    $(this).children().toggleClass('change');
    $(this).toggleClass('change');
    $('.menu-fullpage-horizontal').toggleClass('change');
});
$('[data-menu]').click(function() {
    $('.menu-mobile-container-fullpage-horizontal').children().removeClass('change');
    $('.menu-mobile-container-fullpage-horizontal').removeClass('change');
    $('.menu-fullpage-horizontal').removeClass('change');
});