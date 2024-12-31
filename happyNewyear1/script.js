// Set up firework animations
const fireworks = document.querySelectorAll('.firework');
fireworks.forEach(firework => {
    setInterval(() => {
        firework.style.setProperty('--x', `${Math.random() * 100 - 50}%`);
        firework.style.setProperty('--initialY', '60%');
        firework.style.setProperty('--finalY', '0%');
    }, 2000);
});

// Add animation delays to greeting text
const greetingSpans = document.querySelectorAll('.greeting span');
greetingSpans.forEach((span, index) => {
    span.style.setProperty('--i', index + 1);
});

// Countdown Timer
function updateCountdown() {
    const now = new Date();
    const newYear = new Date('2024-01-01T00:00:00');
    const diff = newYear - now;

    if (diff <= 0) {
        document.querySelector('.countdown').innerHTML = "HAPPY NEW YEAR! 🎉";
        return;
    }

    const hours = Math.floor(diff / 1000 / 60 / 60);
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;

    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

// Add sparkle effect to 2024
const yearSpans = document.querySelectorAll('.year span');
yearSpans.forEach(span => {
    span.addEventListener('mouseover', () => {
        span.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        span.style.transform = 'scale(1.2)';
        setTimeout(() => {
            span.style.color = '#FFD700';
            span.style.transform = 'scale(1)';
        }, 500);
    });
});
