// Comment: Script initialized for Open Your Account Page

let chosenAccountType = "Savings";

function selectAccountType(type, element) {
    chosenAccountType = type;
    
    // Remove active class from all cards
    const cards = document.querySelectorAll('.account-type-card');
    cards.forEach(card => card.classList.remove('active'));
    
    // Add active class to clicked card
    element.classList.add('active');
    console.log(`User selected account type: ${chosenAccountType}`);
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("accountForm");
    const successMsg = document.getElementById("successMessage");
    
    // Hide success box initially
    successMsg.style.display = "none";

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        
        const fullName = document.getElementById("fullName").value;
        const phone = document.getElementById("phone").value;

        // Display success feedback message
        successMsg.style.display = "block";
        successMsg.innerHTML = `<i class="fa-solid fa-circle-check"></i> Thank you, ${fullName}! Your ${chosenAccountType} Account application has been registered successfully. We sent a verification code to +91 ${phone}.`;
        
        // Reset form fields
        form.reset();
        
        console.log(`Account successfully requested for ${fullName} under ${chosenAccountType} category.`);
    });
});