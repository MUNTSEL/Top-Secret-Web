let gameArea = document.getElementById('game-area');
let playerCar = document.getElementById('player-car');
let gameOverScreen = document.getElementById('game-over');
let scoreElement = document.getElementById('score');
let timerElement = document.getElementById('timer');
let finalScoreElement = document.getElementById('final-score');
let isGameOver = false;
let obstacleInterval;
let obstacleSpeed = 10; // Verhoogd voor snellere beweging van de obstakels
let carSpeed = 15; // Snellere snelheid voor de auto
let score = 0;
let timer = 0;
let maxWidth = 250; // game-area width - player-car width
let timerInterval;
let collisionAudio = new Audio('collision.mp3'); // Voeg een geluidseffect toe voor botsingen
let moveAudio = new Audio('move.mp3'); // Voeg een geluidseffect toe voor het bewegen van de auto

document.addEventListener('keydown', moveCar);

function moveCar(e) {
    if (isGameOver) return;

    let currentLeft = parseInt(window.getComputedStyle(playerCar).getPropertyValue('left'));

    if (e.key === 'ArrowLeft' && currentLeft > 0) {
        playerCar.style.left = (currentLeft - carSpeed) + 'px';
        moveAudio.play();
    }

    if (e.key === 'ArrowRight' && currentLeft < maxWidth) {
        playerCar.style.left = (currentLeft + carSpeed) + 'px';
        moveAudio.play();
    }
}

function createObstacle() {
    if (isGameOver) return;

    let obstacle = document.createElement('div');
    obstacle.classList.add('obstacle');
    obstacle.style.left = Math.floor(Math.random() * maxWidth) + 'px';
    gameArea.appendChild(obstacle);

    let obstacleMove = setInterval(() => {
        let obstacleTop = parseInt(window.getComputedStyle(obstacle).getPropertyValue('top'));
        let playerLeft = parseInt(window.getComputedStyle(playerCar).getPropertyValue('left'));
        let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));

        if (obstacleTop > 400 && obstacleTop < 500 && obstacleLeft === playerLeft) {
            collisionAudio.play();
            endGame();
            clearInterval(obstacleMove);
            return;
        }

        if (obstacleTop >= 500) {
            clearInterval(obstacleMove);
            gameArea.removeChild(obstacle);
            score++;
            scoreElement.innerText = score;
        } else {
            obstacle.style.top = (obstacleTop + obstacleSpeed) + 'px'; // Snellere beweging
        }
    }, 20); // Snellere update voor obstakelbeweging
}

function startGame() {
    obstacleInterval = setInterval(createObstacle, 2000); // Tijdsinterval tussen spawning van obstakels

    timerInterval = setInterval(() => {
        if (!isGameOver) {
            timer++;
            timerElement.innerText = timer;
        }
    }, 1000);
}

function endGame() {
    isGameOver = true;
    clearInterval(obstacleInterval);
    clearInterval(timerInterval);
    finalScoreElement.innerText = score;
    gameOverScreen.classList.remove('hidden');
}

function restartGame() {
    location.reload();
}

function endGame() {
    window.close();
}

startGame();
