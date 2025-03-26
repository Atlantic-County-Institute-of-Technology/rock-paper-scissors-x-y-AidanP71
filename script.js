//creates choices for math.random, defines all js elements
const choices = ["rock", "paper", "scissors","printer", "water-bottle"];
const playerChoice = document.getElementById("playerChoice")
const computerchoice = document.getElementById("computerChoice");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const resetButton = document.getElementById("Reset")
let playerScore = 0;
let computerScore = 0;
//allows computer to choose from 5 options
function playGame(playerChoice){
  const computerChoice = choices[Math.floor(Math.random() * 5)];

  console.log(computerChoice);
  let result = "";
//if what hte cpu and you chose equal each other ouput equals its a tie
  if(playerChoice === computerChoice){
    result = "IT'S A TIE!";
  }
  else{
    //creates the outputs whether you win or lose
      switch(playerChoice){
        case "rock":
            result = (computerChoice === "scissors" || computerChoice === "printer" || computerChoice === "water-bottle") ? "YOU WIN!" : "YOU LOSE!";
            break;
        case "paper":
              result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
              break;
        case "scissors":
                result = (computerChoice === "paper" || computerChoice === "printer" || computerChoice === "water-bottle") ? "YOU WIN!" : "YOU LOSE!";
                break;
        case "printer":
              result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
              break;
        case "water-bottle":
              result = (computerChoice === "printer" || computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
              break;
      } 
  }

// displays what you chose and what the computer chose
    playerDisplay.textContent = `You Chose: ${playerChoice}` ;
    computerDisplay.textContent = `Computer Chose: ${computerChoice}` ;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");
    //makes you win green, makes player score increase by 1
    switch(result){
        case "YOU WIN!":
          resultDisplay.classList.add("greenText");
          playerScore++;
          playerScoreDisplay.textContent = playerScore;
          break; 
        //makes you lose red, makes computer score increase by 1 
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;  
    }
    function resetGame() {
      playerScore = 0;
      computerScore = 0;
      playerScoreDisplay.textContent = 0;
      computerScoreDisplay.textContent = 0;
    }
    resetButton.addEventListener("click", resetGame)
}