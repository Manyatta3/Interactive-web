// ---------------------------
// FORM VALIDATION
// ---------------------------
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent default form submission
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("formMessage");

  // Custom validation logic
  if (username.length < 3) {
    message.textContent = "Username must be at least 3 characters long.";
    message.style.color = "red";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    message.textContent = "Please enter a valid email.";
    message.style.color = "red";
    return;
  }

  if (password.length < 6) {
    message.textContent = "Password must be at least 6 characters.";
    message.style.color = "red";
    return;
  }

  message.textContent = "Form submitted successfully!";
  message.style.color = "green";
});

// ---------------------------
// CLICK COUNTER FEATURE
// ---------------------------
let count = 0;
document.getElementById("countBtn").addEventListener("click", function () {
  count++;
  document.getElementById("countDisplay").textContent = count;
});

// ---------------------------
// BACKGROUND COLOR CHANGER FEATURE
// ---------------------------
const colors = ["lightblue", "lightgreen", "lightpink", "lightyellow", "lavender"];
document.getElementById("colorBtn").addEventListener("click", function () {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});
