document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("savingsForm");
    const msg = document.getElementById("savingsMsg");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("sName").value;
        msg.style.display = "block";
        msg.innerHTML = `<i class="fa-solid fa-check-circle"></i> Congratulations ${name}! Your Savings Account application has been successfully logged.`;
        form.reset();
    });
});