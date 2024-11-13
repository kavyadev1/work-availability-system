document.addEventListener("DOMContentLoaded", function () {
    const employeeButton = document.getElementById("employeeButton");

    employeeButton.addEventListener("click", function () {
        // Redirect to the employee page
        window.location.href = "pages/employee.html";
    });
});

