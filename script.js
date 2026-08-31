function showCategory(category) {

    const categories = document.querySelectorAll(".gallery-category");
    const buttons = document.querySelectorAll(".category-btn");

    // Hide all categories
    categories.forEach(function(section) {
        section.style.display = "none";
    });

    // Remove active class
    buttons.forEach(function(button) {
        button.classList.remove("active");
    });

    // Show selected category
    document.getElementById(category).style.display = "block";

    // Find clicked button
    buttons.forEach(function(button) {
        if (button.getAttribute("data-category") === category) {
            button.classList.add("active");
        }
    });
}


// Show paintings by default after page loads
document.addEventListener("DOMContentLoaded", function() {
    showCategory("paintings");
});