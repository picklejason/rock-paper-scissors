const selPlayerScore = document.querySelector('.player-score');
const selComputerScore = document.querySelector('.computer-score');
const selChoices = document.querySelectorAll('.choice-img');
const selResult = document.querySelector('.result');
const selPlayAgain = document.querySelector('.play-again');

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let hand = "";
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            hand = "Rock";
            break;
        case 1:
            hand = "Paper";
            break;
        case 2:
            hand = "Scissors";
    }
    return hand;
}

function playRound(playerSelection, computerSelection) {
    
    switch (true) {
        case(playerSelection == computerSelection):
            selResult.textContent = 'Draw!';
            break;
        case(playerSelection == "Rock" && computerSelection == "Scissors"):
        case(playerSelection == "Paper" && computerSelection == "Rock"):
        case(playerSelection == "Scissors" && computerSelection == "Paper"):
            selResult.textContent = `You Win! You chose ${playerSelection} while the Computer chose ${computerSelection}!`;
            playerScore++;
            break;
        default:
            selResult.textContent = `You Lose! You chose ${playerSelection} while the Computer chose ${computerSelection}!`
            computerScore++;
            break;
    }
}

function playGame() {
    
    let playerSelection;
    selChoices.forEach((choice) => {
        choice.addEventListener('click', () => {
            
            if (choice.classList.contains('rock-img')) {
                playerSelection = 'Rock';
            } else if (choice.classList.contains('paper-img')) {
                playerSelection = 'Paper';
            } else if (choice.classList.contains('scissor-img')) {
                playerSelection = 'Scissors';
            }
            
            playRound(playerSelection, computerPlay())
            selPlayerScore.textContent = playerScore;
            selComputerScore.textContent = computerScore;
            isGameOver();
        });
    });
}

function isGameOver() {
    if (playerScore == 5 || computerScore == 5) {
        selChoices.forEach((choice) => {
            choice.classList.add("not-active");
        })

        if (playerScore > computerScore) {
            selResult.textContent = 'You beat the Computer!';
        } else {
            selResult.textContent = 'You lost to the Computer!'
        }
        selPlayAgain.style.visibility = 'visible';
        playAgain();
    }
}

function playAgain() {
    selPlayAgain.addEventListener('click', () => {
        window.location.reload();
    });
}

playGame();


