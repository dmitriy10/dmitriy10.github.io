


$('.card-wrap').click(function() {


    $(this).siblings('.card-wrap').toggle();
    $(this).toggleClass('front');
    $(this).toggleClass('back');



});

