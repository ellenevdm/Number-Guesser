
Number Guesser Game
Description
The "Number Guesser Game" project is a small JavaScript-based guessing game that runs in the browser. The main goal of this project is to write JavaScript functions that power a simple game where users and the computer make guesses to target a random number between 0 and 9. This project enhances your understanding of JavaScript functions, conditional statements, and interactive web applications.

Features
Random Target Generation: The generateTarget() function generates a random integer between 0 and 9 at the start of each new round. This serves as the secret target number for the players to guess.

Guess Comparison: The compareGuesses() function compares the human and computer guesses to the target number and determines the winner. It returns true if the human guess is closer to the target or false if the computer guess is closer. It also handles out-of-range human guesses by showing an alert.

Score Tracking: The updateScore() function updates the scores of the human and computer players based on the winner of each round.

Round Advancement: The advanceRound() function increments the currentRoundNumber to indicate the progress to the next round.

Distance Calculation: The getAbsoluteDistance() function calculates the absolute distance between two numbers, which is used in the comparison of guesses.

How to Use
Clone the repository and navigate to the project directory.

Open the index.html file in a web browser.

Use the "+" and "-" buttons to adjust your guess.

Click the "Make a Guess" button to submit your guess.

Observe the updated scores and round number.

Use the browser console to test the functions with sample inputs for verification.

Technologies
HTML, CSS (for interface)
JavaScript (for game logic)
Collaborators
Your GitHub Username
License
This project is licensed under the MIT License.

Project Goals
The "Number Guesser Game" project aims to create a functional guessing game that provides an interactive user experience. By building this project, you enhance your understanding of JavaScript functions, conditionals, and user interface interactions. This project also reinforces your ability to generate random numbers, compare values, and track scores in a gaming context.
