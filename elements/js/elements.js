
// Scroll button
$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#top').fadeIn();
        } else {
            $('#top').fadeOut();
        }
    });

    $('#top').click(function() {
        $('body,html').animate( {
            scrollTop:0
        },800);
    });
});


//Accordion-menu

speed = 250;



//         $(this).removeClass('change'); // del black color for active text-menu  
//         $(this).parent().removeClass('change'); // del white background-color for active menu 


//         $(this).parent().addClass('change'); // add white background-color for active menu  
//         $(this).addClass('change'); // add black color for active text-menu  

//         // $(this).parent().siblings().removeClass('change');  // del black color for other elements menu items
//         // $(this).parent().siblings().children().removeClass('change');



        
// });
$('[data-menu]').click(function() {
    if ( $('[data-menu]').hasClass("change") ) {
        $('.menu').children().children().children().hide(speed); 
    }
    
    if ( $(this).parent().children().hasClass("change") ) {
        $(this).parent().children().children().hide(speed); // hide menu items
        $(this).parent().children().removeClass('change'); // del black color for active menu
        $(this).parent().removeClass('change'); // del white background-color for active menu  
    }
    else {
        // $('.menu').children().children().children().hide(speed);  // hide other elements menu (children)
        // $(this).siblings().children().children().hide(speed);
        $(this).parent().siblings().children().removeClass('change'); // del black color for other elements menu items (children)
        $(this).parent().siblings().removeClass('change'); // del white background-color for other menu items (parents)
        $(this).parent().children().show(speed); // show menu items (children)
        $(this).parent().children().children().show(speed); // show menu items (children)
        $(this).parent().children().addClass('change'); // add black color for active menu
        $(this).parent().addClass('change'); // add white background-color for active menu  
    }
});

$('.menu-mobile-container').click(function() {
    $(this).children().toggleClass('change'); // bar 1-3 in menu-mobile-container
    $('.menu').toggleClass('change'); // menu show/hidde
});






$(document).ready(function() {
	
	// $("body").css("display", "none");

    // $("body").fadeIn(1000);
    
	$('a.transition').click(function(event){
		event.preventDefault();
		linkLocation = this.href;
        $("body").fadeOut(1000, redirectPage);	
	});
		
	function redirectPage() {
        window.location = linkLocation;
	}
});



$bg = $('.parallax');
$(window).scroll(function() {
    var delta = $(window).scrollTop();
    $bg.css({
        'top':  delta / 6,
    });
});



