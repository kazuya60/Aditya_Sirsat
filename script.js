console.log("Script is running");
// Get game ID from the URL
console.log("Query String:", window.location.search);

const params = new URLSearchParams(window.location.search);
console.log("Params Object:", params);
const gameId = params.get("id");
console.log("Extracted Game ID:", gameId);

console.log("Game ID:", gameId);
if (!gameId) {
    console.error("Game ID is missing from the URL");
}


// Show a message box when a human is detected
function showMessage() {
    const messageBox = document.querySelector('.robot-detected');
    if (messageBox) {
        messageBox.classList.remove('hidden');
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".expandable-image");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = lightbox.querySelector(".lightbox-image");
    const closeBtn = lightbox.querySelector(".close");
    const prevBtn = lightbox.querySelector(".prev");
    const nextBtn = lightbox.querySelector(".next");

    let currentIndex = 0; // Track the current image index

    // Open Lightbox
    images.forEach((image, index) => {
        image.addEventListener("click", () => {
            currentIndex = index; // Set the current image index
            updateLightboxImage();
            lightbox.style.display = "flex"; // Show the lightbox
        });
    });

    // Update Lightbox Image
    function updateLightboxImage() {
        lightboxImage.src = images[currentIndex].src;
    }

    // Close Lightbox
    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none"; // Hide the lightbox
    });

    // Close Lightbox on Click Outside Image
    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

    // Show Previous Image
    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Wrap around to the last image
        updateLightboxImage();
    });

    // Show Next Image
    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length; // Wrap around to the first image
        updateLightboxImage();
    });
});

// **Contact Form Logic (Specific to contact.html)**
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        console.log("Contact page detected, adding form submission logic");
        contactForm.addEventListener("submit", function (event) {
            const emailInput = document.getElementById("email");
            const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

            // Validate email
            if (!emailRegex.test(emailInput.value)) {
                alert("Please enter a valid email address (e.g., user@example.com)");
                emailInput.focus();
                event.preventDefault(); // Prevent form submission
            } else {
                alert("TRANSMISSION_SENT: Message received by system");
            }
        });
    }
});



// Example function for sending data (optional)
function sendFormData() {
    // Logic for sending form data via AJAX or Fetch API
    console.log("Form data sent to the server!");
}

// Mock data for the games
const games = {
    game1: {
        title: "Cataclysm",
        description: "Yooow Wassup Niggas",
        platforms: "PC, Mobile , refrigerator",
        engine: "Unity",
        role: "Game Developer",
        responsibilities: "Coding, Art, Design",
        youtube: "https://youtu.be/aLLbO-9w3hM?si=emFGO2PdUur9ciJj",
        itch: "https://example1.itch.io",
        gif: "game1-preview.gif",
        screenshots: ["screenshot1.jpg", "screenshot2.jpg"],
    },
    game2: {
        title: "Game 2 Title",
        description: "This is a short description for Game 2.",
        platforms: "Console",
        engine: "Unreal",
        role: "Designer",
        responsibilities: "Level Design, QA",
        youtube: "https://youtu.be/aLLbO-9w3hM?si=emFGO2PdUur9ciJj",
        itch: "https://example2.itch.io",
        gif: "game2-preview.gif",
        screenshots: ["screenshot3.jpg", "screenshot4.jpg"],
    },
};


document.addEventListener("DOMContentLoaded", () => {
    console.log("We just ran this");

    if (games[gameId]) {
        console.log("Populating game details for ID:", gameId); // Debugging
        console.log("We ran hope it worked");

        const game = games[gameId];

        // Populate the page with game details
        document.getElementById("game-title").innerText = game.title;
        document.getElementById("short-description").innerText = game.description;
        document.getElementById("platforms").innerText = game.platforms;
        document.getElementById("engine").innerText = game.engine;
        document.getElementById("role").innerText = game.role;
        document.getElementById("responsibilities").innerText = game.responsibilities;
        document.getElementById("youtube-video").src = game.youtube;
        document.getElementById("itch-link").href = game.itch;

        const gifElement = document.getElementById("main-gif");
        if (gifElement) {
            gifElement.src = game.gif;
        } else {
            console.warn("Main GIF element not found");
        }

        // Add screenshots
        const screenshotsContainer = document.getElementById("screenshots-container");
        if (screenshotsContainer) {
            game.screenshots.forEach((screenshot) => {
                const img = document.createElement("img");
                img.src = screenshot;
                img.className = "expandable-image";
                screenshotsContainer.appendChild(img);
            });
        } else {
            console.warn("Screenshots container not found");
        }
    } else {
        console.error("Game data not found for ID:", gameId);
    }

    const titleElement = document.getElementById("game-title");
if (titleElement) {
    titleElement.innerText = game.title;
} else {
    console.error("Element with ID 'game-title' not found");
}
});

console.log("Game Data for ID:", gameId, games[gameId]);







// Navigation buttons (example)
const prevProjectBtn = document.getElementById("prev-project");
if (prevProjectBtn) {
    prevProjectBtn.addEventListener("click", () => {
        // Navigate to the previous project
        console.log("Navigating to the previous project");
    });
} else {
    console.log("Previous Project button not found");
}

const nextProjectBtn = document.getElementById("next-project");
if (nextProjectBtn) {
    nextProjectBtn.addEventListener("click", () => {
        // Navigate to the next project
        console.log("Navigating to the next project");
    });
} else {
    console.log("Next Project button not found");
}


// Log for debugging
console.log("Script execution complete");