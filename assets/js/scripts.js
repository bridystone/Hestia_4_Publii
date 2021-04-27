/* fix for missing wordpress - requestpost is used in script.min.js
    script.min.js disables autoslide, when in customizer mode
    the response of ajax.php is requested for this
     */
/* TODO: check masonary - this is also requested on ajax */

let requestpost = {
    disable_autoslide : "0"
};
    