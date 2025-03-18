const prompt = require("prompt-sync")();

// let a = [1,2,3,4,5]

// let add_a = prompt("enter number")
// let add = Number(add_a)
// let new_a = a.push(add)
// console.log(a)
// console.log(new_a)

// let add_a
// while (add_a != 0){
//     add_a = prompt("enter number again ")
//     let add = Number(add_a)
//     let new_a = a.push(add)
//     console.log(a)
// }

// q2
// do{
//     add_a = prompt("enter number ")
//     add = Number(add_a)
//     if (add != 0){
//         new_a = a.push(add)
//         console.log(a)
//     }
//     else{
//         console.log(a)
//     }
// }while (add_a != 0)

// let a = [1, 2, 3, 4, 5];
// let add_a;

// do {
//     add_a = Number(prompt("Enter number ")); // Convert input to a number
//     add_a !== 0 ? (a.push(add_a), console.log(a)) : null; // Use ternary to push & log
// } while (add_a !== 0);

// console.log(a); 

//q3

// let a = [ 1,2,30,4,5]
// let a_filter = a.filter(num => num % 10 == 0)
// console.log(a_filter)

//q4
// let a = [ 1,2,30,4,5]
// let a_map = a.map(num => num * num)
// console.log(a_map)


//q5
let a = [1,2,3,4,5]
let a_reduce = a.reduce((num1, num2) => num1 * num2)
console.log(a_reduce)
