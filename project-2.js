const prompt = require("prompt-sync")();

// let a = prompt("age?");
// if (a >= 10 && a <= 20) {
//     console.log("your age is between from 10 and 20")
// }
// else{
//     console.log("your age is not between from 10 and 20")
// }

// ---------------------------------

// let a = prompt("fruit or vegetable ")
// switch (a) {
//     case "fruit":
//         console.log("I love fruit");
//         break
//     case "vegetable":
//         console.log("veggie")
//         break
//     default:
//         console.log("error");
// }

//-------------------------------

// let num = prompt("write a number")

// if (num % 2 == 0 && num % 3 == 0){
//     console.log("number is divisible by 2 and 3")
// }
// else{
//     console.log("number is not divisible by 2 or 3")
// }

//----------------------------------------------

// let num = prompt("write a number")

// if (num % 2 == 0 && num % 3 == 0){
//     console.log("number is divisible by 2 and 3")
// }
// else if (num % 2 == 0 || num % 3 == 0){
//     console.log("number is divisible by 2 or 3")
// }
// else{
//     console.log("number is not divisible by 2 or 3")
// }

//--------------------------------------------
let age = prompt("Your age?")
let a = age > 18 ? "you are adult" : "you are not adult";
console.log(a)