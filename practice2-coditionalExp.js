// let a = prompt("Your age");
// a = Number.parseInt(a);
// if (a >= 18) {
//     alert("you can drive")
// }
// else if (a > 16 && a < 18) {
//     alert("you can join driving class")
// }

// else{
//     alert("you can't drive")
// }


const prompt = require("prompt-sync")();

//let a = prompt("Your age ");
//a = Number.parseInt(a); // Convert input to an integer

// if (a >= 18) {
    //     console.log("You can drive.");
    // } else if (a >= 16 && a < 18) {  
        //     console.log("You can join a driving class.");
        // } else {
            //     console.log("You can't drive.");
            // }
            
            // swich case
            

const fruit = "oratnge"
switch (fruit) {
    case "apple":
        console.log("red");
        break
    case "banana":
        console.log("yellow");
        break
    case "orange":
        console.log("orange");
        break
    default:
        console.log("nope")
}
