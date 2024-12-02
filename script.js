console.log("Script is running");

// ==========================
// Utility: Parse URL Parameters
// ==========================
console.log("Query String:", window.location.search);
const params = new URLSearchParams(window.location.search);
console.log("Params Object:", params);
const gameId = params.get("id");
console.log("Extracted Game ID:", gameId);

if (!gameId) {
    console.error("Game ID is missing from the URL");
}

// ==========================
// Populate Game Details (Immediately After gameId Check)
// ==========================
populateGameDetails(); // Immediately populate game details

// ==========================
// DOMContentLoaded Event
// ==========================


document.addEventListener("DOMContentLoaded", () => {
    initializeGameGrid();
    initializeLightbox();
    setupContactFormValidation();
    setupSocialLinks();
    setupNavigationButtons();
});

// ==========================
// Game Grid Initialization
// ==========================
function initializeGameGrid() {
    const games = [
        {
            id: "game1",
            name: "Cataclysm",
            thumbnail: "./img/file (1).mp4",
            tags: ["Unity", "C#", "Racing", "Arcade"],
            itchLink: "https://kazuya-minegishi.itch.io/cataclysm",
        },
        {
            id: "game2",
            name: "Boom Crates",
            thumbnail: "./img/file.mp4",
            tags: ["Unity", "C#", "HyperCasual"],
            itchLink: "https://kazuya-minegishi.itch.io/boom-crates",
        },
        {
            id: "game3",
            name: "Beyond Heights - Attack on Titan like game",
            thumbnail: "./img/aot_video.mp4",
            tags: ["Unity", "C#", "Simulation", "Parkour", "Anime", "AOT"],
            itchLink: "https://kazuya-minegishi.itch.io/beyond-heights-attack-on-titan-like-game",
        },

        
    ];

    const gameGrid = document.querySelector(".game-grid");
    if (!gameGrid) {
        console.error("Game grid container not found.");
        return;
    }

    gameGrid.innerHTML = ""; // Clear existing content
    games.forEach((game) => {
        const card = document.createElement("div");
        card.className = "game-card";
        card.innerHTML = `
            <a href="game.html?id=${game.id}">
                <video 
                    src="${game.thumbnail}" 
                    class="game-thumbnail" 
                    autoplay 
                    muted 
                    loop 
                    preload="auto">
                    Your browser does not support the video tag.
                </video>
                <div class="game-info">
                    <h3>${game.name}</h3>
                    <div class="project-tags">
                        ${game.tags.map((tag) => `<span class="project-tag">${tag}</span>`).join("")}
                    </div>
                    <div class="project-links">
                        <a href="${game.itchLink}" class="project-link" target="_blank">Itch.io</a>
                    </div>
                </div>
            </a>
        `;
        gameGrid.appendChild(card);
    });
}

// ==========================
// Lightbox Functionality
// ==========================
function initializeLightbox() {
    const images = document.querySelectorAll(".expandable-image");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = lightbox?.querySelector(".lightbox-image");
    const closeBtn = lightbox?.querySelector(".close");
    const prevBtn = lightbox?.querySelector(".prev");
    const nextBtn = lightbox?.querySelector(".next");

    console.log("Number of expandable images found:", images.length);

    if (!lightbox || !lightboxImage || !closeBtn || !prevBtn || !nextBtn) {
        console.error("Lightbox elements not found.");
        return;
    }

    let currentIndex = 0;

    images.forEach((image, index) => {
        image.addEventListener("click", () => {
            currentIndex = index;
            updateLightboxImage();
            lightbox.style.display = "flex";
        });
    });

    function updateLightboxImage() {
        lightboxImage.src = images[currentIndex].src;
    }

    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateLightboxImage();
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateLightboxImage();
    });
}

// ==========================
// Contact Form Validation
// ==========================
function setupContactFormValidation() {
    const contactForm = document.getElementById("contact-form");
    if (!contactForm) return;

    contactForm.addEventListener("submit", function (event) {
        const emailInput = document.getElementById("email");
        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

        if (!emailRegex.test(emailInput.value)) {
            alert("Please enter a valid email address (e.g., user@example.com)");
            emailInput.focus();
            event.preventDefault();
        } else {
            alert("TRANSMISSION_SENT: Message received by system");
        }
    });
}

