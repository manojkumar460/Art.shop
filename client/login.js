// Pre-set username and password for validation
const presetUsername = "art";
const presetPassword = "123";

// Get the form and input elements
const form = document.querySelector('#login-form');
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

// Error message container
const errorMessage = document.createElement('p');
errorMessage.id = "error-message";
document.querySelector('.login-container').appendChild(errorMessage);

// Form validation and preventing submission if fields are incorrect
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  // Clear previous error
  errorMessage.textContent = "";
  usernameInput.classList.remove("error");
  passwordInput.classList.remove("error");

  const username = usernameInput.value;
  const password = passwordInput.value;

  // Validate username and password
  if (username === presetUsername && password === presetPassword) {
    alert("Login successful!");
    // Redirect to the main page or handle after login
    window.location.href = "index.html"; // Change the redirect URL as needed
  } else {
    // Show error message and highlight the fields
    errorMessage.textContent = "Incorrect username or password.";
    usernameInput.classList.add("error");
    passwordInput.classList.add("error");
  }
});

// Password visibility toggle functionality
const togglePasswordButton = document.getElementById("togglePassword");

togglePasswordButton.addEventListener("click", function () {
  const type = passwordInput.type === "password" ? "text" : "password";
  passwordInput.type = type;
  // Optionally change the button text/icon
  togglePasswordButton.textContent = type === "password" ? "👁️" : "🙈";
});

// Redirect to signup page (for demonstration)
document.getElementById('signupLink').addEventListener('click', function(e) {
  e.preventDefault();
  alert("Redirecting to Sign-Up page...");
  // Redirect to a signup page or form (update URL as needed)
  window.location.href = "signup.html"; // Change this URL to your sign-up page
});
