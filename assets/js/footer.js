//when click out of subMenu
$(document).mouseup(function(e) {
    let subMenuElementActive = $('.lang-value-container.active');
    if (!subMenuElementActive.is(e.target) && subMenuElementActive.has(e.target).length === 0) {
        subMenuElementActive.removeClass('active');
        setTimeout(() => {
            subMenuElementActive.find('.lang-dropdown').css("visibility", "hidden");
        }, 225);
    }
});

//When click on nav-item
$('.lang-value-container').on('click keypress', function(event) {
    if (event.type === 'click' || event.which === 13 || event.which === 32) {
        openCloseDropdown(event, $(this));
        $('lang-dropdown li.selected').focus();
    }
});

// hidden dropdown language when parent container out focus
$('.lang-value-container').on('focusout', function(event) {
    if (event.type === 'focusout') {
        openCloseDropdown(event, $(this));
    }
});


// Select previous or next Language when up&down keys pressed
$('.lang-container').on('keydown', function(event) {
    if (event.which === 38) {
        selectPreviousLanguage();
    }
    if (event.which === 40) {
        selectNextLanguage();
    }

});


function selectNextLanguage() {
    let activeLanguageElement = $('.lang-value-container').find('li.selected');
    nextSibling = activeLanguageElement.next();
    if (nextSibling.prop("tagName") == "LI") {
        nextSibling.addClass('selected');
        activeLanguageElement.removeClass('selected');
    }
}

function selectPreviousLanguage() {
    let activeLanguageElement = $('.lang-value-container').find('li.selected');
    previousSibling = activeLanguageElement.prev();
    if (previousSibling.prop("tagName") == "LI") {
        activeLanguageElement.removeClass('selected');
        previousSibling.addClass('selected');
    }
}



// open or close the language dropdown function
function openCloseDropdown(event, that) {
    let subMenuElement = that.find('.lang-dropdown');
    if (that.attr('class').indexOf('active') == -1) {
        that.addClass('active');
        subMenuElement.css("visibility", "visible");
    } else {
        if (subMenuElement.has(event.target).length == 0) {
            that.removeClass('active');
            setTimeout(() => {
                subMenuElement.css("visibility", "hidden");
            }, 200);
        }
    }
};


/** footer-expand-responsive system */
$('.footer-title').on('click', function(event) {
    let subMenuElement = $(this).nextAll('.footer-list').first();
    let totalHeight = 0;
    subMenuElement.children().each(function() {
        totalHeight += $(this).height() + parseInt($(this).css('marginTop'));
    });
    if ($(this).attr('class').indexOf('active') == -1) {
        $(this).addClass('active');
        subMenuElement.css("maxHeight", totalHeight);
    } else {
        subMenuElement.css("maxHeight", 0);
        $(this).removeClass('active');
    }
});