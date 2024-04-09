function guessingGame() {
    const val = Math.floor(Math.random() * 100);
    let guesses = 0;
    let isOver = false;
  
    return function guess(num) {
      if (isOver) return "The game is over, you won!";
      guesses++;
      if (num === val) {
        isOver = true;
        const guess = guesses === 1 ? "guess" : "guesses";
        return `You win! You found ${num} in ${guesses} ${guess}.`;
      }
      if (num < val) return `${num} is too low!`;
      if (num > val) return `${num} is too high!`;
    };
  }
  
  module.exports = { guessingGame };