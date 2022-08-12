
let computerScore = 0;
let draws = 0;
let playerScore = 0;


function game() {
 
  for (let i = 0; i <= 5; i++) {
      playRound();
      
  }

}

// User chooses their move

  let userInput = prompt ("Choose your move").toLowerCase()


 //Computer's selection

function computerPlay() {

    let selectRandom = Math.floor(Math.random() * 3); 

    if (selectRandom === 0 ) {return "Rock";}
    else if (selectRandom === 1) {return "Paper";}
    else {return "Scissors";}

}
 

//Specifies round win/game win messages
let playerWinRound = "You win!"
let computerWinRound = "Computer wins!"
let draw = "It's a tie!"
let playerWin = "You win the game!"
let computerWin = "Computer wins the game!"

const computerSelection = computerPlay();




function playRound (computerSelection, userInput) {

  if (userInput === "rock" && computerSelection === "Scissors") {return playerWinRound;}
  else if (userInput === "rock" && computerSelection === "Paper") {return computerWinRound;}
  else if (userInput === "rock" && computerSelection === "Rock") {return draw;}

  else if (userInput === "paper" && computerSelection === "Rock") {return playerWinRound;}
  else if (userInput === "paper" && computerSelection === "Paper") {return draw;}
  else if (userInput === "paper" && computerSelection === "Scissors") {return computerWinRound;}

  else if (userInput === "scissors" && computerSelection === "Rock") {return computerWinRound;}
  else if (userInput === "scissors" && computerSelection === "Paper") {return playerWinRound;}
  else if (userInput === "scissors" && computerSelection === "Scissors") {return draw;}

}

function gameScore(playerScore, computerScore) {

  let result = playRound()
  
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
  
}



console.log (userInput)
console.log(computerSelection)
console.log(playRound(computerSelection, userInput))
console.log(gameScore(playerScore, computerScore))





/*


for (let i = 0; i < 5; i++) {
  console.log (userInput)
  console.log(computerSelection)
  let roundResult = playRound(userInput, computerSelection);
  console.log(roundResult);
  gameScore(roundResult);
  console.log("Your score is " + playerScore);
  console.log("The computer's score is " + computerScore);

  if (playerScore === 5 || computerScore === 5) {
    break;
  }
}

function gameScore() {
  let result = playRound()

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
}



/*
    function gameScore(result) {
  
      if (result === playerWinRound) {
        playerScore++;
      } else if (result === draw) {
        draws++;
      } else {
        computerScore++;
        return
      }
  
  
      if (playerScore === 5) {
        console.log(playerWin);
        return;
      }
      else if (computerScore === 5) {
        console.log(computerWin);
        return;
      }
    }
   
/*
// Player's selection

function playerPlay() {

    let playerSelection = ""; 

    if (playerSelection === "Rock" ) {return "Rock";}
    else if (playerSelection === "Paper") {return "Paper";}
    else if (playerSelection === "Scissors") {return "Scissors";}

}


const computerSelection = computerPlay()

console.log (computerPlay())

//Round between computer and player

    function playRound (computerPlay, playerPlay) {

        if (playerSelection === "Rock" && computerSelection === "Scissors") {return "You Won!";}
        else if (playerSelection === "Rock" && computerSelection === "Paper") {return "Computer Won!";}
        else if (playerSelection === "Rock" && computerSelection === "Rock") {return "It's a tie!";}

    }

    console.log(playRound())

*/








    


