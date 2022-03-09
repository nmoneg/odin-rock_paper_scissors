// Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!

function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    let compChoice = "";

    switch(num) {
        case 0:
            compChoice = "Rock";
            break;
        case 1:
            compChoice = "Paper";
            break;
        case 2:
            compChoice = "Scissors";
    }
    return compChoice;
}

// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());


// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    let comp = computerSelection;
    let result = ""

    if ((player === "Rock" && comp === "Paper") || (player === "Paper" && comp === "Scissors") || (player === "Scissors" && comp === "Rock")) {
        console.log("You Lose! " + comp + " beats " + player);
        result = "Lose";
        return result;
    } else if ((comp === "Rock" && player === "Paper") || (comp === "Paper" && player === "Scissors") || (comp === "Scissors" && player === "Rock")) {
        console.log("You Win! " + player + " beats " + comp);
        result = "Win";
        return result;
    } else if (player === comp) {
        console.log("It's a Tie! " + player + " and " + comp + ". Let's try again!");
        result = "Tie";
        return result;
    } else {
        console.log("Invalid response. Please try again.");
        result = "Redo";
        return result;
    }
}

// Important note: you want to return the results of this function call, not console.log() them. You’re going to use what you return later on, so let’s test this function by using console.log to see the results

// const playerSelection = "paper";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));



// Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

//     Remember loops? This is a great opportunity to use one to play those five rounds

//     At this point you should be using console.log() to display the results of each round and the winner at the end.

//     Use prompt() to get input from the user. Read the docs here if you need to.

//     Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.

//     Feel free to create more “helper” functions if you think it would be useful.



function game() {
    let playerScore = 0;
    let compScore = 0;
    let round = "";

    console.log("Let's play Rock, Paper, Scissors! Best out of five games win - if the result is a tie or invalid answer, we will retry for that round.")

    for (let i = 1; i <= 5; i++) {
        let playerSelection = "rock";
        let computerSelection = computerPlay();

        console.log("Round " + i + " - FIGHT!!!");
        round = playRound(playerSelection, computerSelection);
        
        switch(round) {
            case "Win":
                playerScore++;
                break;
            case "Lose":
                compScore++;
                break;
            case "Tie":
                i--;
                break;
            case "Redo":
                i--;
                break;
        }
    }
    
    if (playerScore > compScore) {
        console.log("You won the game!\nYou: " + playerScore + "\nCPU: " + compScore);
    } else {
        console.log("You lost the game.\nYou: " + playerScore + "\nCPU: " + compScore);
    }
}

game();