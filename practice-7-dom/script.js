// document.getElementsByTagName('nav')[0].firstElementChild.style.color = 'red'
document.getElementsByTagName('nav')[0].firstElementChild.style.color = 'green'
document.getElementsByTagName('nav')[0].lastElementChild.style.color = 'green'

// document.getElementsByClassName('.ulist').forEach(li => {
//     li.style.background = 'blue'
// });

document.querySelectorAll('.ulist li').forEach(li => {
    li.style.background = 'cyan'
});