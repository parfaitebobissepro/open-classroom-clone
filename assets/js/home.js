/** Home Syncing Slider */

$('.slider-single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    adaptiveHeight: true,
    infinite: true,
    useTransform: true,
    speed: 400,
    autoplay: true,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
    prevArrow: `
        <button
            class="arrow-slider reset-Button prevArrow"
            tabindex="0" type="button" aria-label="Go to"><svg
                class="sc-fEOsli ciCWDI MuiSvgIcon-root MuiSvgIcon-fontSizeMedium" focusable="false"
                aria-hidden="true" viewBox="0 0 24 24" data-testid="ChevronRightIcon">
                <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
            </svg><span class="sc-gsnTZi gCNzYw MuiTouchRipple-root"></span>
        </button>`,
    nextArrow: `
        <button
        class="arrow-slider reset-Button nextArrow"
        tabindex="0" type="button" aria-label="Go to"><svg
            class="sc-fEOsli ciCWDI MuiSvgIcon-root MuiSvgIcon-fontSizeMedium" focusable="false"
            aria-hidden="true" viewBox="0 0 24 24" data-testid="ChevronRightIcon">
            <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
        </svg><span class="sc-gsnTZi gCNzYw MuiTouchRipple-root"></span>
        </button>`,
    responsive: [{
        breakpoint: 1024,
        settings: {
            dots: false,
            arrows: false,
        }
    }, ]
});

$('.slider-single').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $(`.tab-indicator`).css('left', $(`.tab-indicator`).width() * nextSlide);
});
$('.slider-single').on('afterChange', function(event, slick, currentSlide) {
    $(`.tab-indicator`).css('left', $(`.tab-indicator`).width() * currentSlide);
    removeActiveToAllClass();
    $(`.carousel-nav-sub-container button:nth-child(${currentSlide + 1})`).addClass('active');
});

/** Change carousel when click */
$('.carousel-nav-sub-container button').on('click', function() {
    $('.slider-single').slick('slickGoTo', $(this).index());
});

/** remove the active class to all nav items */
function removeActiveToAllClass() {
    $('.carousel-nav-sub-container button').each(function() {
        $(this).removeClass('active');
    });
}