// ==========================
// Social Links Setup
// ==========================
function setupSocialLinks() {
    const socialLinksData = [
        { href: "https://github.com/kazuya60", icon: `<svg class="social-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#3B82F6" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>` },
        { href: "https://www.linkedin.com/in/aditya-sirsat-7b4653258/", icon: `<svg class="social-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#3B82F6" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>` },
        { href: "https://youtube.com/@kazuya_minegishi", icon: `<svg class="social-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#3B82F6" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>` },

        { href: "https://kazuya-minegishi.itch.io/", icon: `<svg class="social-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#3B82F6" d="M3.13 1.338C2.08 1.96.02 4.328 0 4.95v1.03c0 1.303 1.22 2.45 2.325 2.45 1.33 0 2.436-1.102 2.436-2.41 0 1.308 1.07 2.41 2.4 2.41 1.328 0 2.362-1.102 2.362-2.41 0 1.308 1.137 2.41 2.466 2.41h.024c1.33 0 2.466-1.102 2.466-2.41 0 1.308 1.034 2.41 2.363 2.41 1.33 0 2.4-1.102 2.4-2.41 0 1.308 1.106 2.41 2.435 2.41C22.78 8.43 24 7.282 24 5.98V4.95c-.02-.62-2.082-2.99-3.13-3.612-3.253-.114-5.508-.134-8.87-.133-3.362 0-7.945.053-8.87.133zm6.376 6.477a2.74 2.74 0 0 1-.468.602c-.5.49-1.19.795-1.947.795a2.786 2.786 0 0 1-1.95-.795c-.182-.178-.32-.37-.446-.59-.127.222-.303.412-.486.59a2.788 2.788 0 0 1-1.95.795c-.092 0-.187-.025-.264-.052-.107 1.113-.152 2.176-.168 2.95v.005l-.006 1.167c.02 2.334-.23 7.564 1.03 8.85 1.952.454 5.545.662 9.15.663 3.605 0 7.198-.21 9.15-.664 1.26-1.284 1.01-6.514 1.03-8.848l-.006-1.167v-.004c-.016-.775-.06-1.838-.168-2.95-.077.026-.172.052-.263.052a2.788 2.788 0 0 1-1.95-.795c-.184-.178-.36-.368-.486-.59-.127.22-.265.412-.447.59a2.786 2.786 0 0 1-1.95.794c-.76 0-1.446-.303-1.948-.793a2.74 2.74 0 0 1-.468-.602 2.738 2.738 0 0 1-.463.602 2.787 2.787 0 0 1-1.95.794h-.16a2.787 2.787 0 0 1-1.95-.793 2.738 2.738 0 0 1-.464-.602zm-2.004 2.59v.002c.795.002 1.5 0 2.373.953.687-.072 1.406-.108 2.125-.107.72 0 1.438.035 2.125.107.873-.953 1.578-.95 2.372-.953.376 0 1.876 0 2.92 2.934l1.123 4.028c.832 2.995-.266 3.068-1.636 3.07-2.03-.075-3.156-1.55-3.156-3.025-1.124.184-2.436.276-3.748.277-1.312 0-2.624-.093-3.748-.277 0 1.475-1.125 2.95-3.156 3.026-1.37-.004-2.468-.077-1.636-3.072l1.122-4.027c1.045-2.934 2.545-2.934 2.92-2.934zM12 12.714c-.002.002-2.14 1.964-2.523 2.662l1.4-.056v1.22c0 .056.56.033 1.123.007.562.026 1.124.05 1.124-.008v-1.22l1.4.055C14.138 14.677 12 12.713 12 12.713z"/>
                  </svg>` },

        { href: "mailto:eternalsirsat@gmail.com", icon: `<svg class="social-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill="#3B82F6" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
        </svg>` },
    ];

    const socialLinksContainer = document.querySelector(".social-links");
    if (!socialLinksContainer) {
        console.error("Social links container not found.");
        return;
    }

    socialLinksData.forEach((link) => {
        const a = document.createElement("a");
        a.href = link.href;
        a.target = "_blank";
        a.className = "social-link"
        a.rel = "noopener noreferrer";
        a.innerHTML = link.icon;
        socialLinksContainer.appendChild(a);
    });
}

