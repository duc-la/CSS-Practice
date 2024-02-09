let cardArray = [];



class Card{
    constructor(value, suit){
        this.value = value; //2=2, 10=10, 11=jack, 14=ace
        this.suit = suit; //0=clover, 1=diamond, 2=heart, 3=spade
    }
}

function refreshCards() {
    cardArray.clear();
    
    for(let value = 2; value <= 14; value++){
        for(let suit = 0; suit <= 3; suit++){
            cardArray.push(new Card(value, suit));
        }
    }
}

function getRandomCard(){
    do {
        let randomCardIndex = Math.floor(Math.random() * cardArray.length);
    }
    while ()
}

refreshCards();


function alertButton() {
    alert
    alert("you a bitch fr fr")
}