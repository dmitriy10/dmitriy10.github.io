// $.fn.moving_box_main = function(options) {
    // Vars
    // var $selector = this;

    var action = false;

    var startPositionX = 0;
    var endPositionX = 0;
    var distanceX = 0;
    var currentPositionX = 0;

    var startPositionY = 0;
    var endPositionY = 0;
    var distanceY = 0;
    var currentPositionY = 0;

    // var maxDistance = 300;

    // Controllers

    // function boxControllerX(valueX) {
    //     // $selector.find('.menu-bar').css('transform', 'translateX(' + value + 'px)');
    //     // $selector.find('.overlay').css('opacity', (1 / maxDistance * value));
    //     $selector.css('transform', 'translateX(' + valueX + 'px)');
    // }
    // function boxControllerY(valueY) {
    //     $selector.css('transform', 'translateY(' + valueY + 'px)');
    // }
    function translate3d(x, y) {
        $(thisBox).css('transform', 'translate3d(' + x + 'px, ' + y + 'px, ' + 0 + ')');
        // $selector.css('transform', 'translate3d(' + x + 'px, ' + y + 'px, ' + 0 + ')');
        console.log(x,y);
    }


    // Innit

    // Actions
    $('.moving-box').mousedown(function(e) {
        thisBox = this;
        startPositionX = e.pageX;
        startPositionY = e.pageY;
        action = true;
    });
    
    $(window).mouseup(function(e) {
        action = false;
        currentPositionX = distanceX;
        currentPositionY = distanceY;
        distanceX = 0;
        distanceY = 0;
    });
    
    $(window).mousemove(function(e) {
        if (action) {
            endPositionX = e.pageX;
            endPositionY = e.pageY;
            distanceX = currentPositionX + (endPositionX - startPositionX);
            distanceY = currentPositionY + (endPositionY - startPositionY);


            // boxControllerX(distanceX);
            // boxControllerY(distanceY);
            translate3d(distanceX, distanceY);
            distanceX = 0;
            distanceY = 0;
        }
    });
// }
// $('.box').click(function() {
//     thisbox = this;
// });



// $('.btn').click(function() {
//     $('.btn').attr({"id":"open"});
//     $('.btn').toggleClass('open');
// });


// $('.box').click(function() {
//     var $selector = this;
//     // $selector.css('transform', 'translateY(' + 100 + 'px)');
//     // $('.box').css('transform', 'matrix(' + 0 + ',' + 0 + ',' + 0 + ',' + 0  + ',' + 0.1 + ',' + 0.1 + ')');
//     // $('.box').css('transform', 'translateY(' + 100 + 'px)');

//     // $('.box').css('transform', 'translate3d(' + 10 + 'px, ' + 10 + 'px, ' + 0 + ')');
//     // console.log('translate3d(' + 10 + 'px, ' + 10 + 'px, ' + 0 + ')');
//     // transform: translate3d(10px, 20px, -200px);
// });
