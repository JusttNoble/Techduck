const contactForm = document.getElementById('contact-form');
const feedback = document.querySelector('.form-feedback');

function sendForm(event) {
    event.preventDefault();

    const serviceID = 'service_3x1jn1q';
    const templateID = 'template_3b50iqe';

    emailjs.sendForm(serviceID, templateID, contactForm)
        .then(function () {
            feedback.textContent = 'Message sent successfully!';
            feedback.style.color = '#10b981';
            contactForm.reset();
        }, function (error) {
            feedback.textContent = 'There was an error sending your message. Please try again.';
            feedback.style.color = '#ef4444';
            console.error('EmailJS error:', error);
        });
}

/* Optional: hide back-to-top button until scroll triggers it */
const backToTopBtn = document.querySelector('.back-to-top');
if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
}
