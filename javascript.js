// get user choice and validate
/* function getPlayerChoice() {
    let playerChoice = prompt(`Choose "rock" "paper" or "scissors"`).toLowerCase();
    while (!(playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors")) {
        console.log(`Invalid input. Please enter "rock" "paper" or "scissors"`).toLowerCase();
        playerChoice = prompt(`Choose "rock" "paper" or "scissors"`).toLowerCase();
    }
    return playerChoice;
}
let playerSelection = getPlayerChoice(); */

/* create function getComputerChoice to randomly select rock paper or scissors */
function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    let computerChoice = choice[Math.floor(Math.random() * choice.length)];
    return computerChoice;
}

// create function to play a single round of rock paper scissors
function playRound() {
    let playerSelection = prompt(`Choose "rock" "paper" or "scissors"`).toLowerCase();
    console.log(`player selection: ` + playerSelection);
    let computerSelection = getComputerChoice();
    console.log(`computer selection: ` + computerSelection);
    if (playerSelection === computerSelection) {
        console.log(`It's a tie!`);
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log(`Computer wins this round. Paper covers rock.`);
        computerWins += 1;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log(`You win this round! Rock smashes scissors.`);
        playerWins += 1;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log(`You win this round! Paper covers rock.`);
        playerWins += 1;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log(`Computer wins this round. Scissors cut paper.`);
        computerWins += 1;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log(`Computer wins this round. Rock smashes scissors.`);
        computerWins += 1;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log(`You win this round! Scissors cut paper.`);
        playerWins += 1;
    }
}

let playerWins = 0;
let computerWins = 0;

// create function game to play 5 rounds 
function game() {
    for (let round = 0; round < 5; round++) {
        console.log(`Round ${round + 1}`);
        // console.log(`player selection: `+ playerSelection);
        // console.log(`computer selection: ` + computerSelection);
        playRound();
        console.log(`player wins: ` + playerWins);
        console.log(`computer wins: ` + computerWins);
    }   
    console.log(`Game Over`);
    if (playerWins > computerWins) {
        console.log(`You win!`);
    } else if (playerWins < computerWins) {
        console.log(`Computer wins`)
    }
    console.log(`Wins: ${playerWins} Losses: ${computerWins}`);
}

game();
