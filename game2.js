const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let spaceship = {
    x: canvas.width / 2 - 25,
    y: canvas.height - 60,
    width: 50,
    height: 50,
    speed: 5,
    dx: 0
};

let bullets = [];
let enemies = [];
let score = 0;
let timer = 60;
let gameOver = false;
let intervalId;

// Schips tekenen
function drawSpaceship() {
    ctx.fillStyle = 'lightblue';
    ctx.fillRect(spaceship.x, spaceship.y, spaceship.width, spaceship.height);
}

// Kogels tekenen
function drawBullets() {
    ctx.fillStyle = 'yellow';
    bullets.forEach(bullet => {
        ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
        bullet.y -= bullet.speed;
    });
    bullets = bullets.filter(bullet => bullet.y > 0);
}

// Vijanden genereren en tekenen
function createEnemy() {
    const enemy = {
        x: Math.random() * (canvas.width - 50),
        y: 0,
        width: 50,
        height: 50,
        speed: 2
    };
    enemies.push(enemy);
}

function drawEnemies() {
    ctx.fillStyle = 'red';
    enemies.forEach(enemy => {
        ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
        enemy.y += enemy.speed;
    });
    enemies = enemies.filter(enemy => enemy.y < canvas.height);
}

// Botsingen detecteren
function checkCollisions() {
    bullets.forEach(bullet => {
        enemies.forEach((enemy, enemyIndex) => {
            if (
                bullet.x < enemy.x + enemy.width &&
                bullet.x + bullet.width > enemy.x &&
                bullet.y < enemy.y + enemy.height &&
                bullet.y + bullet.height > enemy.y
            ) {
                enemies.splice(enemyIndex, 1); // Verwijder vijand
                score += 10;
                document.getElementById('score').textContent = score;
            }
        });
    });

    enemies.forEach(enemy => {
        if (
            spaceship.x < enemy.x + enemy.width &&
            spaceship.x + spaceship.width > enemy.x &&
            spaceship.y < enemy.y + enemy.height &&
            spaceship.y + spaceship.height > enemy.y
        ) {
            endGame("GAME OVER");
        }
    });
}

// Ruimteschip beweging
function moveSpaceship() {
    spaceship.x += spaceship.dx;

    if (spaceship.x < 0) spaceship.x = 0;
    if (spaceship.x + spaceship.width > canvas.width) spaceship.x = canvas.width - spaceship.width;
}

// Schieten
function shoot() {
    const bullet = {
        x: spaceship.x + spaceship.width / 2 - 2.5,
        y: spaceship.y,
        width: 5,
        height: 10,
        speed: 7
    };
    bullets.push(bullet);
}

// Teken alles op het canvas
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSpaceship();
    drawBullets();
    drawEnemies();
    checkCollisions();
}

// Timer updaten
function updateTimer() {
    if (!gameOver) {
        timer--;
        document.getElementById('timer').textContent = timer;

        if (timer <= 0) {
            endGame("Tijd is om!");
        }
    }
}

// Spel beëindigen
function endGame(message) {
    clearInterval(intervalId);
    gameOver = true;
    document.getElementById('game-over-message').textContent = message;
    document.getElementById('highscore').textContent = score;
    document.getElementById('end-screen').classList.remove('hidden');
}

// Game herstarten
function restartGame() {
    location.reload(); // Herlaadt de pagina om het spel opnieuw te starten
}

// Game afsluiten
function closeGame() {
    window.close(); // Sluit het huidige tabblad/venster
}

// Update en loop
function update() {
    if (!gameOver) {
        moveSpaceship();
        draw();
    }
    requestAnimationFrame(update);
}

// Keydown event
function keyDown(e) {
    if (e.key === 'ArrowRight') {
        spaceship.dx = spaceship.speed;
    } else if (e.key === 'ArrowLeft') {
        spaceship.dx = -spaceship.speed;
    } else if (e.key === ' ') {
        shoot();
    }
}

// Keyup event
function keyUp(e) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        spaceship.dx = 0;
    }
}

// Vijanden aanmaken elke paar seconden
setInterval(createEnemy, 1000);

// Start timer
intervalId = setInterval(updateTimer, 1000);

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

update();
