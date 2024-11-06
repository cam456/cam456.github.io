const hamMenu = document.querySelector('.menu-hamburger');
const offscreen = document.querySelector('.nav__list_burger');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offscreen.classList.toggle('active');
});

function reveal() {
    var sections = document.querySelectorAll(".reveal"); // Select all sections with the 'reveal' class
    sections.forEach(function(section) {
        var windowHeight = window.innerHeight;
        var elementTop = section.getBoundingClientRect().top;
        var elementVisible = 150;

        // Apply reveal to all sections
        if (elementTop < windowHeight - elementVisible) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }

        // Specific behavior for individual sections (e.g., different transition times)
        if (section.classList.contains("section1")) {
            section.style.transition = "1s all ease"; // Example: faster transition for section1
        } else if (section.classList.contains("section2")) {
            section.style.transition = "3s all ease"; // Slower transition for section2
        }
    });
}

// Ensure the reveal function is triggered when the page is loaded
document.addEventListener("DOMContentLoaded", function() {
    reveal(); // Check elements already in view when the page loads
});

// Trigger the reveal function on scroll and resize events
window.addEventListener("scroll", reveal);
window.addEventListener("resize", reveal);



