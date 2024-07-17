#! /usr/bin/env node
import inquirer from 'inquirer';
async function main() {
    const answers = await inquirer.prompt([
        {
            type: 'number',
            name: 'numberOne',
            message: 'PLEASE ENTER 1 NUMBER:',
        },
        {
            type: 'number',
            name: 'numberTwo',
            message: 'PLEASE ENTER 2 NUMBER:',
        },
        {
            type: 'list',
            name: 'operator',
            choices: ['+', '-', '*', '/'],
            message: 'SELECT OPERATOR',
        }
    ]);
    const { numberOne, numberTwo, operator } = answers;
    if (numberOne !== undefined && numberTwo !== undefined && operator) {
        let result = 0;
        switch (operator) {
            case '+':
                result = numberOne + numberTwo;
                break;
            case '-':
                result = numberOne - numberTwo;
                break;
            case '/':
                result = numberOne / numberTwo;
                break;
            case '*':
                result = numberOne * numberTwo;
                break;
            default:
                console.log("INVALID OPERATOR");
                return; // Exit function if operator is invalid
        }
        console.log("YOUR RESULT IS " + result);
    }
    else {
        console.log("KINDLY ENTER VALID INPUT");
    }
}
main();
