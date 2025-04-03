// let card_title = document.getElementsByClassName("card-title")[0]
// card_title.style.color = "red"
let card_title = document.getElementById("first-card")
card_title.style.color = "blue"

let ctitles = document.querySelectorAll(".card-title")
ctitles[0].style.color = 'blue'
ctitles[1].style.color = 'red'
ctitles[2].style.color = 'green'
console.log(ctitles)

document.querySelector(".this").style.color = 'black'
document.querySelector(".this").style.background = 'green'

console.log(document.getElementsByTagName('a'))
console.log(document.querySelector('#first-card').getElementsByTagName('a'))