// ==========================
// Game Details Population
// ==========================
function populateGameDetails() {
    const games = { game1: {
        title: "Cataclysm",
        description: "Cataclysm is an arcade racing game I made as a part of my solo project,in Unity Game Engine.",
        platforms: "PC",
        engine: "Unity",
        role: "Game Developer,Game Programmer",
        responsibilities: "Coding, Design",
        youtube: "https://www.youtube.com/embed/L1cWN0QeGqk?si=ltntUkNMecJVp4k7",
        itch: "https://kazuya-minegishi.itch.io/cataclysm",
        gif: "./img/Car.mp4",
        screenshots: ["./img/car1.png", "./img/car2.png","./img/car3.png"],
    },

    game2: {
        title: "BOOM CRATES",
description: "Boom Crates is a Slice and destroy game made in Unity engine, where you have to destroy as many crates as possible and score as high as you can! It is a clone of the Famous game \"Fruit Ninja\".",        
        
        platforms: "PC, Android",
        engine: "Unity",
        role: "Game Developer,Game Programmer",
        responsibilities: "Coding, Design",
        youtube: "https://www.youtube.com/embed/9-ZPf0PP_aw?si=50EcKSUb5i9wdSM_",
        itch: "https://kazuya-minegishi.itch.io/boom-crates",
        gif: "./img/file.mp4",
        screenshots: ["./img/fruit1.png", "./img/fruit2.png","./img/fruit3.png","./img/fruit4.png"],
    },

    game3: {
        title: "Beyond Heights - Attack on Titan like game",
description: "Beyond Heights is a thrilling first-person action game inspired by Attack on Titan, showcasing dynamic ODM Gear mechanics. Soar through the skies with dual grappling hooks, perform wall runs for unmatched mobility, and dash to outmaneuver enemies. Explore a feature-rich level designed to test all the mechanics implemented from scratch.",        
        
        platforms: "PC",
        engine: "Unity",
        role: "Game Developer,Game Programmer",
        responsibilities: "Coding, Design",
        youtube: "https://www.youtube.com/embed/RR5r8Z81N-s?si=n6Nr7nPZ-8LtHwbv",
        itch: "https://kazuya-minegishi.itch.io/beyond-heights-attack-on-titan-like-game",
        gif: "./img/aot_video.mp4",
        screenshots: ["./img/aot1.png", "./img/aot2.png","./img/aot3.png"],
    },

};
    const game = games[gameId];
    if (!game) {
        console.error("Game data not found for ID:", gameId);
        return;
    }

    document.getElementById("game-title").innerText = game.title || "";
    document.getElementById("short-description").innerText = game.description || "";
    document.getElementById("platforms").innerText = game.platforms || "";
        document.getElementById("engine").innerText = game.engine || "";
        document.getElementById("role").innerText = game.role || "";
        document.getElementById("responsibilities").innerText = game.responsibilities || "";
        document.getElementById("youtube-video").src = game.youtube || "";
        document.getElementById("itch-link").href = game.itch || "";

    // Additional fields...

    // Handle screenshots
    const screenshotsContainer = document.getElementById("screenshots-container");
    if (screenshotsContainer) {
        screenshotsContainer.innerHTML = ""; // Clear any existing content
        game.screenshots.forEach((screenshot) => {
            const img = document.createElement("img");
            img.src = screenshot;
            img.className = "expandable-image";
            screenshotsContainer.appendChild(img);
        });
    } else {
        console.warn("Screenshots container not found");
    }

    // Handle main video preview
    const videoContainer = document.querySelector(".video-container2");
    if (videoContainer) {
        videoContainer.innerHTML = ""; // Clear existing content

        const videoElement = document.createElement("video");
        videoElement.className = "game-thumbnail";
        videoElement.autoplay = true;
        videoElement.muted = true;
        videoElement.loop = true;
        videoElement.preload = "auto";

        const sourceElement = document.createElement("source");
        sourceElement.src = game.gif;
        sourceElement.type = "video/mp4";

        videoElement.appendChild(sourceElement);
        videoContainer.appendChild(videoElement);
    } else {
        console.warn("Video container not found");
    }
    
}

// ==========================
// Navigation Buttons
// ==========================
function setupNavigationButtons() {
    // Dynamically generate the game order from the keys of the game object
    const games = {
        game1: { title: "Cataclysm" },
        game2: { title: "Boom Crates" },
        game3: { title: "Beyond Heights" },
    };

    const gamesOrder = Object.keys(games); // Get game IDs as an array
    const currentIndex = gamesOrder.indexOf(gameId); // Find the index of the current game
    const prevProjectBtn = document.getElementById("prev-project");
    const nextProjectBtn = document.getElementById("next-project");

    // Navigate to the previous project
    if (prevProjectBtn) {
        prevProjectBtn.addEventListener("click", () => {
            if (currentIndex > 0) {
                const prevGameId = gamesOrder[currentIndex - 1];
                window.location.href = `game.html?id=${prevGameId}`; // Redirect to the previous game's page
            } else {
                alert("This is the first project!"); // Handle edge case
            }
        });
    } else {
        console.log("Previous Project button not found");
    }

    // Navigate to the next project
    if (nextProjectBtn) {
        nextProjectBtn.addEventListener("click", () => {
            if (currentIndex < gamesOrder.length - 1) {
                const nextGameId = gamesOrder[currentIndex + 1];
                window.location.href = `game.html?id=${nextGameId}`; // Redirect to the next game's page
            } else {
                alert("This is the last project!"); // Handle edge case
            }
        });
    } else {
        console.log("Next Project button not found");
    }
}


// Final log for debugging
console.log("Script execution complete");
