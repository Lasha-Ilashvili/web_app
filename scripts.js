document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const togglePasswordButton = document.getElementById('togglePassword');
    const backButton = document.getElementById('backButton');

    form.addEventListener('submit', handleFormSubmit);
    togglePasswordButton.addEventListener('click', togglePasswordVisibility);
    backButton.addEventListener('click', returnToRegistration);

    hideSuccessMessage(); // Hide the success message on load

    function handleFormSubmit(event) {
        event.preventDefault();

        if (validateEmail() && validatePassword()) {
            showSuccessMessage();
        }
    }

    function validateEmail() {
        const email = document.getElementById('email').value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return false;
        }
        return true;
    }

    function validatePassword() {
        const password = document.getElementById('password').value;

        if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            return false;
        }
        return true;
    }

    function togglePasswordVisibility() {
        const passwordField = document.getElementById('password');

        passwordField.type = passwordField.type === 'password' ? 'text' : 'password';
        togglePasswordButton.textContent = passwordField.type === 'password' ? 'Show' : 'Hide';
    }

    function showSuccessMessage() {
        document.getElementById('title').classList.add('hidden');
        document.getElementById('registrationForm').classList.add('hidden');
        document.getElementById('successMessage').classList.remove('hidden');
    }

    function hideSuccessMessage() {
        document.getElementById('successMessage').classList.add('hidden');
        document.getElementById('registrationForm').classList.remove('hidden');
        document.getElementById('title').classList.remove('hidden');
    }

    function returnToRegistration() {
        hideSuccessMessage();
    }
});