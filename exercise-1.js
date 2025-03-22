const prompt = require("prompt-sync")();
let num = Math.floor(Math.random() * 100) + 1;
// console.log(num); 
let chance = 100

do{
    let guess = Number(prompt("Guess a number between 1 and 100 "));
    chance -= 1
    if (guess == num){
        console.log("You Guessed it Right")
        console.log(`Your score is ${chance}`);
        break
    }
    else if (guess < num){
        console.log("Guess a higher number");
    }
    else if (guess > num){
        console.log("Guess a lower number");
    }
    else{
        console.log("enter number again")
    }
}while(true)