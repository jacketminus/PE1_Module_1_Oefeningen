// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden


let getal1 = 7
let getal2 = 7

let som = getal1 + getal2;
let verschil = getal1 - getal2;
let product = getal1 * getal2;
let deling = getal1 / getal2;

console.log ('De som is ' + som);
console.log ('Het verschil is ' + verschil);
console.log ('Het product is ' + product);
console.log ('De deling is ' + deling);

process.exit();
