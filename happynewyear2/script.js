// Add interactive effects to the letters
const letters = document.querySelectorAll('.happy-new-year span');
letters.forEach(letter => {
    letter.addEventListener('mouseover', () => {
        letter.style.transform = 'scale(1.5) rotate(360deg)';
        letter.style.filter = 'brightness(1.5)';
        setTimeout(() => {
            letter.style.transform = '';
            letter.style.filter = '';
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
