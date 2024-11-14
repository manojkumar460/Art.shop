// Get the form and input elements
const form = document.querySelector('#signup-form');
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// Password visibility toggle functionality
const togglePasswordButton = document.getElementById("togglePassword");

togglePasswordButton.addEventListener("click", function () {
  const type = passwordInput.type === "password" ? "text" : "password";
  passwordInput.type = type;
  // Optionally change the button text/icon
  togglePasswordButton.textContent = type === "password" ? "👁️" : "🙈";
});

// Form validation and submitting user data (for demonstration)
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission for demonstration

  // Get the username, email, and password values
  const username = usernameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  // Basic validation (username and password should not be empty)
  if (!username || !email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  // Log the data for demonstration
  console.log("Username: ", username);
  console.log("Email: ", email);
  console.log("Password: ", password);

  // Here, you can implement form submission logic (e.g., send data to a server)
  alert("Account created successfully!");

  // Optionally, redirect to the login page after successful registration
  window.location.href = "login.html"; // You can change the URL as needed
});
