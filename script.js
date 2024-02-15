let playerScore = 0;
let computerScore = 0;
const options = ["rock", "paper", "scissor"];
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorButton = document.getElementById('scissor');
const resultDiv = document.querySelector('.result');
const playerScoreSpan = document.querySelector('.player-score');
const computerScoreSpan = document.querySelector('.computer-score');

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;

}

function checkWinner(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
       return "Tie";
    }
    else if (
    (playerSelection == "rock" && computerSelection == "scissor") ||
    (playerSelection == "scissor" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "player";
    }
    else {
        return "computer";
    }

}

function playRound (playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie"){
        const p = document.createElement('p');
        p.innerText = `It's a Tie! You both picked ${playerSelection}`;
        resultDiv.appendChild(p);
    }
    else if (result == "player"){
        playerScore++
        const p = document.createElement('p');
        p.innerText = `You win! ${playerSelection} beats ${computerSelection}`;
        resultDiv.appendChild(p);
    }
    else{
        computerScore++
        const p = document.createElement('p');
        p.innerText = `You lose! ${computerSelection} beats ${playerSelection}`;
        resultDiv.appendChild(p);
    }
}

const getScore = (playerScore, computerScore) => {
    if (playerScore === 5) {
        const h2 = document.createElement('h2');
        h2.innerText = `You are the Winner! ${playerScore} out of ${computerScore}`
        resultDiv.append(h2);
    }
    if (computerScore === 5) {
        const h2 = document.createElement('h2');
        h2.innerText = `Computer Wins! ${computerScore} out of ${playerScore}`
        resultDiv.append(h2);
    }    
}

const printScore = (playerScore, computerScore) => {
    playerScoreSpan.innerText = `Player score:  ${playerScore}`
    computerScoreSpan.innerText = `Computer score:  ${computerScore}`
}

rockButton.addEventListener('click', () => {
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection);
    getScore(playerScore,computerScore);
    printScore(playerScore, computerScore);
});

paperButton.addEventListener('click', () => {
    const playerSelection = "paper";
    const computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection);
    getScore(playerScore,computerScore);
    printScore(playerScore, computerScore);
});

scissorButton.addEventListener('click', () => {
    const playerSelection = "scissor";
    const computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection);
    getScore(playerScore,computerScore);
    printScore(playerScore, computerScore);
});