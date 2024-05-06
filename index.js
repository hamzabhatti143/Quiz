#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let condition = true;
console.log(chalk.green(`You give 2 correct answers to win this quiz`));
while (condition) {
    let user_input = await inquirer.prompt([
        {
            name: "q1",
            message: "What is the capital of Australia? ",
            type: "list",
            choices: ["Sydney", "Canberra", "Melbourne", "Perth"]
        },
        {
            name: "q2",
            message: "Who was the founder of Pakistan?",
            type: "list",
            choices: ["Quaid-e-Azam", "Babar Azam", "Sir Syed Ahmed Khan", "Allama Iqbal"]
        },
        {
            name: "q3",
            message: "Who is the current President of Pakistan?",
            type: "list",
            choices: ["Asif Ali Zardari", "Bilawal Bhutto", "Arif Alvi", "Maryam Nawaz"]
        },
        {
            name: "q4",
            message: "What is the largest planet in our solar system?",
            type: "list",
            choices: ["Mercury", "Venus", "Jupiter", "Earth"]
        },
        {
            name: "q5",
            message: "Who is the current President of US?",
            type: "list",
            choices: ["Donald Trump", "Joe Biden", "Barack Obama", "George W.Bush"]
        },
        {
            name: "confirm",
            message: "Do you want start again?",
            type: "confirm",
            default: "true"
        }
    ]);
    let point = 0;
    if (user_input.q1 === "Canberra") {
        point++;
    }
    if (user_input.q2 === "Quaid-e-Azam") {
        point++;
    }
    if (user_input.q3 === "Asif Ali Zardari") {
        point++;
    }
    if (user_input.q4 === "Jupiter") {
        point++;
    }
    if (user_input.q5 === "Joe Biden") {
        point++;
    }
    if (point === 5) {
        console.log(chalk.bgGreen(`You won this quiz`));
    }
    else if (point > 0) {
        console.log(`Your points are ${point}`);
    }
    else {
        console.log(chalk.bgRed(`You Lose!`));
    }
    condition = user_input.confirm;
}
;
