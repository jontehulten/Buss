'use strict';

var rowCounter = 1;
var deckCounter = 0;
var deck = [];

window.addEventListener("load", function () {

    var cards = document.querySelectorAll("img");
    fillDeck();
    ShuffleDeck();
    
    for(let i = 0; i < cards.length; i++){
        cards[i].addEventListener("click", function(e){
            console.log(e.target.nodeName);
            if( e.target.nodeName === "IMG") {
                ShowCard(e);  
            }
        });
    }
});

function ShowCard(e){
    let card = e.target;
    card.src = deck[deckCounter]; 
    deckCounter++;
    
    if(deckCounter === 51){
        deckCounter = 0;
    }

}
function ShuffleDeck(){
 
    /* suffle arrays with strings stackOverflow
    //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    */
    var currentIndex = deck.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = deck[currentIndex];
    deck[currentIndex] = deck[randomIndex];
    deck[randomIndex] = temporaryValue;
  }
}
function fillDeck(){

    for(let i=1; i<5; i++){
    for(let j = 1; j < 14; j++){
        let searchPath = "cards/";
        if(i === 1){
            searchPath += "c-";
        }
        if(i === 2){
            searchPath += "d-";
        }
        if(i === 3){
            searchPath += "h-";
        }
        if(i === 4){
            searchPath += "s-";
        }
        searchPath += j + ".png";
        deck.push(searchPath);
        }
    }
}

