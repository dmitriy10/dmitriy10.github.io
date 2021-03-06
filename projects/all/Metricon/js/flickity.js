var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
    accessibility: true,
    adaptiveHeight: true,
    autoPlay: 3000,
    pauseAutoPlayOnHover: true,
    cellAlign: 'center',
    cellSelector: undefined,
    contain: false,
    draggable: '>1',
    dragThreshold: 3,
    freeScroll: false,
    friction: 0.2,
    groupCells: false,
    initialIndex: 0,
    lazyLoad: true,
    percentPosition: true,
    prevNextButtons: true,
    pageDots: true,
    resize: true,
    rightToLeft: false,
    setGallerySize: true,
    watchCSS: false,
    wrapAround: true,
    fade: true
});

