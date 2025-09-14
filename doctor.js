function viewAppointments() {
    fetch('/api/appointments')
        .then(response => response.json())
        .then(data => {
            document.getElementById('output').innerText = JSON.stringify(data, null, 2);
        });
}

function consultPatient() {
    window.location.href = '/consult'; // Redirect to consultation page
}

function uploadPrescription() {
    window.location.href = '/upload-prescription'; // Redirect to upload page
}

function viewMedicalHistory() {
    fetch('/api/medical-history')
        .then(response => response.json())
        .then(data => {
            document.getElementById('output').innerText = JSON.stringify(data, null, 2);
        });
}