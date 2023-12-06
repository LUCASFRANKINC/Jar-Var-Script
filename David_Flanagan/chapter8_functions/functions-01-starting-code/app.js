const startGameBtn = document.getElementById('start-game-btn');

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_CWIN = 'COMPUTER WINS';
const RESULT_PWIN = 'PLAYER WINS';
let gameIsRunning = false;
const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
    switch (selection) {
        case ROCK:
        case PAPER:
        case SCISSORS:
            return selection;
        default:
            alert(`Invalid Choice. We chose ${DEFAULT_CHOICE} for you.`)
            return DEFAULT_CHOICE;
    }
}

const getComputerChoice = () => {
    const randomVal = Math.floor(Math.random() * 100);
    return randomVal < 34 ? ROCK : randomVal >= 34 && randomVal < 67 ? PAPER : SCISSORS;
}

const determineWinner = (cChoice, pChoice) => {
    return cChoice === pChoice ? RESULT_DRAW : cChoice === ROCK && pChoice === PAPER || cChoice === PAPER && pChoice === SCISSORS ||
        cChoice === SCISSORS && pChoice === ROCK ? RESULT_PWIN : RESULT_CWIN;
}

startGameBtn.addEventListener('click', () => {
    if(gameIsRunning) return;
    gameIsRunning = true;
    console.log("Game is starting...");
    const playerSelection = getPlayerChoice();
    const compSelection = getComputerChoice();
    console.log(`Computer: ${compSelection}, Player: ${playerSelection}`);
    console.log(determineWinner(compSelection, playerSelection));
});