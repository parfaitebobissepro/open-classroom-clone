/* for open and close the sidebar */
$('#sidebarCollapse').on('click', function() {
    $('.sidebar').toggleClass('active');
    $('.overlay').toggleClass('active');
});

$('.overlay').on('click', function() {
    $('.sidebar').removeClass('active');
    $('.overlay').removeClass('active');
});


/** Submenu-responsive system */
$('.sidebar-nav .nav-item').on('click', function(event) {
    let subMenuElement = $(this).find('.nav-sub-menu-responsive');
    let totalHeight = 0;
    subMenuElement.children().each(function() {
        totalHeight += $(this).height();
    });

    if ($(this).attr('class').indexOf('active') == -1) {
        desactivateAllNavItemsInSidebar();
        $(this).addClass('active');
        subMenuElement.css("maxHeight", totalHeight);
    } else {
        subMenuElement.css("maxHeight", 0);
        $(this).removeClass('active');
    }
});

/** Disable all other sidebar-nav nav-items*/
function desactivateAllNavItemsInSidebar() {
    let subMenuElement = $('.nav-sub-menu-responsive');
    $('.sidebar-nav .nav-item').each(function() {
        $(this).removeClass('active');
    });
    subMenuElement.css("maxHeight", 0);

}