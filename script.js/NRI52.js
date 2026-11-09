// JavaScript module for NRI Banking Page

// Function to dynamically update the target product field when a card link is clicked
function setAccountType(productName) {
    const productInput = document.getElementById("selectedProduct");
    if (productInput) {
        productInput.value = productName;
        console.log(`Selected NRI product updated to: ${productName}`);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("NRI Banking script initialized successfully.");

    const form = document.getElementById("nriForm");
    const successMsg = document.getElementById("nriSuccessMsg");

    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();

            const name = document.getElementById("nriName").value;
            const country = document.getElementById("nriCountry").value;
            const product = document.getElementById("selectedProduct").value;

            // Display success notification message
            successMsg.style.display = "block";
            successMsg.innerHTML = `<i class="fa-solid fa-circle-check"></i> Thank you, ${name} from ${country}! Your request for a ${product} has been registered. An NRI desk specialist will reach out shortly.`;

            // Reset form
            form.reset();
            
            // Re-sync product field value placeholder
            document.getElementById("selectedProduct").value = product;
        });
    }
});