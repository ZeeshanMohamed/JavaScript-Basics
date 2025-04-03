// let num = [1,2,3,4,44]
// let b = num.toString()
// console.log(b, typeof b)
// let c = num.join(' and ')
// console.log(c, typeof c)
// let r = num.pop()
// console.log(num)
// console.log(r)
// let s = num.push(23)
// console.log(num)
// let t = num.shift()  // removes an element from start of array
// console.log(t)
// console.log(num)
// let u = num.unshift(88)  // adds an element from start of array
// console.log(u)
// console.log(num)

// let a = 'faheem'
// let b = a.split('').reverse().join('')
// let c = a.split('').sort().join('')
// console.log(a.split(''))
// console.log(b)
// console.log(c)
// console.log(a === b)

let a = ['faheem','zee','areeb']
let b = []
let sort_a = a.sort()
const new = sort_a.reduce
for (let i of sort_a) {
    if (i.length >= 5) {
        b.push(i)
    }
}
console.log(b)

// let str = [{name:'faheem', age:'24'},{name:'areeb', age:'20'},{name:'zeeshan', age:'23'}]
// let a