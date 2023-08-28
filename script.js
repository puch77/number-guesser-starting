let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function getAbsoluteDistance(guess, target) {
  if (guess >= 0 && guess <= 9) {
    return Math.abs(guess - target);
  } else {
    alert("The range is between 0 and 9!");
  }
}
function compareGuesses(userGuess, compGuess, target) {
  if (
    getAbsoluteDistance(userGuess, target) <=
    getAbsoluteDistance(compGuess, target)
  ) {
    return true;
  } else {
    return false;
  }
}

function updateScore(winner) {
  if (winner === "human") {
    humanScore += 1;
  } else if (winner === "computer") {
    computerScore += 1;
  }
}

function advanceRound() {
  currentRoundNumber += 1;
  console.log(`This is round number ${currentRoundNumber}`);
}
