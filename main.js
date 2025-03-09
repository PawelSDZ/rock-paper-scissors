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
// Now, the function calls winner() which is defined below.
// The function displays the result of the round and the current score in a div.
// The function clears the previous result each round.

function playRound (humanChoice, computerChoice) {
    resultsDiv.innerHTML = ""
    if (humanChoice === computerChoice) {
        resultsDiv.innerHTML += "It's a draw! <br>";
        resultsDiv.innerHTML += "The current score is " + humanScore + " for you and " + computerScore + " for the computer. <br>";
    }
    else if (
        (humanChoice === "Scissors" && computerChoice === "Paper") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Rock" && computerChoice === "Scissors")
    ) {
        resultsDiv.innerHTML += "You win! " + humanChoice + " beats " + computerChoice + "<br>";
        humanScore ++;
        resultsDiv.innerHTML += "The current score is " + humanScore + " for you and " + computerScore + " for the computer. <br>";
    }
    else {
        resultsDiv.innerHTML += "You lose! " + computerChoice + " beats " + humanChoice + "<br>";
        computerScore++;
        resultsDiv.innerHTML += "The current score is " + humanScore + " for you and " + computerScore + " for the computer. <br>"; 
    }
    winner();
}

// Make the playRound function play 5 times.
// Not needed in the UI version of the project, but not commented out or deleted anyway because it's never called.

function playGame() {
    let i = 0;
    while (i < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        i++;
    }
}

// This function is called each round with playRound() and acts as a substitute for playGame(), but adapted to the UI version of the project.
// It tells the user to keep playing if the humanScore or computerScore is not yet 5.
// Once one of the scores reaches 5, it displays the winner message and resets the scores.

function winner () {
    if (humanScore === 5) {
        resultsDiv.innerHTML += "The game has finished! <br> You are the winner!";
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        resultsDiv.innerHTML += "The game has finished! <br> The computer won!";
        humanScore = 0;
        computerScore = 0;
    } else {
        resultsDiv.innerHTML += "Keep playing, let's see who reaches 5 first!";
    }
}

// Making the game playable via an UI.
// Each button will call playRound() with the value displayed on the button and a random computer choice obtained using getComputerChoice().

let resultsDiv = document.querySelector("div");
let buttons = document.querySelectorAll("button");
buttons.forEach(function(button){
    button.addEventListener("click", function(){
        if (button.classList.contains("paper")){
            playRound("Paper", getComputerChoice());
        }
        if (button.classList.contains("rock")){
            playRound("Rock",getComputerChoice());
        }
        if (button.classList.contains("scissors")){
            playRound("Scissors",getComputerChoice());
        }
    })
})
