var rippleEffect = (function() {
    var className, ripple;

    className = 'btn';
    className2 = 'active-ripple';
    ripple = document.createElement("div");
    ripple.classList.add('ripple')

    document.addEventListener('mousedown', function(e) {
        if (e.target.classList.contains(className) || e.target.classList.contains(className2)) {
            ripple.setAttribute("style", "top: " + e.offsetY + "px; left: " + e.offsetX + "px");
            e.target.appendChild(ripple)
        }
    })
})();