let rock = document
  .getElementById("rock")
  .addEventListener("click", () => playRound("rock"));
let paper = document
  .getElementById("paper")
  .addEventListener("click", () => playRound("paper"));
let scissor = document
  .getElementById("scissor")
  .addEventListener("click", () => playRound("scissor"));

  let again = document
  .getElementById("playAgain")
  .addEventListener("click", () => reset());


   let player_score = 0;
   let computer_score = 0;
   let gamesPlayed = 1;
   let winner = document.getElementById("winner");
   let player = document.getElementById("ps");
   let computer = document.getElementById("cs");
   let games = document.getElementById("gp");
   let computer_turn = document.getElementById("cse");

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  if (playerSelection === computerSelection) {
   winner.textContent = "tie! "
  } else if (
    (playerSelection == "rock" && computerSelection == "scissor") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissor" && computerSelection == "paper")
  ) {
    player_score++;
    winner.textContent = "keep going Human!"
  } else {
    computer_score++;
    winner.textContent = "Nolca is happy. Keep trying!"
  }

  player.textContent = `Human Score: ${player_score}`;
 
  computer.textContent = `Nolca score: ${computer_score}`;

  games.textContent = `Round: ${gamesPlayed}`;

  let computer_turn = document.getElementById("cse");
  computer_turn.textContent = `Nolca Selection: ${computerSelection}`;

  if (gamesPlayed == 5) {
    gamesPlayed = 1;
    result();
  } else {
    gamesPlayed++;
  }
}

function result() {

  if (player_score > computer_score) {
    winner.textContent =" Human wins! Someone might be very mad...";
    reset();
  } else if (player_score < computer_score) {
    winner.textContent = "Nolca wins! No wars for now!";
    reset();
  } else if (player_score === computer_score) {
    winner.textContent = "It is a tie! Try again!";
    reset();
    
  }

}

function reset() {
  player_score = 0;
  player.textContent = `Human Score: ${player_score}`;
  computer_score = 0;
  computer.textContent = `Nolca score: ${computer_score}`;
  gamesPlayed = 1;
  games.textContent = `Round: ${gamesPlayed}`;

  if (gamesPlayed == 5) {
    gamesPlayed = 1;
    result();
  } else {
    gamesPlayed++;
  }
  computer_turn.textContent = "";

}

function getComputerChoice(choices) {
  choices = ["rock", "paper", "scissor"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomChoice];
  return computerChoice;
}

