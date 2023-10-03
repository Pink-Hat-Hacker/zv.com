const spaceship = document.getElementById('spaceship');
let lasers = [];

let spaceshipPosition = 50;

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        spaceshipPosition -= 20;
    } else if (event.key === 'ArrowRight') {
        spaceshipPosition += 20;
    } else if (event.key === ' ') {
        const laser = document.createElement('div');
        laser.classList.add('laser');
        laser.style.left = spaceshipPosition + 50 + 'px';
        laser.style.bottom = '100px';
        document.body.appendChild(laser);
        lasers.push(laser);
    }

    spaceship.style.left = spaceshipPosition + 'px';
});

function moveLasers() {
    lasers.forEach((laser) => {
        const laserBottom = parseInt(laser.style.bottom);
        const laserLeft = parseInt(laser.style.left);

        // Check for collision with aliens
        const aliens = document.querySelectorAll('.alien');
        aliens.forEach((alien) => {
            const alienRect = alien.getBoundingClientRect();
            if (
                laserBottom >= alienRect.top &&
                laserLeft >= alienRect.left &&
                laserLeft <= alienRect.right
            ) {
                // Open the link in a new tab
                const alienLink = alien.getAttribute('href');
                window.open(alienLink, '_blank');
                
                laser.remove();
                lasers.shift();
            }
        });

        if (laserBottom >= window.innerHeight) {
            laser.remove();
            lasers.shift();
        } else {
            laser.style.bottom = laserBottom + 5 + 'px';
        }
    });
    requestAnimationFrame(moveLasers);
}

moveLasers();
