async function submitForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Validate if all fields are filled
  if (!name || !email || !message) {
      alert("Please fill all fields.");
      return;
  }

  const formData = { name, email, message };

  try {
      // Sending data to FastAPI backend
      const response = await fetch('http://127.0.0.1:8000/submit-form', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
          alert(result.message);  // Success message
      } else {
          alert(result.detail || "Something went wrong.");
      }

  } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
  }
}