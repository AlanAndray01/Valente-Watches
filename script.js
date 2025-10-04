// Menu toggle function
function toggleMenu() {
  document.querySelector("ul").classList.toggle("active");
}

// Login page per janai ka liyai js

document.getElementById("loginBtn").addEventListener("click", () => {
  window.location.href = "login.html"; // Redirect to login
});

document.getElementById("signupBtn").addEventListener("click", () => {
  window.location.href = "signup.html"; // Redirect to signup
});