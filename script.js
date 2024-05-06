// Smooth scroll to target section
function smoothScroll(target) {
    const targetElement = document.querySelector(target);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
        });
    }
}

// Event listeners for navigation buttons
document.getElementById("onas-button").addEventListener("click", function() {
    smoothScroll("#onas");
});

document.getElementById("galeria-button").addEventListener("click", function() {
    smoothScroll("#galeria");
});

document.getElementById("kontakt-button").addEventListener("click", function() {
    smoothScroll("#kontakt");
});

// Scroll to top button functionality (already implemented)
// You can keep your existing code for the scroll-to-top button
