document.addEventListener("DOMContentLoaded", function () {
    // Preloader
    const preloader = document.getElementById("preloader");
    if (preloader) {
        window.addEventListener("load", function () {
            preloader.style.display = "none";
        });
    }

    // Smooth fade-in animations
    const fadeInElements = document.querySelectorAll(".fade-in");
    
    function handleFadeIn() {
        fadeInElements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9) {
                element.classList.add("visible");
            }
        });
    }
    
    window.addEventListener("scroll", handleFadeIn);
    handleFadeIn(); // Run on page load

    // Responsive Navigation Menu
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.querySelector("nav ul");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("show");
        });
    }

    // Button click animation
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            button.classList.add("clicked");
            setTimeout(() => button.classList.remove("clicked"), 300);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const footer = document.querySelector("footer");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                footer.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    observer.observe(footer);
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#contact-form form");
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const subjectInput = document.querySelector("#subject");
    const messageInput = document.querySelector("#message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from submitting by default

        let isValid = true;

        // Clear previous error messages
        clearErrors();

        // Validate Name
        if (nameInput.value.trim() === "") {
            showError(nameInput, "Name is required");
            isValid = false;
        }

        // Validate Email
        if (!validateEmail(emailInput.value.trim())) {
            showError(emailInput, "Enter a valid email address");
            isValid = false;
        }

        // Validate Subject
        if (subjectInput.value.trim() === "") {
            showError(subjectInput, "Subject cannot be empty");
            isValid = false;
        }

        // Validate Message
        if (messageInput.value.trim().length < 10) {
            showError(messageInput, "Message must be at least 10 characters");
            isValid = false;
        }

        // If all inputs are valid, submit the form
        if (isValid) {
            alert("Message sent successfully!");
            form.reset(); // Reset form fields after successful submission
        }
    });

    // Function to show error messages
    function showError(inputElement, message) {
        const errorElement = document.createElement("p");
        errorElement.classList.add("error-message");
        errorElement.textContent = message;
        inputElement.classList.add("error-border");
        inputElement.parentElement.appendChild(errorElement);
    }

    // Function to clear error messages
    function clearErrors() {
        document.querySelectorAll(".error-message").forEach(error => error.remove());
        document.querySelectorAll(".error-border").forEach(input => input.classList.remove("error-border"));
    }

    // Function to validate email format
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});



document.addEventListener("DOMContentLoaded", function () {
    const footer = document.querySelector("footer");

    function revealFooter() {
        const rect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top <= windowHeight - 50) {
            footer.classList.add("visible");
        }
    }

    // Run when the page loads and on scroll
    window.addEventListener("scroll", revealFooter);
    revealFooter(); // Run immediately in case footer is already in view
});

