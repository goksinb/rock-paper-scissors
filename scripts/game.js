let computerScore = 0;
let draws = 0;
let playerScore = 0;

//Specifies round win/game win messages
let playerWinRound = "Player wins!";
let computerWinRound = "Computer wins!";
let draw = "It's a tie!";
let playerWin = "Player wins the game!";
let computerWin = "Computer wins the game!";

let userInput;

const computerSelection = computerPlay();

//Computer's selection
function computerPlay() {
  let selectRandom = Math.floor(Math.random() * 3);

  if (selectRandom === 0) {
    return "Rock";
  } else if (selectRandom === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(computerSelection, userInput) {
  if (userInput === "rock" && computerSelection === "Scissors") {
    playerScore++;
    return playerWinRound;
  } else if (userInput === "rock" && computerSelection === "Paper") {
    computerScore++;
    return computerWinRound;
  } else if (userInput === "rock" && computerSelection === "Rock") {
    draws++;
    return draw;
  } else if (userInput === "paper" && computerSelection === "Rock") {
    playerScore++;
    return playerWinRound;
  } else if (userInput === "paper" && computerSelection === "Paper") {
    draws++;
    return draw;
  } else if (userInput === "paper" && computerSelection === "Scissors") {
    computerScore++;
    return computerWinRound;
  } else if (userInput === "scissors" && computerSelection === "Rock") {
    computerScore++;
    return computerWinRound;
  } else if (userInput === "scissors" && computerSelection === "Paper") {
    playerScore++;
    return playerWinRound;
  } else if (userInput === "scissors" && computerSelection === "Scissors") {
    draws++;
    return draw;
  }
}

/* function gameScore(result) {
  if (result === playerWinRound) {
    playerScore++;
  } else if (result === draw) {
    draws++;
  } else {
    computerScore++;
  }

  if (playerScore === 5) {
    console.log(playerWin);
    return;
  }
  if (computerScore === 5) {
    console.log(computerWin);
    return;
  }
} */

function gameWinner(playerScore, computerScore) {
  if (playerScore > computerScore) {
    console.log(playerWin);
    return;
  } else if (computerScore > playerScore) {
    console.log(computerWin);
    return;
  } else if (computerScore === playerScore) console.log(draw);
  return;
}

function checkForWinner(playerScore, computerScore) {
  if (playerScore === 5) {
    console.log(playerWin);
    gameWinnerElement.textContent = playerWin;
    rockBtnElement.disabled = true;
    paperBtnElement.disabled = true;
    scissorsBtnElement.disabled = true;

    return;
  }
  if (computerScore === 5) {
    console.log(computerWin);
    gameWinnerElement.textContent = computerWin;
    rockBtnElement.disabled = true;
    paperBtnElement.disabled = true;
    scissorsBtnElement.disabled = true;
    return;
  }
}

//  for (var i = 0; i < 5; i++) {
//   /* let userInput = prompt("Pick a move"); */
//   const computerSelection = computerPlay();
//   // console.log("Player's move: " + userInput);
//   // console.log("Computer's move: " + computerSelection);
//   let roundResult = playRound(computerSelection, userInput);
// }

gameWinner(playerScore, computerScore);
