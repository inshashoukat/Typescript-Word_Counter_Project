#! /usr/bin/env node
// Importing inquirer and chalk packages
import inquirer from "inquirer";
import chalk from "chalk";

// Display a colorfull welcome message
console.log(chalk.bold.yellow("\n \t\t Insha Shoukat - Word Counter"));
console.log("=".repeat(60));

// Prompt the user to enter a Sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        messsage: "Eenter a Sentence",
     
    }
]);

// Triming the sentence and spilitting it into words based on "spaces"

let words = answers.sentence.trim().split(" ");

// Analysis of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold("- Sentence words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));