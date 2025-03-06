// Game where user inputs rock, paper, or scissors, and compares it to a random machine choice.
// The result is displayed as win, lose, or draw based on the comparison.

// Function that returns rock, paper or scissors randomly by the machine.

function getComputerChoice() {
    const numericValue = Math.random();
    if (numericValue < 0.33) {
        return "Paper";
    } else if (numericValue < 0.66) {
        return "Rock";
    } else {
        return "Scissors";
    }
    
}

// Function that gets an user input between rock, paper and scissors assuming the user always type what we need.

function getHumanChoice() {
    return prompt("Please, choose between rock, paper or scissors: ");
}

// Variables for the score both of human and machine.

let humanScore = 0;
let computerScore = 0;

// Function that compares the values from the input and the random computer choice.
// Then it adds the score to the hum or computed based on who wins and displays a text with the winner.

function playRound (humanChoice, computerChoice) {
    // We make case-insensitive the humanChoice and capitalize the first letter.

    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
    
    if (humanChoice === computerChoice) {
        console.log("It's a draw!");
        console.log("The current score is " + humanScore + " for you and " + computerScore + " for the computer.");
    }
    else if (
        (humanChoice === "Scissors" && computerChoice === "Paper") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Rock" && computerChoice === "Scissors")
    ) {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore ++;
        console.log("The current score is " + humanScore + " for you and " + computerScore + " for the computer.");
    }
    else {
        console.log("You lose " + computerChoice + " beats " + humanChoice);
        computerScore++;
        console.log("The current score is " + humanScore + " for you and " + computerScore + " for the computer.");
    }
}

// Make the playRound function play 5 times.

function playGame() {
    let i = 0;
    while (i < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        i++;
    }
}

playGame();
