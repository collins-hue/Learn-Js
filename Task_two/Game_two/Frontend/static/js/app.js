
const cardArray = [
    {
        name: 'fries',
        img: 'static/images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'static/images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'static/images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'static/images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'static/images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'static/images/pizza.png'
    },
    {
        name: 'fries',
        img: 'static/images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'static/images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'static/images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'static/images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'static/images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'static/images/pizza.png'
    },
    
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []


function createBoard () {
    for (let i = 0; i<cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'static/images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log('Check for Match!')
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'static/images/blank.png')
        cards[optionTwoId].setAttribute('src', 'static/images/blank.png')
        alert('You clicked the same Image!')
    }
    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'static/images/white.png')
        cards[optionTwoId].setAttribute('src', 'static/images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'static/images/blank.png')
        cards[optionTwoId].setAttribute('src', 'static/images/blank.png')
        alert('Sorry, try again!')
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.textContent = 'Congratulation, you won all!'
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length == 2 ) {
        setTimeout(checkMatch, 500)
    }

}