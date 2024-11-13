// employee.js
function loadEmployeePage() {
    fetch('employee.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.error('Error loading Employee page:', error));
}


