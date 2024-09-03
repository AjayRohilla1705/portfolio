document.addEventListener("DOMContentLoaded", function() {
    const educationItems = document.querySelectorAll("#qualifications .education-item");

    educationItems.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("active");
        });
    });
});