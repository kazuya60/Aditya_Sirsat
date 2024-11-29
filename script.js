// Show a message box when a human is detected
function showMessage() {
    const messageBox = document.querySelector('.human-detected');
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
        event.preventDefault(); // Prevent form submission
        alert("Please enter a valid email address (e.g., user@example.com)");
        emailInput.focus();
        return; // Exit early if validation fails
    }

    // If email is valid, show a success message and handle submission
    event.preventDefault(); // Prevent default submission for now
    alert('TRANSMISSION_SENT: Message received by system');
    
    // Call other logic here, e.g., showMessage();
    showMessage();

    // You can replace this with actual submission logic, like sending data to a server
    // Example: sendFormData();
});

// Example function for sending data (optional)
function sendFormData() {
    // Logic for sending form data via AJAX or Fetch API
    console.log("Form data sent to the server!");
}
