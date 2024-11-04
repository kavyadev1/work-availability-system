document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Basic validation (for demonstration purposes only)
    if (username === "admin" && password === "password") {
        errorMessage.textContent = "Login successful!";
        errorMessage.style.color = "green";
    } else {
        errorMessage.textContent = "Invalid username or password!";
        errorMessage.style.color = "red";
    }
});
