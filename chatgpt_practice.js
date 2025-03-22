// Write a program to find the sum of an array using a forEach loop.
// function sumArray(arr) {
//     let sum = 0;
//     arr.forEach(num => {
//         sum += num;
//     })
//     console.log(sum)
// }
// sumArray([1,2,3,4])

// // Create a function that takes a number and returns true if it is even and false if it is odd.
// function oddoreven(num){
//     if (num%2 == 0){
//         return true

//     }
//     else{
//         return false
//     }
// }
// console.log(oddoreven(5))

//Write a function to reverse a string (without using .reverse()).
// function rev(num){
//     let empty = ""
//     for (let i = num.length-1; i >= 0; i--) {
//         empty += num[i]
//     }
//     return empty
// }
// console.log(rev("areeb"))

// Create an object representing a student with properties like name, age, and grades. Print each property.
// const obj = {"name " : "zeeshan", "age" : 20, "grades" : [90, 80, 70]}
// for (let a in obj){
//     console.log(a,obj[a])
// }

// Filter out even numbers from an array using a loop.
// function sumeven(number){
//     let empty = []
//     for (let i of number){
//         if (number[i] % 2 == 0){
//             empty.push(number[i])
//         }
//     }
//     return empty
// }
// console.log(sumeven([1,2,3,4,5,6]))

//function to find largest number in array usig reduce
// let arr = [1, 2, 4, 6, 3]
// let max = arr.reduce((acc, curr) => {
//     return curr > acc ? curr : acc;
// }, arr[0]);


//count no of times in array
let fruit = ['apple','orange','mango','apple','mango','apple']
// let count = fruit.reduce((item1,item2)=>
// {
//     item1[item2] = (item1[item2] || 0) + 1;
//     return item1;
// },{}
// )
// console.log(count)
// let c = { }
// for (let i of fruit){
//     c[i] =( c[i] || 0 ) + 1
// }

// let num = [1,2,3,4,5,3,2,1,4,3,3]
// let count = num.reduce((a,b) => {
//     a[b] = (a[b] || 0) + 1
// },{})
// let mx = Math.max(count)

// let a = 'hello'
// let rev = a.split("").reverse("").join("")
// console.log(rev)

// let n= [1,9,5,6,3]
// let big = ''
// // let check = n.reduce((a,b) => a>b? a:b,0)
// // console.log(check)
// for (let i of n){
//     if (i > big){
//         big = i
// }
// }
// console.log(big)

// let n = 10
// let a = n%2==0?'even':'odd'
// console.log(a)

// let a = 'faheema'
// let b = ['a','e','i','o','u']
// let vow = 0
// // a = a.split("")
// for (let i of a){
//     for (let k = 0; k <= b.length; k++){
//         if (i == b[k]){
//             vow += 1
//     }
// }
// }
// // let vow = a.split("").reduce((count, char) => vowels.includes(char) ? count + 1 : count, 0);
// console.log(vow)


let a = [1,2,2,2,3,3,3]
let b = []
let c = a.reduce((acc, current) => {
    if (acc != current){
        b.push(acc)
    }  
    return current
})
b.push(a[a.length - 1]);
console.log(b)

