var fpApi = $.fn.fullpage;
var windowWidth = $(window).width();
var $siteHeader = $('.site-header-fullpage-vertical');

// anchor = getHash();
$(function() {
    if (windowWidth >= 900) fullpageInit();
    scrollTo(getHash());
	// $(document).on("scroll", onScroll);

    $('.menu-mobile-container-fullpage-vertical').click(function() {
        $(this).children().toggleClass('change');
        $(this).toggleClass('change');
        $('.menu-fullpage-vertical').toggleClass('change');
    });
    
    $('[data-menu]').click(function() {
        var target = $(this).attr('data-menu');
        scrollTo(target);

        $('.menu-mobile-container-fullpage-vertical').children().removeClass('change');
        $('.menu-mobile-container-fullpage-vertical').removeClass('change');
        $('.menu-fullpage-vertical').removeClass('change');
        $('.menu-fullpage-vertical').children().removeClass('change');
        $('.menu-fullpage-vertical').children().children().removeClass('change');
    });

    function showContent() {
        $('.section[data-anchor]').find('.content').addClass('active');
        $siteHeader.removeClass('collapsed');
    };
    showContent();
});

$('body').scrollspy({ target: '#navbar-example' });
$('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')
  })