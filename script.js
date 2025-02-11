 // Select elements
const scoreElement = document.getElementById("score");
const timeElement = document.getElementById("time");
const clickButton = document.getElementById("click-button");

// Initialize variables
let score = 0;
let timeLeft = 30;
let gameInterval;
let countdownInterval;

// Function to update the score
function updateScore() {
    score += 1;
    scoreElement.textContent = score;
}

// Function to start the countdown timer
function startTimer() {
    countdownInterval = setInterval(function() {
        timeLeft -= 1;
        timeElement.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            clearInterval(gameInterval);
            alert("Game Over! Your score is " + score);
        }
    }, 1000);
}

// Function to start the game
function startGame() {
    score = 0;
    timeLeft = 30;
    scoreElement.textContent = score;
    timeElement.textContent = timeLeft;
    
    // Start the countdown timer
    startTimer();
    
    // Start the game loop
    gameInterval = setInterval(function() {
        // The user clicks the button, the score increases
        clickButton.disabled = false;
    }, 100);
}

// Add event listener for the button click
clickButton.addEventListener("click", function() {
    updateScore();
    // Disable button to avoid clicking too fast
    clickButton.disabled = true;
    // Enable button again after 0.5 seconds
    setTimeout(function() {
        clickButton.disabled = false;
    }, 500);
});

// Start the game when the page loads
window.onload = startGame;
