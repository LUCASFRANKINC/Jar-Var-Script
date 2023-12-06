const startGameBtn = document.getElementById('start-game-btn');

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_CHOICE = ROCK;
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

startGameBtn.addEventListener('click', () => {
    if(gameIsRunning) return;
    gameIsRunning = true;
    console.log("Game is starting...");
    const playerSelection = getPlayerChoice();
    console.log(playerSelection);
});