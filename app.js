'use strict';

window.addEventListener("load", function () {
    
    var rowCounter = 1;
    var cards = document.querySelectorAll("img");
    
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
    let cardColor = Math.floor( Math.random() * 4) + 1;
    let cardValue = Math.floor( Math.random() * 13) + 1;
    let searchPath = "cards/";

    // Clubs = 1
    // Diamonds = 2
    // Hearts = 3
    // Spades = 4
    if(cardColor === 1){
        searchPath += "c-";
    }
    if(cardColor === 2){
        searchPath += "d-";
    }
    if(cardColor === 3){
        searchPath += "h-";
    }
    if(cardColor === 4){
        searchPath += "s-";
    }

    searchPath += cardValue + ".png" ;
    card.src = searchPath;
}

