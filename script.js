function computerPlay() {

    let hand = "";
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            hand = "rock";
            break;
        case 1:
            hand = "paper";
            break;
        case 2:
            hand = "scissors";
    }
    return hand;
}

function playRound(playerSelection, computerSelection) {
    let result = "";
    switch (true) {
        case(playerSelection == computerSelection):
            return "draw";
        case(playerSelection == "rock" && computerSelection == "scissors"):
        case(playerSelection == "paper" && computerSelection == "rock"):
        case(playerSelection == "scissors" && computerSelection == "paper"):
            return "win";
        default:
            return "lose";
    }

    return result;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = window.prompt('Rock, Paper, or Scissors?').toLowerCase();
        let computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection);
        if (result == "win") {
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            playerScore++;
        } else if (result == "lose") {
            console.log(`You lose! ${playerSelection} loses to ${computerSelection}`);
            computerScore++;
        }  else {
            console.log(`Its a draw!`);
        }
        if (playerScore === 3 || computerScore === 3) {
            break;
        }
    }
    console.log(playerScore);
    console.log(computerScore);

    return playerScore > computerScore ? "You win!" : "Computer wins!";
}

game();