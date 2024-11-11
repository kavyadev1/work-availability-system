document.addEventListener("DOMContentLoaded", function () {
    const employeeButton = document.getElementById("employeeButton");
    const managerButton = document.getElementById("managerButton");
    const availabilityButton = document.getElementById("availabilityButton");
    const profileButton = document.getElementById("profileButton");

    employeeButton.addEventListener("click", function () {
        alert("Employee section clicked.");
    });

    managerButton.addEventListener("click", function () {
        alert("Manager section clicked.");
    });

    availabilityButton.addEventListener("click", function () {
        alert("Employee Availability section clicked.");
    });

    profileButton.addEventListener("click", function () {
        alert("Profile section clicked.");
    });
});
