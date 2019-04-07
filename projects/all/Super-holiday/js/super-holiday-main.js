
    // $('.link-wrapper a').click(function () {
    //     $('.link-wrapper a').children().removeClass('active');
    //     $(this).children().addClass('active');
    //     elementClick = $(this).attr("href");
    //     destination = $(elementClick).offset().top;
    //     $("body,html").animate({scrollTop: destination}, 800);
    // });




    $(document).ready(function () {
        $(document).on("scroll", onScroll);
        $('.link-wrapper a').click(function(e){
            e.preventDefault();
            $(document).off("scroll");
            $('.link-wrapper a').children().removeClass('active');
            $(this).children().addClass('active');
            elementClick = $(this).attr("href");
            destination = $(elementClick).offset().top;
            $("body,html").animate({scrollTop: destination}, {duration: 'slow',easing: 'easeOutElastic'}, 800);
            
            var hash = $(this).attr("href");
            var target = $(hash);
            // $("html, body").animate({
            //     scrollTop: target.offset().top 
            // }, 500, function(){
            //     window.location.hash = hash;
            //     $(document).on("scroll", onScroll);
            // });
        });
    });
    function onScroll(){
        var scroll_top = $(document).scrollTop();
        $('.link-wrapper a').each(function(){
            var hash = $(this).attr("href");
            var target = $(hash);
            if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
                $('.link-wrapper a').children().removeClass('active');
                $(this).children().addClass('active');
            } else {
                $(this).children().removeClass('active');

            }
        });
    }
    // $(document).ready(function () {
    //     $(document).on("scroll", onScroll);
    //     $("li a").click(function(e){
    //         e.preventDefault();
    //         $(document).off("scroll");
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