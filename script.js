function getcopt() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  function determineWinner(yopt, copt) {
    if (yopt === copt) {
      return "It's a tie!";
    } else if (
      (yopt === 'button1' && copt === 'button3') ||
      (yopt === 'button2' && copt === 'button1') ||
      (yopt === 'button3' && copt === 'button2')
    ) {
      return 'You win!';
    } else {
      return 'Computer wins!';
    }
  }
  
  function playGame(yopt) {
    const copt = getcopt();
    const result = determineWinner(yopt, copt);
  
    console.log(`You chose ${yopt}`);
    console.log(`The computer chose ${copt}`);
    console.log(result);
  }
  
  // Example usage:
  playGame('button1'); // You can replace 'button1' with 'button2' or 'button3'