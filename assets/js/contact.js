// Contact Form Functionality
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    if (name && email && message) {
      // Simulate success response
      const responseElement = document.getElementById("formResponse");
      responseElement.textContent = "Thank you for reaching out! I'll get back to you soon.";
      responseElement.style.color = "green";
  
      // Clear form fields
      document.getElementById("contactForm").reset();
    } else {
      alert("Please fill out all fields.");
    }
  });
  