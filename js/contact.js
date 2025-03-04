function sendEmail(e) {
  e.preventDefault();

  // Get the form data
  const form = document.getElementById("contact-form");
  const formData = new FormData(form);

  // Show loading state
  const submitButton = form.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;
  submitButton.textContent = "Sending...";
  submitButton.disabled = true;

  // Send email using EmailJS
  emailjs
    .send("service_8ngyi1l", "template_fk8qcsc", {
      from_name: formData.get("user_name"),
      from_email: formData.get("user_email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    })
    .then(
      function (response) {
        // Show success message
        alert("Thank you! Your message has been sent successfully.");
        form.reset();
      },
      function (error) {
        // Show error message
        alert(
          "Sorry, there was an error sending your message. Please try again later."
        );
        console.error("EmailJS Error:", error);
      }
    )
    .finally(function () {
      // Reset button state
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    });

  return false;
}
