document.addEventListener("DOMContentLoaded", function () {
    const contentDiv = document.getElementById("content");

    // Load the login form initially
    loadLoginForm();

    function loadLoginForm() {
        contentDiv.innerHTML = `
            <div class="login-container">
                <h2>Login</h2>
                <form id="loginForm">
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" required>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required>
                    <button type="submit">Login</button>
                    <p id="error-message"></p>
                </form>
            </div>
        `;

        const loginForm = document.getElementById("loginForm");
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            handleLogin();
        });
    }

    function handleLogin() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const errorMessage = document.getElementById("error-message");

        // Hardcoded credentials for simplicity
        const validUsername = "admin";
        const validPassword = "password123";

        if (username === validUsername && password === validPassword) {
            // Load homepage if credentials are correct
            window.location.href = "pages/homepage.html";
        } else {
            // Show error message
            errorMessage.textContent = "Invalid username or password. Please try again.";
        }
    }
});
