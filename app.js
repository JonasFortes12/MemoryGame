document.addEventListener('DOMContentLoaded', () => {

    //opções de cartões
    const cardArray = [
        {
            name: 'hockey',
            img: 'imgs/hockey.png'
        },
        {
            name: 'hockey',
            img: 'imgs/hockey.png'
        },
        {
            name: 'baseball',
            img: 'imgs/baseball.png'
        },
        {
            name: 'baseball',
            img: 'imgs/baseball.png'
        },
        {
            name: 'boxing',
            img: 'imgs/boxing.png'
        },
        {
            name: 'boxing',
            img: 'imgs/boxing.png'
        },
        {
            name: 'chess-pawn',
            img: 'imgs/chess-pawn.png'
        },
        {
            name: 'chess-pawn',
            img: 'imgs/chess-pawn.png'
        },
        {
            name: 'cricket',
            img: 'imgs/cricket.png'
        },
        {
            name: 'cricket',
            img: 'imgs/cricket.png'
        },
        {
            name: 'football',
            img: 'imgs/football.png'
        },
        {
            name: 'football',
            img: 'imgs/football.png'
        },
    ]

    cardArray.sort(()=>0.5 - Math.random())

    const grid = document.querySelector('.grid')//retorna o elemento com class .grid
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    //tabela do jogo
    function creatBoard(){
        for(let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img')//criar elemento html
            card.setAttribute('src', 'imgs/blank.png')//defini atributo do elemento img (card)
            card.setAttribute('data-id', i)//numera cada card, de 0 a 11
            card.addEventListener('click', flipcard)
            grid.appendChild(card)//insere um elemento filho no grid
            
        }
    }

    //verificar a combinação de carta
    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if(cardsChosen[0] === cardsChosen[1]){
            alert("Combinação Encontrada!")
            cards[optionOneId].setAttribute('src', 'imgs/white.png')
            cards[optionTwoId].setAttribute('src', 'imgs/white.png')
            cardsWon.push(cardsChosen)
       }else{
            cards[optionOneId].setAttribute('src', 'imgs/blank.png')
            cards[optionTwoId].setAttribute('src', 'imgs/blank.png')
            alert("Errou! Tenta ae de novo.")
       } 
       cardsChosen = []
       cardsChosenId = []
       resultDisplay.textContent = cardsWon.length
       if(cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = 'Parabens! Achou tudo.'
       }
    }


    //virar a carta
    function flipcard(){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)

        if(cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }

    /* Operador '===' estritamente igual, operadores iguais 
    e do mesmo tipo.*/


    creatBoard()
})