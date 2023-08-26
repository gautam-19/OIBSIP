const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const storedUsername = localStorage.getItem(username);
    const storedPassword = localStorage.getItem(`${username}_password`);

    if (storedUsername && storedPassword && storedPassword === password) {
        window.location.href = 'secured.html';
    } else {
        errorMessage.textContent = 'Invalid username or password.';
    }
});