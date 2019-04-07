
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
document.querySelector('.top').onclick = function() {
    scrollToTop(300);
};
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

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
$('a.transition').click(function(event){
    event.preventDefault();
    linkLocation = this.href;
    lines();
    setTimeout(linesRemove, 5700);
});
function lines() {
    let lines = document.querySelectorAll('.line');
    for (var i = 0, len = lines.length; i < len; i++) {
        lines[i].classList.add('active');
    }
    setTimeout(redirectPage, 5700);
};
function linesRemove() {
    let lines = document.querySelectorAll('.line');
    for (var i = 0, len = lines.length; i < len; i++) {
        lines[i].classList.remove('active');
    }
}
function redirectPage() {
    window.location = linkLocation;
}
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// MENU
speed = 250;
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
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX








