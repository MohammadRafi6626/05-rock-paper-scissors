// Get the buttons from the HTML by their IDs
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

// Get the result div to display messages
const resultDiv = document.getElementById("result");

// Function to play the game with player's choice
function playGame(playerChoice) {
  // Get the computer's choice
  const computerChoice = getComputerChoice();
  
  // Display both choices on the page
  resultDiv.innerHTML = `You chose: ${playerChoice}<br>Computer chose: ${computerChoice}`;
}

// Add event listener for rock button
rockButton.addEventListener("click", function() {
  playGame("Rock 🪨");
});

// Add event listener for paper button
paperButton.addEventListener("click", function() {
  playGame("Paper 📄");
});

// Add event listener for scissors button
scissorsButton.addEventListener("click", function() {
  playGame("Scissors ✂️");
});

// Function to get computer's random choice
function getComputerChoice() {
  // Generate a random number between 0 and 2
  const randomNumber = Math.floor(Math.random() * 3);
  
  // Use if statements to return the computer's choice based on the random number
  if (randomNumber === 0) {
    return "Rock 🪨";
  } else if (randomNumber === 1) {
    return "Paper 📄";
  } else {
    return "Scissors ✂️";
  }
}
