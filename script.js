const choices = ["rock", "paper", "scissors"];
const userchoice = document.getElementById("userchoice")
const computerchoice = document.getElementById("computerchoice");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(userchoice){
  const computerchoice = choices[Math.floor(Math.random() * 3)];

  console.log(computerchoice);
  let result = "";

  if(playerchoice === computerchoice){
    result = "IT'S A TIE!";
  }
  else{
      switch(playerchoice){
        case "rock":
            result = (computerchoice === "scissors") ? "YOU WIN!" : "YOU LOSE!;"
            break;
        case "paper":
              result = (computerchoice === "rock") ? "YOU WIN!" : "YOU LOSE!;"
              break;
        case "scissors":
                result = (computerchoice === "paper") ? "YOU WIN!" : "YOU LOSE!;"
                break;
      } 
  }


    userchoice.textContent = 'You Chose: ${userchoice}' ;
    computerchoice.textContent = 'Computer Chose: ${computerchoice}' ;
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