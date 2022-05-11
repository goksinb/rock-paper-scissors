
// User chooses their move

let userInput = prompt ("Choose your move").toLowerCase()

console.log (userInput)

 //Computer's selection

function computerPlay() {

    let selectRandom = Math.floor(Math.random() * 3); 

    if (selectRandom === 0 ) {return "Rock";}
    else if (selectRandom === 1) {return "Paper";}
    else {return "Scissors";}

}


const computerSelection = computerPlay();



function playRound (computerSelection, userInput) {

    if (userInput === "rock" && computerSelection === "Scissors") {return "You win!";}
    else if (userInput === "rock" && computerSelection === "Paper") {return "You lose!";}
    else if (userInput === "rock" && computerSelection === "Rock") {return "It's a tie!";}

    else if (userInput === "paper" && computerSelection === "Rock") {return "You win!";}
    else if (userInput === "paper" && computerSelection === "Paper") {return "It's a tie!";}
    else if (userInput === "paper" && computerSelection === "Scissors") {return "You lose!";}

    else if (userInput === "scissors" && computerSelection === "Rock") {return "You lose!";}
    else if (userInput === "scissors" && computerSelection === "Paper") {return "You win!";}
    else if (userInput === "scissors" && computerSelection === "Scissors") {return "It's a tie!";}

}

console.log(computerSelection)

console.log(playRound(computerSelection, userInput))


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








    


