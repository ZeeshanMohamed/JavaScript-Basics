const prompt = require("prompt-sync")();

let a = Number(prompt("Enter a number: "));
// let i = 1
// while(i <= a) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
//     i++;
// }


//for loop
let fac = 1
for (let i = 1; i <= a; i++) {
    fac = fac * i 
}
console.log(fac)