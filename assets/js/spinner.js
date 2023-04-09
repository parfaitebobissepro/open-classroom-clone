/** Spinner Page Loader */


document.addEventListener("DOMContentLoaded", function() {
    // Fade out and remove spinner element
    var spinner = document.querySelector("#spinner");
    spinner.style.opacity = 1;
    (function fade() {
        if ((spinner.style.opacity -= 0.1) < 0) {
            spinner.parentNode.removeChild(spinner);
        } else {
            requestAnimationFrame(fade);
        }
    })();

    // Restore body overflow and show all elements except spinner
    var body = document.querySelector("body");
    body.style.overflow = "initial";
    var elements = document.querySelectorAll("body > :not(#spinner)");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "block";
    }
});