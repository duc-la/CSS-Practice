function refreshCards(cardArray) {
    cardArray.splice(0);
    
    for(let value = 2; value <= 14; value++){
        for(let suit = 0; suit <= 3; suit++){
            cardArray.push(new Card(value, suit));
        }
    }
}

function getRandomCard(cardArray){
    let randomCardIndex = Math.floor(Math.random() * cardArray.length);
    let randomCard = cardArray[randomCardIndex];
    cardArray.splice(randomCardIndex, 1);

    return randomCard;
}


function alertButton() {
    let cardArray = [];
    refreshCards(cardArray);
    let card = getRandomCard(cardArray);
    alert(card.value); 
    alert("Card number: " + card.value + " Card suit: " + card.suit);
}

function testButton(){}