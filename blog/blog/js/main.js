$(document).ready(function () {
    $(".center").vegas({
        slides: [
            {src: "\image/1.jpg"},
            {src: "\image/2.jpg"},
            {src: "\image/3.jpg"},
            {src: "\image/4.jpg"}
        ],

        delay: 6000,
        transition: ['zoomIn2', 'swirlLeft2', 'slideRight2']
    });
});
