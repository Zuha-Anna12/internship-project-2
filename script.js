const form = document.getElementById("registration-form");
const errorMessage = document.querySelector(".error-message");
const togglePassword = document.getElementById("togglePassword");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Perform form validation here
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.";
        return;
    }

