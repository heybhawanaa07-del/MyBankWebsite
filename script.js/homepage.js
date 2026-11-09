// Comment: Script initialized for Apex Horizon Bank Homepage

document.addEventListener("DOMContentLoaded", () => {
    console.log("Apex Bank Homepage script successfully loaded.");

    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if(targetId !== "#") {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// Function to handle switching header segments (Personal | NRI | Business)
function switchSegment(selectedBtn) {
    const buttons = document.querySelectorAll('.segment-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    selectedBtn.classList.add('active');
    console.log(`Segment switched to: ${selectedBtn.innerText}`);
}