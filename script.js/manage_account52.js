// Script for Manage Account Operations

document.addEventListener("DOMContentLoaded", () => {
    console.log("Manage Account JavaScript module initialized successfully.");
});

// Display notification message on form interactions
function showNotification(message) {
    const box = document.getElementById("manageNotification");
    box.style.display = "block";
    box.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${message}`;
    
    // Auto scroll down to notification message
    box.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Handle Statement Request
function handleStatementRequest(event) {
    event.preventDefault();
    const accType = document.getElementById("statementAccType").value;
    const duration = document.getElementById("statementDuration").value;
    
    showNotification(`Success: Statement request for your ${accType} (${duration}) generated. Download starting automatically...`);
}

// Handle Cheque Book & Card Service Request
function handleServiceRequest(event) {
    event.preventDefault();
    const service = document.getElementById("serviceType").value;
    const accNo = document.getElementById("accNumber").value;
    
    showNotification(`Request Logged: ${service} for Account ending in XXXX${accNo.slice(-4)} registered successfully.`);
}

// Handle Profile Update Request
function handleProfileUpdate(event) {
    event.preventDefault();
    const phone = document.getElementById("updatePhone").value;
    const email = document.getElementById("updateEmail").value;
    
    showNotification(`Profile Updated: Verification link sent to ${email} and mobile OTP sent to +91 ${phone}.`);
}