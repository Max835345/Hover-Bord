const board = document.querySelector('#board');
const colors = ['#c94d4d','blue','orange','yellow','#4d8bc9','#5290cf','#8c13e3','aqua']
const square_Num = 500

for (let i = 0; i<square_Num; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(elem){
    const color = getRandColor()
    elem.style.backgroundColor = color
    elem.style.boxShdow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(elem) {
    elem.style.backgroundColor = '#1d1d1d'
    elem.style.boxShdow = `0 0 2px #000,`
}

function getRandColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}