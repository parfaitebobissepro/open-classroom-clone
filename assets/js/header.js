/** Active visibility of subMenu in nav **/

//when click out of subMenu
$(document).mouseup(function(e) {
    let navItemActive = $('.header-navbar-nav .nav-item.active');
    let subMenuElementActive = navItemActive.find('.nav-sub-menu');
    if (!subMenuElementActive.is(e.target) && subMenuElementActive.has(e.target).length === 0 && navItemActive.has(e.target).length === 0) {
        let subMenuElement = navItemActive.find('.nav-sub-menu');
        navItemActive.removeClass('active');
        setTimeout(() => {
            subMenuElement.css("visibility", "hidden");
        }, 225);
    }
});

//When click on nav-item
$('.header-navbar-nav .nav-item').on('click', function(event) {
    let subMenuElement = $(this).find('.nav-sub-menu');
    if ($(this).attr('class').indexOf('active') == -1) {
        $(this).addClass('active');
        subMenuElement.css("visibility", "visible");
    } else {
        if (subMenuElement.has(event.target).length == 0) {
            $(this).removeClass('active');
            setTimeout(() => {
                subMenuElement.css("visibility", "hidden");
            }, 225);
        }
    }
});




// A $( document ).ready() block.
$(document).ready(function() {
    // get the target div element
    const targetDiv = $('.header-navbar-nav');

    // function to check screen width and add show class if needed
    function checkScreenWidth() {
        if (window.matchMedia("(min-width: 992px)").matches) {
            targetDiv.show();
        } else {
            targetDiv.hide();
        }
    }

    // check screen width on page load
    checkScreenWidth();

    // add event listener for screen resize
    window.addEventListener('resize', checkScreenWidth);
});


// A $( document ).ready() block.
$(document).ready(function() {
    // get the target div element
    const targetDiv = $('.navbar-collapse-contact-link');

    // function to check screen width and add show class if needed
    function checkScreenWidth() {
        if (window.matchMedia("(min-width: 480px)").matches) {
            targetDiv.show();
        } else {
            targetDiv.hide();
        }
    }

    // check screen width on page load
    checkScreenWidth();

    // add event listener for screen resize
    window.addEventListener('resize', checkScreenWidth);
});