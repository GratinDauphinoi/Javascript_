'use strict'

$('#js-show-alert').click(() => {
    $('#js-alert').show();
});


$('#js-hide-alert').click(() => {
    $('#js-alert').hide();
});



$('#js-slide-exemple-address').click(() => {
    $('#js-slide-link').fadeToggle();
});







$('#js-animation-1')
    .delay(3000)
    .animate({
        left: '300px',
        width: '200px'
    },700)
    .animate({
        height: '400px'
    });