document.addEventListener('DOMContentLoaded', () => {
    // 1. Offers Mini-Carousel Data & Controls
    const offers = [
        {
            title: "Credit Card for you",
            desc: "Get pre-approved UFB Credit Cards with zero joining fee & lounge access."
        },
        {
            title: "Instant Personal Loan",
            desc: "Up to ₹15 Lakhs disbursed in 10 seconds at 10.49% p.a. interest."
        },
        {
            title: "Digital Savings Account",
            desc: "Open a zero-balance account online via Video KYC in 3 minutes."
        }
    ];

    let currentOffer = 0;
    const offerTitle = document.getElementById('offerTitle');
    const offerDesc = document.getElementById('offerDesc');

    function updateOffer() {
        offerTitle.textContent = offers[currentOffer].title;
        offerDesc.textContent = offers[currentOffer].desc;
    }

    document.getElementById('nextOffer').addEventListener('click', () => {
        currentOffer = (currentOffer + 1) % offers.length;
        updateOffer();
    });

    document.getElementById('prevOffer').addEventListener('click', () => {
        currentOffer = (currentOffer - 1 + offers.length) % offers.length;
        updateOffer();
    });

    // 2. Category Tab Strip Active State
    const catTabs = document.querySelectorAll('.cat-tab');
    catTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            catTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    // 3. Interactive Fixed Deposit Calculator
    const depositSlider = document.getElementById('depositSlider');
    const depositInput = document.getElementById('depositAmountInput');
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const tenurePills = document.querySelectorAll('.tenure-pill');

    const maturityValueEl = document.getElementById('maturityValue');
    const principalDisplayEl = document.getElementById('principalDisplay');
    const interestDisplayEl = document.getElementById('interestDisplay');
    const rateDisplayEl = document.getElementById('rateDisplay');
    const maturityDateEl = document.getElementById('maturityDateDisplay');

    let principal = 500000;
    let baseRate = 7.35;
    let years = 2.5;
    let seniorBonus = 0;

    function formatINR(num) {
        return '₹' + Math.round(num).toLocaleString('en-IN');
    }

    function calculateFD() {
        const effectiveRate = baseRate + seniorBonus;
        // Quarterly compounding formula: A = P * (1 + r/4)^(4*t)
        const r = effectiveRate / 100;
        const maturityAmount = principal * Math.pow((1 + r / 4), 4 * years);
        const interestEarned = maturityAmount - principal;

        maturityValueEl.textContent = formatINR(maturityAmount);
        principalDisplayEl.textContent = formatINR(principal);
        interestDisplayEl.textContent = '+ ' + formatINR(interestEarned);
        rateDisplayEl.textContent = effectiveRate.toFixed(2) + '% p.a.';

        // Calculate Maturity Month & Year
        const futureDate = new Date();
        futureDate.setMonth(futureDate.getMonth() + Math.round(years * 12));
        maturityDateEl.textContent = futureDate.toLocaleDateString('en-US', {
            month: 'short',
            year: 'numeric'
        });
    }

    depositSlider.addEventListener('input', (e) => {
        principal = Number(e.target.value);
        depositInput.value = principal;
        calculateFD();
    });

    depositInput.addEventListener('input', (e) => {
        let val = Number(e.target.value);
        if (val < 1000) val = 1000;
        principal = val;
        if (val <= 5000000) depositSlider.value = val;
        calculateFD();
    });

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            toggleBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            seniorBonus = parseFloat(btn.dataset.rateBonus);
            calculateFD();
        });
    });

    tenurePills.forEach(pill => {
        pill.addEventListener('click', () => {
            tenurePills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            years = parseFloat(pill.dataset.years);
            baseRate = parseFloat(pill.dataset.rate);
            calculateFD();
        });
    });

    // Initial Calculation
    calculateFD();
});