// rating-section.js

// Rating system functionality
const stars = document.querySelectorAll('.star');
let rating = 0;

// Handle star click to set rating
stars.forEach(star => {
    star.addEventListener('click', () => {
        rating = star.dataset.rating;
        // Update the active stars based on the selected rating
        stars.forEach(star => {
            if (star.dataset.rating <= rating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    });
});

// Handle feedback submission
const feedbackButton = document.getElementById('submit-feedback');
const feedbackTextarea = document.getElementById('feedback');

feedbackButton.addEventListener('click', () => {
    const feedback = feedbackTextarea.value.trim();
    if (feedback !== '') {
        alert(`Thank you for your feedback!\nRating: ${rating} stars\nFeedback: ${feedback}`);
        // Here you can send feedback and rating to the server or store it in a database
        feedbackTextarea.value = ''; // Clear the textarea
    } else {
        alert('Please provide your feedback!');
    }
});
