#! /usr/bin/env node

import inquirer from "inquirer";

// 1) Computer Will generate a random number-Done
// 2) User input for guessing number-Done
// 3) Compare user input with computer generated number and show result

const randomNumber = Math.floor(Math.random() * 10 + 1);

const answer = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Please guess a number between 1 to 10",
  },
]);

if(answer.userGuessedNumber === randomNumber) {
    console.log("Congratulation! you guessed right number")
} else {
    console.log("You guessed wrong number")
}