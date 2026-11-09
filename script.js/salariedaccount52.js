document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("salariedForm");
    const msg = document.getElementById("salariedMsg");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("salName").value;
        const company = document.getElementById("companyName").value;
        msg.style.display = "block";
        msg.innerHTML = `<i class="fa-solid fa-check-circle"></i> Thank you, ${name}! Your Salaried Account request associated with ${company} has been received.`;
        form.reset();
    });
});