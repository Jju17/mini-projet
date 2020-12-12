const snakeGameHTML = `
    <h1>Snake Game</h1>
    <button id="start">Start/Restart</button>
    <h2>Score <span id="score">0</span></h2>
    <div class="grid"></div>
`
let grid;
let startButton;
let scoreDisplay;

let squares = [];
let currentSnake = [2,1,0];
let direction = 1;
let timerId;
const width = 10
let appleIndex = 0
let score = 0
let intervalTime = 1000



document.getElementById("miniGameButton").addEventListener("click", () => {
    document.getElementById("mainContent").innerHTML = snakeGameHTML;
    grid = document.querySelector('.grid');
    startButton = document.getElementById('start')
    scoreDisplay = document.getElementById('score')
    createGrid()
    currentSnake.forEach(index => squares[index].classList.add('snake'))
    document.addEventListener('keyup', control)
    startButton.addEventListener('click', startGame)
})


function startGame() {
    clearInterval(timerId)
    currentSnake.forEach(index => squares[index].classList.remove('snake'))
    squares[appleIndex].classList.remove('apple')
    score = 0
    direction = 1
    intervalTime = 1000
    currentSnake = [2,1,0]
    timerId = setInterval(move, intervalTime)
    currentSnake.forEach(index => squares[index].classList.add('snake'))
    generateApple()
}    




function createGrid() {
    for (let i=0; i < width*width; i++) { 
        const square = document.createElement('div')
        square.classList.add('square')
        grid.appendChild(square)
        squares.push(square)
    }
}


function move() {
    if (
        (currentSnake[0] + width >= width*width && direction === width) ||
        (currentSnake[0] % width === width-1 && direction === 1) ||
        (currentSnake[0] % width === 0 && direction === -1) ||
        (currentSnake[0] - width < 0 && direction === -width) ||
        squares[currentSnake[0] + direction].classList.contains('snake')
    )
    return clearInterval(timerId)



    const tail = currentSnake.pop()
    squares[tail].classList.remove('snake')
    currentSnake.unshift(currentSnake[0] + direction)

    if (squares[currentSnake[0]].classList.contains('apple')) {
    squares[currentSnake[0]].classList.remove('apple')
    squares[tail].classList.add('snake')
    currentSnake.push(tail)
    generateApple()
    scoreDisplay.textContent = ++score;
    clearInterval(timerId)
    intervalTime *= 0.85
    timerId = setInterval(move, intervalTime)
    }
    squares[currentSnake[0]].classList.add('snake')

}

function control(e) {
    switch (e.keyCode) {
        case 37:
            direction = -1;
            break;
        case 38:
            direction = -width
            break;
        case 39:
            direction = 1;
            break;
        case 40:
            direction = +width
            break;
        default:
            console.log('other')
            break;
    }
}

function generateApple() {
    do {
        appleIndex = Math.floor(Math.random() * squares.length)
    } while (squares[appleIndex].classList.contains('snake'))
    squares[appleIndex].classList.add('apple')
}

