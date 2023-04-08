/** active sticky header **/
$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
        $("header[role='banner']").addClass('sticky');
    } else {
        $("header[role='banner']").removeClass('sticky');
    }
});




// A $( document ).ready() block.
$(document).ready(function() {
    // get the target div element
    const targetClipPath = $('#mask_1 path');

    // function to check screen width and add show class if needed
    function checkScreenWidth() {
        if (window.matchMedia("(min-width: 479.95px)").matches) {
            targetClipPath.attr('d', 'M0,100 C30,40 40,80 80,0 L100,0 100,100');
        } else {
            targetClipPath.attr('d', 'M0,100 C30,56 30,100 100,27 L100,100');
        }
    }

    // check screen width on page load
    checkScreenWidth();

    // add event listener for screen resize
    window.addEventListener('resize', checkScreenWidth);
});