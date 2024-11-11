document.addEventListener("DOMContentLoaded", function () {
    const contentDiv = document.getElementById("content");

    // Load the login form initially
    loadLoginForm();

    function loadLoginForm() {
        fetch("login.html")
            .then(response => response.text())
            .then(data => {
                contentDiv.innerHTML = data;
                const loginForm = document.getElementById("loginForm");

                loginForm.addEventListener("submit", function (event) {
                    event.preventDefault();
                    handleLogin();
                });
            });
    }

    function handleLogin() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const errorMessage = document.getElementById("error-message");

        // For simplicity, we'll use hardcoded credentials
        const validUsername = "admin";
        const validPassword = "password123";

        if (username === validUsername && password === validPassword) {
            // Display the home page content
            displayHomePage();
        } else {
            // Show an error message
            errorMessage.textContent = "Invalid username or password. Please try again.";
        }
    }

    function displayHomePage() {
        contentDiv.innerHTML = `
            <div class="home-container">
                <h2>Welcome to the Home Page!</h2>
                <p>You have successfully logged in.</p>
            </div>
        `;
    }
});

