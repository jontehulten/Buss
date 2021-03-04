'use strict';

var rowCounter = 1;
var deckCounter = 0;
var deck = [];
var message = document.querySelector(".message");

//Animationsvariabler
let delay = 100; //Hur lång tid det tar innan animationerna börjar (ms)
let delayInterval = 100; //Hur lång delay mellan varje korts animation (ms)
let xStart = 800; //Startposition i x-led (%)
let yStart = 80; //Startposition i y-led (%)

//Audio
var sounds = ["cs1", "cs2", "cs3", "cs4", "cs5", "cs6"]; //array med namn på ljudfiler
var cardAudio = document.getElementById("cardAudio");

window.addEventListener("load", function () {

    var cards = document.querySelectorAll("img");

    fillDeck();
    ShuffleDeck();
    placeStarterCards();

    cards.forEach(card => {
        card.style.opacity = 0;
        animateIn(card, delay, xStart, yStart);
        delay += delayInterval;
    });

    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", function (e) {
            if (e.target.nodeName === "IMG") {
                CheckCard(e);
            }
        });
    }
});

function CheckCard(e) {

    message.textContent = "";
    let card = e.target;
    let rows = document.querySelectorAll(".row");
    if (rowCounter === 1) {

        let childrens = rows[3].children;

        for (let i = 0; i < rows[3].children.length; i++) {

            if (childrens[i] === e.target.parentNode) {
                rowCounter++;

                let hiddenValue = document.getElementById(e.target.parentNode.id);
                //Funktion för att byta src på kortet med animation
                revealCard(card, hiddenValue);
                playCardSound();
                let faceCard = hiddenValue.value.split(/[-,.]/);

                if (faceCard[1] == 1 || faceCard[1] == 10 || faceCard[1] == 11 || faceCard[1] == 12 || faceCard[1] == 13) {
                    rowCounter = 1;
                    message.textContent = "drick 2";
                    turnAllCards();

                }
                placeNewCardFromDeck(hiddenValue);
            }
        }

    }
    if (rowCounter === 2) {

        let childrens = rows[2].children;

        for (let i = 0; i < rows[2].children.length; i++) {

            if (childrens[i] === e.target.parentNode) {
                rowCounter++;

                let hiddenValue = document.getElementById(e.target.parentNode.id);

                //Funktion för att byta src på kortet med animation
                revealCard(card, hiddenValue);
                playCardSound();

                let faceCard = hiddenValue.value.split(/[-,.]/);

                if (faceCard[1] == 1 || faceCard[1] == 10 || faceCard[1] == 11 || faceCard[1] == 12 || faceCard[1] == 13) {
                    rowCounter = 1;
                    message.textContent = "drick 4";
                    turnAllCards();

                }
                placeNewCardFromDeck(hiddenValue);
            }
        }

    }
    if (rowCounter === 3) {

        let childrens = rows[1].children;

        for (let i = 0; i < rows[1].children.length; i++) {

            if (childrens[i] === e.target.parentNode) {
                rowCounter++;

                let hiddenValue = document.getElementById(e.target.parentNode.id);

                //Funktion för att byta src på kortet med animation
                revealCard(card, hiddenValue);
                playCardSound();

                let faceCard = hiddenValue.value.split(/[-,.]/);

                if (faceCard[1] == 1 || faceCard[1] == 10 || faceCard[1] == 11 || faceCard[1] == 12 || faceCard[1] == 13) {
                    rowCounter = 1;
                    message.textContent = "drick 6";
                    turnAllCards();

                }
                placeNewCardFromDeck(hiddenValue);
            }
        }

    }
    if (rowCounter === 4) {

        let childrens = rows[0].children;

        for (let i = 0; i < rows[0].children.length; i++) {

            if (childrens[i] === e.target.parentNode) {
                rowCounter = 1;

                let hiddenValue = document.getElementById(e.target.parentNode.id);

                //Funktion för att byta src på kortet med animation
                revealCard(card, hiddenValue);
                playCardSound();
                let faceCard = hiddenValue.value.split(/[-,.]/);

                if (faceCard[1] == 1 || faceCard[1] == 10 || faceCard[1] == 11 || faceCard[1] == 12 || faceCard[1] == 13) {
                    rowCounter = 1;
                    message.textContent = "drick 8";
                    turnAllCards();

                }
                else {
                    message.textContent = "Du vann bussresan!";
                }
                placeNewCardFromDeck(hiddenValue);
            }
        }

    }

    if (deckCounter === 51) {
        deckCounter = 0;
    }
}

function ShuffleDeck() {

    /* shuffle arrays with strings stackOverflow
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

function fillDeck() {

    for (let i = 1; i < 5; i++) {
        for (let j = 1; j < 14; j++) {
            let searchPath = "cards/";
            if (i === 1) {
                searchPath += "c-";
            }
            if (i === 2) {
                searchPath += "d-";
            }
            if (i === 3) {
                searchPath += "h-";
            }
            if (i === 4) {
                searchPath += "s-";
            }
            searchPath += j + ".png";
            deck.push(searchPath);
        }
    }
}

function placeStarterCards() {

    //Med hidden value kommer det att bli möjligt att fuska?

    for (let i = 1; i < 11; i++) {
        let hiddenValue = document.getElementById("card" + i);
        hiddenValue.value = deck[deckCounter];
        deckCounter++;
    }
}

function placeNewCardFromDeck(card) {

    card.value = deck[deckCounter];
    deckCounter++
}

function turnAllCards() {
    let cards = document.querySelectorAll("img");
    setTimeout(function () {

        for (let i = 0; i < 10; i++) {
            cards[i].src = "cards/card-game-back.png";
        }
    }, 1000);
}


function revealCard(card, hiddenValue) {
    card.src = hiddenValue.value; //byt src
    spinCardHide(card); //Kort roterar bort
    setTimeout(function () { //Vänta 150 sekunder (så lång tid det tar för kortet att rotera bort)
        spinCardShow(card); // snurra tillbaka kortet
    }, 150);
}

function playCardSound() {
    let randomPosition = Math.floor(Math.random() * 6);
    cardAudio.setAttribute("src", "audio/" + sounds[randomPosition] + ".mp3");
    cardAudio.play();
}

//Animationsfunktioner
function animateIn(card, delay, xStart, yStart) {

    let keyframes = [
        {
            transform:
                "rotate(25deg) translateX(" + xStart + "%) translateY(" + yStart + "%)",
            opacity: 0,
        },
        {
            transform:
                "rotate(0deg) translateX(0%) translateY(0%)",
            opacity: 1,
        },
    ];

    let options = {
        duration: 1000,
        iterations: 1,
        fill: "forwards",
        easing: "ease",
        delay: delay
    };

    card.animate(keyframes, options)
}

function spinCardHide(card) {
    let keyframes = [
        {
            transform:
                "rotateY(0deg)",
        },
        {
            transform:
                "rotateY(90deg)",
        },
    ];

    let options = {
        duration: 150,
        iterations: 1,
        fill: "forwards",
        easing: "ease",
        delay: 0
    };

    card.animate(keyframes, options)
}

function spinCardShow(card) {
    let keyframes = [
        {
            transform:
                "rotateY(90deg)",
        },
        {
            transform:
                "rotateY(0deg)",
        },
    ];

    let options = {
        duration: 200,
        iterations: 1,
        fill: "forwards",
        easing: "ease",
        delay: 0
    };

    card.animate(keyframes, options)
}
