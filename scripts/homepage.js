document.addEventListener("DOMContentLoaded", function () {
    const employeeButton = document.getElementById("employeeButton");
    const managerButton = document.getElementById("managerButton");
    const availabilityButton = document.getElementById("availabilityButton");
    const profileButton = document.getElementById("profileButton");

    employeeButton.addEventListener("click", function () {
        alert("Employee button clicked.");
    });

    managerButton.addEventListener("click", function () {
        alert("Manager button clicked.");
    });

    availabilityButton.addEventListener("click", function () {
        alert("Employee Availability button clicked.");
    });

    profileButton.addEventListener("click", function () {
        alert("Profile button clicked.");
    });
});