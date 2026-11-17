// ==================================
// MOBILE NAVIGATION
// ==================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    menuToggle.textContent =
        navLinks.classList.contains("show") ? "✕" : "☰";
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        menuToggle.textContent = "☰";
    });
});


// ==================================
// HERO IMAGE SLIDER
// ==================================

const heroSlides = document.querySelectorAll(".hero-slide");
const slideNumber = document.getElementById("slideNumber");

let heroIndex = 0;

function showHeroSlide(index) {
    heroSlides.forEach(slide => {
        slide.classList.remove("active");
    });

    heroSlides[index].classList.add("active");

    slideNumber.textContent =
        `0${index + 1} / 0${heroSlides.length}`;

    heroIndex = index;
}

document.getElementById("nextSlide").addEventListener("click", () => {
    showHeroSlide((heroIndex + 1) % heroSlides.length);
});

document.getElementById("prevSlide").addEventListener("click", () => {
    showHeroSlide(
        (heroIndex - 1 + heroSlides.length) % heroSlides.length
    );
});


// Automatically change hero banners
let heroTimer = setInterval(() => {
    showHeroSlide((heroIndex + 1) % heroSlides.length);
}, 6000);


// ==================================
// PROMOTIONAL CAROUSEL
// ==================================

function createCarousel(trackId, prevId, nextId, dotsId = null) {

    const track = document.getElementById(trackId);
    const items = Array.from(track.children);

    const prev = document.getElementById(prevId);
    const next = document.getElementById(nextId);

    let index = 0;

    let visibleCount = 2;

    function getVisibleCount() {
        return window.innerWidth <= 650 ? 1 : 2;
    }

    function updateCarousel() {

        visibleCount = getVisibleCount();

        const maxIndex = Math.max(0, items.length - visibleCount);

        index = Math.min(index, maxIndex);

        const gap = parseFloat(getComputedStyle(track).gap) || 0;
        const itemWidth = items[0].getBoundingClientRect().width;

        track.style.transform =
            `translateX(-${index * (itemWidth + gap)}px)`;

        if (dotsId) {
            const dotsContainer = document.getElementById(dotsId);

            dotsContainer.innerHTML = "";

            items.forEach((item, i) => {
                const dot = document.createElement("button");

                dot.className = "dot" + (i === index ? " active" : "");
                dot.setAttribute("aria-label", `Show offer ${i + 1}`);

                dot.addEventListener("click", () => {
                    index = Math.min(
                        i,
                        Math.max(0, items.length - getVisibleCount())
                    );
                    updateCarousel();
                });

                dotsContainer.appendChild(dot);
            });
        }
    }

    prev.addEventListener("click", () => {
        index = Math.max(0, index - 1);
        updateCarousel();
    });

    next.addEventListener("click", () => {
        index = Math.min(
            items.length - getVisibleCount(),
            index + 1
        );
        updateCarousel();
    });

    window.addEventListener("resize", updateCarousel);

    updateCarousel();
}

createCarousel(
    "promoTrack",
    "promoPrev",
    "promoNext",
    "promoDots"
);

createCarousel(
    "cardTrack",
    "cardPrev",
    "cardNext"
);


// ==================================
// FIXED DEPOSIT CALCULATOR
// ==================================

const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", () => {

    const amount = Number(document.getElementById("amount").value);
    const rate = Number(document.getElementById("rate").value);
    const years = Number(document.getElementById("years").value);

    if (
        !Number.isFinite(amount) ||
        !Number.isFinite(rate) ||
        !Number.isFinite(years) ||
        amount < 1000 ||
        rate < 0 ||
        years < 1 ||
        years > 20
    ) {
        alert("Please enter valid calculator values.");
        return;
    }

    // Illustrative annual compounding calculation
    const maturity = amount * Math.pow(1 + rate / 100, years);

    const interest = maturity - amount;

    document.getElementById("maturity").textContent =
        maturity.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
        });

    document.getElementById("interest").textContent =
        interest.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
        });

});


// ==================================
// SCROLL REVEAL ANIMATION
// ==================================

const sections = document.querySelectorAll(
    ".quick-section, .whats-new, .program-section, " +
    ".accounts-section, .calculator-section, .cards-section, " +
    ".loan-section, .payment-section, .trade-section, " +
    ".why-section, .contact-section"
);

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.12
    });

    sections.forEach(section => {
        section.classList.add("reveal");
        observer.observe(section);
    });

}


// ==================================
// COPYRIGHT YEAR
// ==================================

document.getElementById("year").textContent =
    new Date().getFullYear();