/* 
fixes missing wordpress response in script.min.js
script.min.js disables autoslide, when in customizer mode
the response of ajax.php is requested for this
*/
let requestpost = {
    disable_autoslide : 1
};

/* set the interval of sliders */

var settings = {
    interval: 3000
};

$( '.carousel' ).carousel(
    settings
);
