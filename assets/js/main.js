/** active sticky header **/
$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
        $("header[role='banner']").addClass('sticky');
    } else {
        $("header[role='banner']").removeClass('sticky');
    }
});