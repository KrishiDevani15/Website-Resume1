
document.getElementById("submitBtn").addEventListener("click", function(event) {
event.preventDefault();

var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var message = document.getElementById("message").value;

var errorMsg = document.getElementById("errorMsg");

// Simple form validation
if (name === "" || email === "" || message === "") {
  errorMsg.textContent = "Please fill out all fields.";
} else {
  // Here you can add code to submit the form or perform further actions
  alert("Form submitted successfully!");
  // Reset the form after submission (optional)
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
  errorMsg.textContent = ""; // Clear any previous error message
}
});
