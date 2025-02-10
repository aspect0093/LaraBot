
document.addEventListener("DOMContentLoaded", function () {
    // Splash Screen Timer
    setTimeout(() => {
        document.getElementById("splash-screen").style.opacity = "0";  // Fade out splash screen
        setTimeout(() => {
            document.getElementById("splash-screen").style.display = "none";  // Hide splash screen
            document.getElementById("welcome-screen").style.display = "flex";  // Show welcome screen
            startTypingAnimation("typing-text", "Welcome to the Site!");
        }, 1000);  // Wait for fade-out to complete
    }, 3000);  // Splash screen stays for 3 seconds

    // Swipe Up Gesture Detection
    let touchStartY = 0;
    let touchEndY = 0;

    document.addEventListener("touchstart", (e) => {
        touchStartY = e.touches[0].clientY;
    });

    document.addEventListener("touchend", (e) => {
        touchEndY = e.changedTouches[0].clientY;
        if (touchStartY - touchEndY > 50) { // If swipe-up gesture detected
            document.getElementById("welcome-screen").style.display = "none"; // Hide welcome screen
            document.getElementById("main-page").style.display = "flex"; // Show main page
        }
    });
});

// Typing Animation Function
function startTypingAnimation(elementId, text) {
    let element = document.getElementById(elementId);
    let index = 0;

    function typeCharacter() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index); // Add character to element
            index++;
            setTimeout(typeCharacter, 100); // Delay for each character
        }
    }

    element.innerHTML = ""; // Clear any existing text
    typeCharacter(); // Start typing effect
}

// Redirect Function for buttons
function redirectTo(url) {
    window.location.href = url; // Redirect to the specified URL
}ext
    typeCharacter(); // Start typing effect
}

// Redirect Function for buttons
function redirectTo(url) {
    window.location.href = url; // Redirect to the specified URL
}