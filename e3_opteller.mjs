// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden


let getal1 = parseFloat (await userInput.question ('Geef het eerste getal: '));
let getal2 = parseFloat (await userInput.question ('Geef het tweede getal: '));

let som = getal1 + getal2

console.log ('De som is ' + som);

process.exit();
