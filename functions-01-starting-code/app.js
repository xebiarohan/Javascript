const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WIN = 'Player Won';
const RESULT_COMPUTER_WIN = 'Computer Won';

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS} ?`,
    ''
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice, we choose ${DEFAULT_USER_CHOICE} for you`);
    return;
  }

  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();

  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner =  (cChoice, pChoice = DEFAULT_USER_CHOICE) => {
  if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSORS) ||
    (cChoice === SCISSORS && pChoice === ROCK)
  ) {
    return RESULT_PLAYER_WIN;
  } else {
    return RESULT_COMPUTER_WIN;
  }
};

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning === true) {
    return;
  }
  gameIsRunning = true;
  console.log('Game started!!!');
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  const winner = playerSelection ? getWinner(computerSelection, playerSelection) : getWinner(computerSelection);

  console.log(winner);
  let message;
  if(winner === RESULT_DRAW) {
    message = `You picked ${playerSelection || DEFAULT_USER_CHOICE} and computer also selected ${computerSelection}, so its a draw`;
  } else if (winner === RESULT_PLAYER_WIN){
    message = `You picked ${playerSelection || DEFAULT_USER_CHOICE} and computer picked ${computerSelection}, so you won`;
  } else {
    message = `You picked ${playerSelection || DEFAULT_USER_CHOICE} and computer picked ${computerSelection}, so computer won`;
  }

  alert(message);
  gameIsRunning = false;

});
