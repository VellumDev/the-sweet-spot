document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', async (event) => {
            event.preventDefault(); // Stop the default form submission

            formStatus.textContent = 'Sending your message...';
            formStatus.style.color = '#8b4513'; // Match a theme color

            // Gather form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Basic client-side validation
            if (!formData.name || !formData.email || !formData.message) {
                formStatus.textContent = 'Please fill in all required fields (Name, Email, Message).';
                formStatus.style.color = 'red';
                return;
            }

            // --- IMPORTANT FOR LIVE WEBSITE ---
            // For a static site without a backend, you'll need a third-party form service.
            // Example using Formspree (free for basic use):
            // 1. Sign up at Formspree.io
            // 2. Create a new form, it will give you a unique URL.
            // 3. Modify your HTML form in `about.html`:
            // <form id="contact-form" action="https://formspree.io/f/YOUR_UNIQUE_FORM_ID" method="POST">
            // 4. If using Formspree or similar service with a direct POST,
            // you can remove this JavaScript `fetch` block and rely on the browser's native form submission.
            // Formspree handles the email sending and typically redirects to a success message page.

            // Simulating an API call for demonstration purposes:
            try {
                // Simulate network delay
                await new Promise(resolve => setTimeout(resolve, 2000));

                // If you had a backend (e.g., Python Flask, Node.js), this is where you'd use fetch:
                /*
                const response = await fetch('/api/contact', { // Your backend endpoint
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    formStatus.textContent = 'Message sent successfully! We will get back to you soon.';
                    formStatus.style.color = 'green';
                    contactForm.reset(); // Clear the form
                } else {
                    const errorData = await response.json();
                    formStatus.textContent = `Failed to send message: ${errorData.message || 'Please try again.'}`;
                    formStatus.style.color = 'red';
                }
                */

                // For a frontend-only demo:
                console.log('Form Data Submitted (simulated):', formData);
                formStatus.textContent = 'Message sent successfully! (This is a demo, no actual send occurred)';
                formStatus.style.color = 'green';
                contactForm.reset(); // Clear the form

            } catch (error) {
                console.error('Contact form submission error:', error);
                formStatus.textContent = 'An unexpected error occurred. Please try again later.';
                formStatus.style.color = 'red';
            }
        });
    }
});
