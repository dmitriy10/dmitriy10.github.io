



// $(document).ready(function () {
//     $(document).on("scroll", onScroll);
//     $('.link-wrapper a').click(function(e){
//         e.preventDefault();
//         $(document).off("scroll");
//         elementClick = $(this).attr("href");
//         destination = $(elementClick).offset().top;

//         var hash = $(this).attr("href");
//         var target = $(hash);
//         $("html, body").animate({
//             scrollTop: target.offset().top 
//         }, 500, function(){
//             window.location.hash = hash;
//             $(document).on("scroll", onScroll);
//         });
//     });
// });

// function onScroll(){
//     var scroll_top = $(document).scrollTop();
//     $('.link-wrapper a').each(function(){
//         var hash = $(this).attr("href");
//         var target = $(hash);
//         if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
// 			window.location.hash = hash;
//         }
//     });
// }

// $('body').scrollspy({target:'#navbar-example'});



$(document).ready(function() {
    // $('body').scrollspy({target:'#myScrollspy'});
    
    // $('#myScrollspy').on('activate.bs.scrollspy', function () {
    //     console.log('some')
    // });

    // $('.js-scrollspy-nav').find('a').preventDefault();



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

    $('#to-top').click(function() {
        $('body,html').animate( {
            scrollTop:0
        },2000);
    });
    
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
    
    $('[data-tab]').click(function() {
        var target = $(this).attr('data-tab');
        $('.tab').removeClass('active');
        $('.tab-bar').removeClass('active');
        $('.tab' + target).addClass('active');
        $('.tab-bar' + target).addClass('active');
    });
    
    $('[data-stab]').click(function() {
        var target = $(this).attr('data-stab');

        $('.img-wrapper').removeClass('active');
        $(this).addClass('active');

        $('.text-wrapper').removeClass('active');
        $('.text-wrapper' + target).addClass('active');
    });





    $('.link-wrapper a').click(function(e){
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;

        $('.menu-mobile-container').children().removeClass('active'); 
        $('.menu').removeClass('active'); 
        
        var hash = $(this).attr("href");
        var target = $(hash);
        $("html, body").animate({
            scrollTop: target.offset().top 
        }, 500, function() {
            window.location.hash = hash;
        });
    });
});

