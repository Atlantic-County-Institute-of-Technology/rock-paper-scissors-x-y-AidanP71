const choices = ["rock", "paper", "scissors","printer", "water-bottle"];
const playerChoice = document.getElementById("playerChoice")
const computerchoice = document.getElementById("computerChoice");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){
  const computerChoice = choices[Math.floor(Math.random() * 5)];

  console.log(computerChoice);
  let result = "";

  if(playerChoice === computerChoice){
    result = "IT'S A TIE!";
  }
  else{
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


    playerDisplay.textContent = `You Chose: ${playerChoice}` ;
    computerDisplay.textContent = `Computer Chose: ${computerChoice}` ;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");
    
    switch(result){
        case "YOU WIN!":
          resultDisplay.classList.add("greenText");
          playerScore++;
          playerScoreDisplay.textContent = playerScore;
          break;  
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;  
    }
}