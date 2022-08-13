// program to add two numbers
const readline = require("readline-sync");

console.log("Enter first number");
let a =  Number(readline.question())


console.log("Enter second number");
let b =  Number(readline.question())

let sum = a + b;

console.log(a + " + " + b + " = "+ sum);