function mediaListener(Wwidth) {
    if (Wwidth.matches) {
        document.querySelectorAll('[data-menu]').forEach(el => {
            el.addEventListener('click', () => {
                const id = el.getAttribute('data-menu');
                document.querySelector(id).classList.toggle('active');
            });
        });
        document.querySelector('.menu-mobile-container').addEventListener('click',(e) => {
            if (e.target.classList.contains('menu-mobile-container')) {
                for(var i = 0; i < e.target.children.length; i++) {
                    e.target.children[i].classList.toggle('show');
                }
                document.querySelector('.menu').classList.toggle('show');
            } 
        });
    }
}
const Wwidth = window.matchMedia("(max-width: 800px)")
mediaListener(Wwidth) // Call listener function at run time
Wwidth.addListener(mediaListener) // Attach listener function on state changes