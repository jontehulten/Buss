'use strict';

var rowCounter = 1;
var deckCounter = 0;
var deck = [];

window.addEventListener("load", function () {

    var cards = document.querySelectorAll("img");
    fillDeck();
    ShuffleDeck();
    placeCards(cards)
    
    for(let i = 0; i < cards.length; i++){
        cards[i].addEventListener("click", function(e){
            if( e.target.nodeName === "IMG") {
                CheckCard(e);  
            }
        });
    }
});

function CheckCard(e){

    /* Issues
    - Check Row (Ska bara gå att vända rad användaren är i) 
    - Check value (klätt eller inte klätt)
    - New card should be hidden
    */
    let card = e.target;
    let rows = document.querySelectorAll(".row");
    if(rowCounter === 1){

        let childrens = rows[3].children;

        for(let i = 0; i < rows[3].children.length; i++){
            
            if(childrens[i] === e.target.parentNode){
                console.log("rätt rad");
                rowCounter++;
                
                card.src = deck[deckCounter]; 
                deckCounter++;
            }
        }
        
    }
    if(rowCounter === 2){

        let childrens = rows[2].children;

        for(let i = 0; i < rows[2].children.length; i++){
            
            if(childrens[i] === e.target.parentNode){
                console.log("rätt rad");
                rowCounter++;
                
                card.src = deck[deckCounter]; 
                deckCounter++;
            }
        }
        
    }
    if(rowCounter === 3){

        let childrens = rows[1].children;

        for(let i = 0; i < rows[1].children.length; i++){
            
            if(childrens[i] === e.target.parentNode){
                console.log("rätt rad");
                rowCounter++; 
                
                card.src = deck[deckCounter]; 
                deckCounter++;
            }
        }
        
    }
    if(rowCounter === 4){

        let childrens = rows[0].children;

        for(let i = 0; i < rows[0].children.length; i++){
            
            if(childrens[i] === e.target.parentNode){
                console.log("rätt rad");
                rowCounter = 1; 
                
                card.src = deck[deckCounter]; 
                deckCounter++;
            }
        }
        
    }
    /*
    let card = e.target;
    card.src = deck[deckCounter]; 
    deckCounter++;
    
    if(deckCounter === 51){
        deckCounter = 0;
    }*/

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
function placeCards(cards){

    //Hidden src på kort, vart lägger vi den?
    for(let i=1; i<11; i++){
        let HiddenValue = document.getElementById("card" + i);
        HiddenValue.value = deck[deckCounter];
        deckCounter ++;
    }
}

