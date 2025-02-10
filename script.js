document.addEventListener("DOMContentLoaded", function () {
    // Splash Screen Timer
    setTimeout(() => {
        document.getElementById("splash-screen").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("splash-screen").style.display = "none";
            document.getElementById("welcome-screen").style.display = "flex";
            startTypingAnimation("typing-text", "Welcome!");
        }, 1000);
    }, 3000);

    // Swipe Up Gesture Detection
    let touchStartY = 0;
    let touchEndY = 0;

    document.addEventListener("touchstart", (e) => {
        touchStartY = e.touches[0].clientY;
    });

    document.addEventListener("touchend", (e) => {
        touchEndY = e.changedTouches[0].clientY;
        if (touchStartY - touchEndY > 50) {
            document.getElementById("welcome-screen").style.display = "none";
            document.getElementById("main-page").style.display = "flex";
        }
    });

    console.log("JavaScript loaded successfully!"); // Debugging
});

// Typing Animation Function
function startTypingAnimation(elementId, text) {
    let element = document.getElementById(elementId);
    if (!element) {
        console.error("startTypingAnimation: Element not found:", elementId);
        return;
    }

    let index = 0;
    function typeCharacter() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeCharacter, 100);
        }
    }
    element.innerHTML = "";
    typeCharacter();
}

// Redirect Function
function redirectTo(url) {
    console.log("redirectTo: Redirecting to", url);
    window.location.href = url;
}

// Info Page Functions
function goToInfoPage() {
     console.log("goToInfoPage: Displaying info page");
    document.getElementById("main-page").style.display = "none";
    document.getElementById("info-page").style.display = "block";
}

function goToMainPage() {
    console.log("goToMainPage: Displaying main page");
    document.getElementById("info-page").style.display = "none";
    document.getElementById("main-page").style.display = "flex";
}
hiding welcome screen, showing main page"); // Debugging
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
