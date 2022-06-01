let balls = document.getElementsByClassName('ball')
let rgbColor = document.getElementById('rgb-color')
let answer = document.getElementById('answer')
let resetGameButton = document.getElementById('reset-game')
resetGameButton.addEventListener('click',resetGame)
let scoreElement = document.getElementById('score')
let score = 0
let gameOver = false

function randomizeColors() {
    for (let i = 0; i < balls.length; i += 1) {
        balls[i].style.backgroundColor = 'rgb( '+ Math.floor(Math.random()*256).toString() + ' ' + Math.floor(Math.random()*256).toString() + ' ' + Math.floor(Math.random()*256).toString() + ')'
        balls[i].addEventListener('click',selectBall)
    }
}

function selectBall(event) {
    if (gameOver == false) {
        unselectBalls()
        event.target.classList.add('selected')
        if(event.target.style.backgroundColor == rgbColor.innerText) {
            answer.innerText = 'Acertou!'
            score += 3
            scoreElement.innerText = score
            gameOver = true
        } else {
            answer.innerText = 'Errou! Tente novamente!'
            gameOver = true
        }           
    }   
}

function unselectBalls() {
    for (let i = 0; i < balls.length; i += 1) {
        balls[i].classList.remove('selected')
    }
}

function rightAnswer() {
    rgbColor.innerText = balls[Math.floor(Math.random()*6)].style.backgroundColor
}

function resetGame() {
    randomizeColors()
    rightAnswer()
    answer.innerText = 'Escolha uma cor'
    gameOver = false
}

randomizeColors()
rightAnswer()

