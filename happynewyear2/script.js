// Countdown Timer
function updateCountdown() {
    const now = new Date();
    const newYear = new Date('2025-01-01T00:00:00');
    const diff = newYear - now;

    if (diff <= 0) {
        document.querySelector('.countdown').innerHTML = "HAPPY NEW YEAR 2025! 🎉";
        return;
    }

    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

// Add interactive effects to the year numbers
const yearSpans = document.querySelectorAll('.year span');
yearSpans.forEach(span => {
    span.addEventListener('mouseover', () => {
        span.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        span.style.transform = 'scale(1.5) rotate(360deg)';
        setTimeout(() => {
            span.style.color = '';
            span.style.transform = '';
        }, 1000);
    });
});

// Create stars in the background
function createStars() {
    const stars = document.querySelector('.stars');
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        stars.appendChild(star);
    }
}

// Initialize stars
createStars();

// Add smooth color transitions to the SVG frame
const svgPaths = document.querySelectorAll('.svg-frame path');
setInterval(() => {
    svgPaths.forEach(path => {
        path.style.stroke = `hsl(${Math.random() * 360}, 100%, 50%)`;
    });
}, 3000);
