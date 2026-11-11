// Wait for DOM content to load fully
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. LOAN CATEGORY TAB FILTERING ---
    const filterButtons = document.querySelectorAll('.tab-btn');
    const loanCards = document.querySelectorAll('.loan-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class styling from all tabs
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            // Hide/Show matching loan cards
            loanCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // --- 2. EASY MONTHLY PAYMENT CHECK (IN RUPEES ₹) ---
    const calcAmount = document.getElementById('calcAmount');
    const calcTenure = document.getElementById('calcTenure');
    const monthlyResult = document.getElementById('monthlyResult');

    function calculateEstimate() {
        const principal = parseFloat(calcAmount.value) || 0;
        const years = parseInt(calcTenure.value) || 1;
        const months = years * 12;
        const simpleInterestRate = 0.085; // Baseline estimated 8.5% rate

        if (principal <= 0) {
            monthlyResult.textContent = '₹0 / mo';
            return;
        }

        // Easy calculation formula
        const totalInterest = principal * simpleInterestRate * years;
        const estimatedMonthly = (principal + totalInterest) / months;
        
        // Format with Indian Rupee commas (e.g., ₹17,222 / mo)
        monthlyResult.textContent = `₹${Math.round(estimatedMonthly).toLocaleString('en-IN')} / mo`;
    }

    if (calcAmount && calcTenure) {
        calcAmount.addEventListener('input', calculateEstimate);
        calcTenure.addEventListener('change', calculateEstimate);
    }

    // Close application popup when clicking backdrop area
    const modal = document.getElementById('applyModal');
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
});

// --- 3. APPLICATION POPUP CONTROLS ---
function openModal(loanName) {
    const modal = document.getElementById('applyModal');
    const modalTitle = document.getElementById('modalLoanTitle');
    
    if (modal && modalTitle) {
        modalTitle.textContent = `Apply for ${loanName}`;
        modal.classList.add('active');
    }
}

function closeModal() {
    const modal = document.getElementById('applyModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

function handleFormSubmit(event) {
    event.preventDefault();
    alert('Thank you! Your loan application request has been received. Our team will call you back shortly.');
    closeModal();
    document.getElementById('loanForm').reset();
}