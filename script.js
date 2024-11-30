// Show a message box when a human is detected
function showMessage() {
    const messageBox = document.querySelector('.robot-detected');
    if (messageBox) {
        messageBox.classList.remove('hidden');
    }
}

// Form validation and submission
document.getElementById("contact-form").addEventListener("submit", function (event) {
    const emailInput = document.getElementById("email");
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

    // Validate email
    if (!emailRegex.test(emailInput.value)) {
        alert("Please enter a valid email address (e.g., user@example.com)");
        emailInput.focus();
        return; // Exit early if validation fails
    }

    // If email is valid, show a success message and handle submission
    alert('TRANSMISSION_SENT: Message received by system');
    showMessage();

    // Redirect to thankyou.html
    window.location.href = "thankyou.html";
});

// Example function for sending data (optional)
function sendFormData() {
    // Logic for sending form data via AJAX or Fetch API
    console.log("Form data sent to the server!");
}

// Mock data for the games
const games = {
    game1: {
        title: "Game 1 Title",
        description: "This is a short description for Game 1.",
        platforms: "PC, Mobile",
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

// Get game ID from the URL
const params = new URLSearchParams(window.location.search);
const gameId = params.get("id");

if (games[gameId]) {
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
    document.getElementById("main-gif").src = game.gif;

    // Add screenshots
    const screenshotsContainer = document.getElementById("screenshots-container");
    game.screenshots.forEach((screenshot) => {
        const img = document.createElement("img");
        img.src = screenshot;
        img.className = "profile-image";
        screenshotsContainer.appendChild(img);
    });
}

// Navigation buttons (example)
document.getElementById("prev-project").addEventListener("click", () => {
    // Navigate to the previous project
    console.log("Navigating to the previous project");
});

document.getElementById("next-project").addEventListener("click", () => {
    // Navigate to the next project
    console.log("Navigating to the next project");
});
