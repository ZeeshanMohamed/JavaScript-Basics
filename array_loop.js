let num = [3,45,32,4,12,6 ]

// for (let i =0; i<num.length; i++){
//     console.log(num[i])
// }

//for each loop
// num.forEach((elem) => { 
//     console.log(elem * elem)
// })

//array to string
// let name = 'zeeshan'
// let arr = Array.from(name)
// console.log(arr)

for (let i of num) {
    console.log(i)
}
for (let i in num) {
    console.log(num[i])
}