let user = 0
let computer = 0
let u_word = prompt('Choose snake or water or gun: ')
const words = ["snake", "water", "gun"];
const randomWord = words[Math.floor(Math.random() * words.length)];
alert('computer has choosen ' + randomWord);
if (u_word === randomWord) {
    alert('Its a draw')
}
else if ((u_word === 'snake' && randomWord === 'water') || (u_word === 'water' && randomWord === 'gun') || (u_word === 'gun' && randomWord === 'snake')) {
    user += 1
    alert('You win')
}
else{
    computer += 1
    alert('Computer Won')
}


