const options = ["rock", "paper", "scissor"];

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
        return "It's a Tie!"
    }
    else if (result == "player"){
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else{
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Input Rock, Paper or Scissor");
        if (choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
        console.log("-----------------------");
        if(checkWinner(playerSelection,computerSelection) == "player"){
            playerScore++
        }
        else if(checkWinner(playerSelection,computerSelection) == "computer"){
            computerScore++
        }
    }
    console.log("Game Over");
    if(playerScore > computerScore){
        console.log("You are the Winner!");
    }
    else if(computerScore > playerScore){
        console.log("Computer was the Winner!");
    }
    else{
        console.log("We have a Tie!");
    }
}
game();