document.addEventListener("DOMContentLoaded", function () {
    const employeeButton = document.getElementById("employeeButton");
    const managerButton = document.getElementById("managerButton");
    const availabilityButton = document.getElementById("availabilityButton");
    const profileButton = document.getElementById("profileButton");

    employeeButton.addEventListener("click", function () {
        window.location.href = "../pages/employee.html"; // replace with the actual URL
    });

    managerButton.addEventListener("click", function () {
        window.location.href = "../pages/manager.html"; // replace with the actual URL
    });

    availabilityButton.addEventListener("click", function () {
        window.location.href = "../pages/availability.html"; // replace with the actual URL
    });

    profileButton.addEventListener("click", function () {
        window.location.href = "../pages/profile.html"; // replace with the actual URL
    });
});
