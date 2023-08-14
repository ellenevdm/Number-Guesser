let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};


  


const getAbsoluteDistance = (num1, num2) => {
return  Math.abs(num1 - num2)
}

const compareGuesses = (currentHumanGuess, computerGuess, target) => {
  const min = 0;
  const max = 9
if (currentHumanGuess < min || currentHumanGuess > max) {
    return alert('Your number is out of range')}
else if (getAbsoluteDistance(currentHumanGuess, target) <= getAbsoluteDistance(computerGuess, target)) {
    return true;
  } else {
    return false;
  }
};
  //let humanDistance = getAbsoluteDistance(currentHumanGuess, target);
 // let computerDistance = Math.abs(computerGuess - target);


const updateScore = (winner) => {
  if (winner === "human") {
    return (humanScore += 1);
  } else {
    return (computerScore += 1);
  }
};

const advanceRound = () => {
  return (currentRoundNumber += 1);
};