
window.addEventListener('DOMContentLoaded', function() {
    let btns = document.querySelectorAll(".about-btn");
    for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function(event){
            let targetClasslist = event.target.classList;
            let tabAttribute = event.target.getAttribute('data-tab');
            let target = event.target; 
            let dataTargets = document.querySelectorAll('[data-target=' + tabAttribute + ']');
            let allBtns = document.querySelectorAll('.about-btn');
            let allLists = document.querySelectorAll('.list');
            let allProjectWrappers = document.querySelectorAll('.project-wrapper');
            if (targetClasslist.contains('active')) {
                // REMOVE CLASSES
                // for all btns remove class active
                for (var i = 0, len = allBtns.length; i < len; i++) {
                    allBtns[i].classList.remove('active');
                }
                // for all lists remove class active
                for (var i = 0, len = allLists.length; i < len; i++) {
                    allLists[i].classList.remove('active');
                }
                // for all project-wrappers remove class active
                for (var i = 0, len = allProjectWrappers.length; i < len; i++) {
                    allProjectWrappers[i].classList.remove('active');
                }
            } else {
                // REMOVE CLASSES
                // for all btns remove class active
                for (var i = 0, len = allBtns.length; i < len; i++) {
                    allBtns[i].classList.remove('active');
                }
                // for all lists remove class active
                for (var i = 0, len = allLists.length; i < len; i++) {
                    allLists[i].classList.remove('active');
                }
                // for all project-wrappers remove class active
                for (var i = 0, len = allProjectWrappers.length; i < len; i++) {
                    allProjectWrappers[i].classList.remove('active');
                }
                // ADD CLASSES
                // for this btn add class active
                target.classList.add('active');
                // for all targets with the same tab attribute add class active
                for (var i = 0, len = dataTargets.length; i < len; i++) {
                    dataTargets[i].classList.add('active');
                }
            }
        };
    }
});
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// To top
// document.querySelector('.top').onclick = function() {
//     scrollToTop(300);
// };

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
function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
            window.scrollBy( 0, scrollStep );
        }
        else clearInterval(scrollInterval); 
    },15);
}
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX








