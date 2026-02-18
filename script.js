// Simple script to handle dynamic date updates if needed
// For now, it sets the static date requested, but could easily be live.

document.addEventListener('DOMContentLoaded', () => {
    // The prompt requested "Monday, February 16" specifically.
    // I will adhere to the prompt but allow for live updates if uncommented.
    
    // updateDate(); 
    // setInterval(updateDate, 60000); // Update every minute
    
    // Add a subtle entrance animation
    const card = document.querySelector('.weather-card');
    if (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';

        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    }
});

function updateDate() {
    const dateElement = document.getElementById('current-date');
    if (!dateElement) return;
    
    const now = new Date();
    
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    dateElement.textContent = now.toLocaleDateString('en-US', options);
}
