// Basic form submission handler
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    alert('Thank you for your message! I will get back to you shortly.');
    this.reset(); // Reset the form fields
});
