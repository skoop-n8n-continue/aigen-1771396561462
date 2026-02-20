document.addEventListener('DOMContentLoaded', () => {
    // Entrance animations
    const card = document.querySelector('.weather-card');
    const forecastItems = document.querySelectorAll('.forecast-item');
    
    if (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';

        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    }

    // Staggered entry for forecast items
    forecastItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(20px)';
        item.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 500 + (index * 150));
    });

    // Update time/date if needed
    // updateDate();
});

function updateDate() {
    const dateElement = document.getElementById('current-date');
    if (!dateElement) return;
    const now = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    dateElement.textContent = now.toLocaleDateString('en-US', options);
}
