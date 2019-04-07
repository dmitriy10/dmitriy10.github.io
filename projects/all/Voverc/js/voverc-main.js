
// $('#to-top').click(function() {
//     $('body,html').animate( {
//         scrollTop:0
//     },2000);
// });

$('.menu-mobile-container').click(function() {
    if ( $('.menu').hasClass("active") ) {
        $('.menu').removeClass('active'); 
        $('.menu').hide(800); 
        $(this).children().removeClass('active'); 
    }
    else {
        $('.menu').addClass('active'); 
        $('.menu').show(800); 
        $(this).children().addClass('active'); 
    }
});

// $('[data-tab]').click(function() {
// 	var target = $(this).attr('data-tab');
//     $('.tab').removeClass('active');
//     $('.tab-bar').removeClass('active');
//     $('.tab' + target).addClass('active');
//     $('.tab-bar' + target).addClass('active');
// });




// $(document).ready(function() {
//     new ScrollSpy('#js-scrollspy', {
//         nav: '.js-scrollspy-nav > ul > li > a',
//         className: 'is-inview',
//         callback: function () {
//             var hash = $('.js-scrollspy-nav .is-inview').attr('href');
//             if (hash) {
//                 window.location.hash = hash;
//             }
//         }
//     });

//     $('.link-wrapper a').click(function(e){
//         e.preventDefault();
//         elementClick = $(this).attr("href");
//         destination = $(elementClick).offset().top;

//         $('.menu-mobile-container').children().removeClass('active'); 
//         $('.menu').removeClass('active'); 
        
//         var hash = $(this).attr("href");
//         var target = $(hash);
//         $("html, body").animate({
//             scrollTop: target.offset().top 
//         }, 500, function() {
//             window.location.hash = hash;
//         });
//     });
// });



