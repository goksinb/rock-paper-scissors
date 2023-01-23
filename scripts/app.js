const rockBtnElement = document.getElementById("rock-btn");
const paperBtnElement = document.getElementById("paper-btn");
const scissorsBtnElement = document.getElementById("scissors-btn");
const playNewGameElement = document.getElementById("start-again");

rockBtnElement.addEventListener("click", pressRockBtn);
paperBtnElement.addEventListener("click", pressPaperBtn);
scissorsBtnElement.addEventListener("click", pressScissorsBtn);
playNewGameElement.addEventListener("click", endGame);

const gameWinnerElement = document.getElementById("game-winner");
const playerScoreElement = document.getElementById("player-score");
const computerScoreElement = document.getElementById("computer-score");
const drawScoreElement = document.getElementById("draw-score");

function endGame() {
  // reset both score to 0
  playerScore = 0;
  computerScore = 0;
  draws = 0;

  // display the new score to user
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
  drawScoreElement.textContent = draws;

  // show blank result
  gameWinnerElement.textContent = "";
  // reenable all the RPS buttons so that user can continue to play
  rockBtnElement.disabled = false;
  paperBtnElement.disabled = false;
  scissorsBtnElement.disabled = false;
}

function displayScore() {
  let scoreCountPlayer = document.getElementById("player-score");
  scoreCountPlayer.textContent = playerScore;
  let scoreCountComputer = document.getElementById("computer-score");
  scoreCountComputer.textContent = computerScore;
  let scoreCountDraws = document.getElementById("draw-score");
  scoreCountDraws.textContent = draws;
}

function pressRockBtn() {
  const computerSelection = computerPlay();
  const userInput = "rock";

  let roundWinner = playRound(computerSelection, userInput);
  let playerMove = (document.getElementById("player-move").textContent =
    userInput);
  let computerMove = (document.getElementById("computer-move").textContent =
    computerSelection);
  const displayWinnerElement = (document.getElementById(
    "round-winner"
  ).textContent = roundWinner);

  displayScore();
  checkForWinner(playerScore, computerScore);
}

function pressPaperBtn() {
  const computerSelection = computerPlay();
  const userInput = "paper";

  let roundWinner = playRound(computerSelection, userInput);
  let playerMove = (document.getElementById("player-move").textContent =
    userInput);
  let computerMove = (document.getElementById("computer-move").textContent =
    computerSelection);
  const displayWinnerElement = (document.getElementById(
    "round-winner"
  ).textContent = roundWinner);

  displayScore();
  checkForWinner(playerScore, computerScore);
}

function pressScissorsBtn() {
  const computerSelection = computerPlay();
  const userInput = "scissors";

  let roundWinner = playRound(computerSelection, userInput);
  let playerMove = (document.getElementById("player-move").textContent =
    userInput);
  let computerMove = (document.getElementById("computer-move").textContent =
    computerSelection);
  const displayWinnerElement = (document.getElementById(
    "round-winner"
  ).textContent = roundWinner);

  displayScore();
  checkForWinner(playerScore, computerScore);
}
