
// Js file for workshop

// opening string
const intro = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

console.log(intro)

// first varible
const firstVar = (1+ 1 + 1 +1 +1 - 4 ) * 10;

// second varible
const secondVar = 50 - 10;

// third varible
const thirdVar = (80 / 2) - 1;

// create varible for the combined lock
const lockCode =  firstVar + '-' + secondVar + '-' + thirdVar
// send alert for the html page
alert(intro + '\n' + lockCode)

// log the combined lock code to the console
console.log( lockCode)
