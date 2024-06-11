
/* 
CARDS: 
1 OR 11 (you choose) = A
2
3
4
5
6
7
8
9
10
11 or 10 = J
12 or 10 = Q
13 or 10 = K

First or closest to 21 wins.
 */


let outputEl = document.getElementById("output-text")
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let cards = []; // array
let message = "";
let sumEl = document.querySelector("#sum-el"); /* Specify id because of querySelector */
let cardEl = document.querySelector("#card-el");

let player = {
  name: "Per",
  chips: 145
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let Number = Math.floor( Math.random()*14 ); // 0-13
  if (Number > 10) {
    return 10;
  }
  else if (Number === 1) {
    return 11;
  }
  else {
    return Number;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {

  cardEl.textContent = "Cards: ";
  
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum < 21) {
    message = "Do you wanna draw a new card?";
  }
  else if (sum === 21) {
    message = "NICE, You've got BlackJack!";
    hasBlackJack = true;
  }
  else {
    message = "You're OUT!";
    isAlive = true;
  }
  outputEl.textContent = message;
}

function newCard() {  
  
  if (sum <= 22) {
    if (isAlive === true && hasBlackJack === false) {
      let card = getRandomCard();
      sum += card;
      cards.push(card);
      renderGame();
    }
  }
  else {
    
  }
}

