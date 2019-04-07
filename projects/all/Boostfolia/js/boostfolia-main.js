$(document).ready(function(){
    //menu
	$('#menu-mobile').click(function(){
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
    });
    //menu
    $('.menu li:first-child').hover(function(){
        $('#menu-mobile span').toggleClass('newActive');
    });
    //scroll on click
    $('.link-wrapper a').click(function(e){
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;

        $('#menu-mobile').removeClass('active');
        $('.menu').removeClass('active');

        var hash = $(this).attr("href");
        var target = $(hash);
        $("html, body").animate({
            scrollTop: target.offset().top 
        }, 500, function() {
            window.location.hash = hash;
        });
    });
    //left-bar-video
    $('#left-bar-video-btn').click(function(e) {
        e.preventDefault();
        $('.left-bar-video').toggleClass('active');
        $(this).toggleClass('active');
    });
    //right-bar-video
    $('#right-bar-video-btn').click(function(e) {
        e.preventDefault();
        $('.right-bar-video').addClass('active');
        $('.overlay').addClass('active');
        // $(this).addClass('active');
    });
    //right-bar-video
    $('.right-bar-video').click(function(e) {
        e.preventDefault();
        $('.right-bar-video').removeClass('active');
        $('.overlay').removeClass('active');
    });
    //Tab-bar 
    $('[data-tab]').click(function() {
        var target = $(this).attr('data-tab');
        var $dataTarget = $("[data-target$=" + target + "]");
        $('[data-tab]').removeClass('active');
        $('.card').removeClass('active');
        $('.tab').removeClass('active');
        $(this).addClass('active');
        $dataTarget.addClass('active');
    });
    //scroll to top on click
    $('.logo-footer').click(function() {
        $('body,html').animate( {
            scrollTop:0
        },2000);
    });
    //data-img effects
    $('[data-img]').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('data-img');
        $('img' + target).addClass('active');
        $('.overlay').addClass('active');
    });
    //img effects
    $('.overlay').click(function() {
        $('img').removeClass('active');
        $('.overlay').removeClass('active');
    });
    //e.preventDefault for btns
    $('.btn').click(function(e) {
        e.preventDefault();
    });
    //e.preventDefault for links
    $('.our-works-menu li a').click(function(e) {
        e.preventDefault();
    });
    //show map
    $('.show-map').click(function(e) {
        e.preventDefault();
        $('.map').toggleClass('active');
        $(this).toggleClass('active');
    });
});

//ISOTOPE
var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    //sort
    // getSortData: {
    //     name: '.name',
    //     symbol: '.symbol',
    // }
});
  //sort
// $('[data-sort-value]').click(function() {
//     var sortValue = $(this).attr('data-sort-value');
//     $grid.isotope({ sortBy: sortValue });
// });
  
var filterFns = {};
$('[data-sort-value]').click(function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
});








// $(document).ready(function() {
    // new ScrollSpy('#js-scrollspy', {
    //     nav: '.js-scrollspy-nav > ul > li > a',
    //     className: 'is-inview',
    //     callback: function () {
    //         var hash = $('.js-scrollspy-nav .is-inview').attr('href');
    //         if (hash) {
    //             window.location.hash = hash;
    //         }
    //     }
    // });


// });

