const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOISE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

const getPlayerChoise = () => {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, "").toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choise! We chose ${DEFAULT_USER_CHOISE} for you!`);
    return DEFAULT_USER_CHOISE;
  }
  return selection;
};

const getComputerChoise = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoise, pChoise) =>
  cChoise === pChoise
    ? RESULT_DRAW
    : (cChoise === ROCK && pChoise === PAPER) ||
      (cChoise === PAPER && pChoise === SCISSORS) ||
      (cChoise === SCISSORS && pChoise === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("game is starting here");
  const playerSelection = getPlayerChoise();
  const computerChoise = getComputerChoise();
  const winner = getWinner(computerChoise, playerSelection);
  console.log(winner);
});
