const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice ()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3 )+1 // or you could use possibleComputerChoices instead of 3.length
    console.log(randomNumber)

    if (randomNumber == 1) {
        computerChoice = 'rock'
        console.log(computerChoice)
    }
    if (randomNumber == 2) {
        computerChoice = 'scissors'
        console.log(computerChoice)
    }
    if (randomNumber == 3 ) {
        computerChoice = 'paper'
        console.log(computerChoice)
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if(computerChoice  == userChoice){
        result = 'It is a Draw'
    }
    if(computerChoice == 'rock' && userChoice == 'paper') {
        result = 'You Win!'
    }
    if(computerChoice == 'rock' && userChoice == 'scissors') {
        result = 'You Lost!'
    }
    if(computerChoice == 'paper' && userChoice == 'scissors') {
        result = 'You Win!'
    }
    if(computerChoice == 'paper' && userChoice == 'scissors') {
        result = 'You win!'
    }

    resultDisplay.innerHTML = result
}