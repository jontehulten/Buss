'use strict';

var rowCounter = 1;
var deckCounter = 0;
var deck = [];
var message = document.querySelector(".message")

window.addEventListener("load", function () {

    var cards = document.querySelectorAll("img");
    fillDeck();
    ShuffleDeck();
    placeStarterCards();
    
    for(let i = 0; i < cards.length; i++){
        cards[i].addEventListener("click", function(e){
            if( e.target.nodeName === "IMG") {
                CheckCard(e);  
            }
        });
    }
});

function CheckCard(e){

    message.textContent = "";
    let card = e.target;
    let rows = document.querySelectorAll(".row");
    if(rowCounter === 1){

        let childrens = rows[3].children;

        for(let i = 0; i < rows[3].children.length; i++){
            
            if(childrens[i] === e.target.parentNode){
                rowCounter++;
                
                let hiddenValue = document.getElementById(e.target.parentNode.id);
                card.src = hiddenValue.value;
                let faceCard = card.src.split(/[-,.]/);

                if(faceCard[1] == 1 || faceCard[1] == 10 || faceCard[1] == 11 ||faceCard[1] == 12 ||faceCard[1] == 13){
                    rowCounter = 1;
                    message.textContent = "drick 2";
                    turnAllCards();

                }
                placeNewCardFromDeck(hiddenValue);
            }
        }
        
    }
    if(rowCounter === 2){

        let childrens = rows[2].children;

        for(let i = 0; i < rows[2].children.length; i++){
            
            if(childrens[i] === e.target.parentNode){
                rowCounter++;
                
                let hiddenValue = document.getElementById(e.target.parentNode.id);
                card.src = hiddenValue.value;
                let faceCard = card.src.split(/[-,.]/);

                if(faceCard[1] == 1 || faceCard[1] == 10 || faceCard[1] == 11 ||faceCard[1] == 12 ||faceCard[1] == 13){
                    rowCounter = 1;
                    message.textContent = "drick 4";
                    turnAllCards();

                }
                placeNewCardFromDeck(hiddenValue);
            }
        }
        
    }
    if(rowCounter === 3){

        let childrens = rows[1].children;

        for(let i = 0; i < rows[1].children.length; i++){
            
            if(childrens[i] === e.target.parentNode){
                rowCounter++; 
                
                let hiddenValue = document.getElementById(e.target.parentNode.id);
                card.src = hiddenValue.value;
                let faceCard = card.src.split(/[-,.]/);

                if(faceCard[1] == 1 || faceCard[1] == 10 || faceCard[1] == 11 ||faceCard[1] == 12 ||faceCard[1] == 13){
                    rowCounter = 1;
                    message.textContent = "drick 6";
                    turnAllCards();

                }
                placeNewCardFromDeck(hiddenValue);
            }
        }
        
    }
    if(rowCounter === 4){

        let childrens = rows[0].children;

        for(let i = 0; i < rows[0].children.length; i++){
            
            if(childrens[i] === e.target.parentNode){
                rowCounter = 1; 
                
                let hiddenValue = document.getElementById(e.target.parentNode.id);
                card.src = hiddenValue.value;
                let faceCard = card.src.split(/[-,.]/);

                if(faceCard[1] == 1 || faceCard[1] == 10 || faceCard[1] == 11 ||faceCard[1] == 12 ||faceCard[1] == 13){
                    rowCounter = 1;
                    message.textContent = "drick 8";
                    turnAllCards();

                }
                else{
                    message.textContent = "Du vann bussresan!"; 
                }
                placeNewCardFromDeck(hiddenValue);
            }
        }
        
    }
    
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

function placeStarterCards() {

    //Med hidden value kommer det att bli möjligt att fuska?

    for(let i=1; i<11; i++){
        let hiddenValue = document.getElementById("card" + i);
        hiddenValue.value = deck[deckCounter];
        deckCounter ++;
        console.log(hiddenValue.value);
    }
}

function placeNewCardFromDeck(card) {

    card.value = deck[deckCounter];
    deckCounter++
}

function turnAllCards() {
    let cards = document.querySelectorAll("img");
    setTimeout(function(){

        for(let i=0; i<10; i++){
           cards[i].src = "cards/card-game-back.png";
        }
    }, 1000);
}

