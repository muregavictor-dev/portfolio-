document.addEventListener("DOMContentLoaded", function () {
    const contactButtons = document.querySelectorAll(".contact-button");
    const contactFormContainer = document.getElementById("contact-form-container");
    const closeFormButton = document.getElementById("close-form");

    // Show the contact form when any "Contact" button is clicked
    contactButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            contactFormContainer.style.display = "flex";
        });
    });

    // Close the form when the close button is clicked
    closeFormButton.addEventListener("click", function () {
        contactFormContainer.style.display = "none";
    });

    // Handle form submission
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you for your message!");
        contactFormContainer.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const contactFormContainer = document.getElementById("contact-form-container");

    // Ensure form is hidden when the page loads
    contactFormContainer.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial");
    let index = 0;

    function showTestimonial(direction) {
        testimonials[index].style.transform = `translateX(${direction * -100}%)`;
        index = (index + direction + testimonials.length) % testimonials.length;
        testimonials[index].style.transform = "translateX(0)";
    }

    document.getElementById("prevBtn").addEventListener("click", function () {
        showTestimonial(-1);
    });

    document.getElementById("nextBtn").addEventListener("click", function () {
        showTestimonial(1);
    });

    // Auto-slide every 5 seconds
    setInterval(() => showTestimonial(1), 5000);
});



