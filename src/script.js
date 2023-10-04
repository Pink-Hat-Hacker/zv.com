const spaceship = document.getElementById('spaceship');
let lasers = [];

let spaceshipPosition = 50;
var audio = new Audio('audio/laser_sound.mp3');

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        spaceshipPosition -= 20;
    } else if (event.key === 'ArrowRight') {
        spaceshipPosition += 20;
    } else if (event.key === ' ') {
        audio.play();

        const laser = document.createElement('div');
        laser.classList.add('laser');

        // Center the laser relative to the spaceship
        const spaceshipRect = spaceship.getBoundingClientRect();
        const spaceshipCenterX = spaceshipRect.left + spaceshipRect.width / 2;
        laser.style.left = spaceshipCenterX - 2.5 + 'px'; // 2.5 is half the width of the laser
        laser.style.bottom = '60px';
        document.body.appendChild(laser);
        lasers.push(laser);
        
    }

    spaceship.style.left = spaceshipPosition + 'px';
});

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('.modal');
    const closeModal = document.querySelector('.close-modal');

    // Show the modal on page load
    modal.style.display = 'block';

    // Close the modal when clicking the close button
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close the modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
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
