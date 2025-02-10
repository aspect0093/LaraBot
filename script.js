document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed"); // Debugging: Check if DOM is ready

    // Splash Screen Timer
    setTimeout(() => {
        console.log("Splash screen timer started"); // Debugging: Check if timer started

        const splashScreen = document.getElementById("splash-screen");
        if (splashScreen) {
            console.log("Splash screen element found"); // Debugging: Check if element exists
            splashScreen.style.opacity = "0";  // Fade out splash screen

            setTimeout(() => {
                console.log("Fading out complete, now hiding"); // Debugging: Check if fade-out complete
                splashScreen.style.display = "none";  // Hide splash screen

                const welcomeScreen = document.getElementById("welcome-screen");
                if (welcomeScreen) {
                    console.log("Welcome screen element found, displaying"); // Debugging: Check if element exists
                    welcomeScreen.style.display = "flex";  // Show welcome screen
                    startTypingAnimation("typing-text", "Welcome to the Site!");
                } else {
                    console.error("Welcome screen element NOT found"); // Debugging: Element not found
                }
            }, 1000);  // Wait for fade-out to complete
        } else {
            console.error("Splash screen element NOT found"); // Debugging: Element not found
        }
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
            const welcomeScreen = document.getElementById("welcome-screen");
            const mainPage = document.getElementById("main-page");

            if (welcomeScreen && mainPage) {
                console.log("Swipe up detected, hiding welcome screen, showing main page"); // Debugging
                welcomeScreen.style.display = "none"; // Hide welcome screen
                mainPage.style.display = "flex"; // Show main page
            } else {
                console.error("Welcome screen or Main page element NOT found during swipe"); // Debugging
            }
        }
    });
});

// Typing Animation Function
function startTypingAnimation(elementId, text) {
    let element = document.getElementById(elementId);
    if (!element) {
        console.error("Typing animation element NOT found"); // Debugging
        return;
    }

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
}
