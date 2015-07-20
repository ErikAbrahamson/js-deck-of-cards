// This is the 'deal' button
var showCards = document.getElementById("cards");
showCards.onclick = function(){
  var cardContainer = document.getElementById('container');
  cardContainer.innerHTML = "";
  displayCards();
};

// This is called above, for when user clicks deal button
function displayCards(){
  var deck = newDeck();
  var shuffledCards = shuffleCards(deck);

  for(var i=0; i < deck.length; i++){
    var card = document.createElement('div');
    card.className = "card";
    var cardContainer = document.getElementById('container');
    cardContainer.appendChild(card);
    card.style.backgroundImage = "url(images/" + shuffledCards[i].suit + "-" + shuffledCards[i].card + ".png" + ")";

  }
}

// This removes all the cards from the document
var removeCards = document.getElementById('reset');
removeCards.onclick = function() {
  var cardContainer = document.getElementById('container');
  cardContainer.innerHTML = '';
};

// Creates a deck of 52 cards
function newDeck() {

  var ranks = [
    {card:"a"},
    {card:"2"},
    {card:"3"},
    {card:"4"},
    {card:"5"},
    {card:"6"},
    {card:"7"},
    {card:"8"},
    {card:"9"},
    {card:"10"},
    {card:"j"},
    {card:"q"},
    {card:"k"}
  ];

  var suits = [ "d", "c", "s", "h"];
  var deck = [];

  for (var j = 0; j < suits.length; j++) {

    for (var i = 0; i < ranks.length; i++) {
      deck.push({
        card: ranks[i].card,
        suit: suits[j]
      });
      // ranks[i].suit = suits[j];
      // deck.push(ranks[i]);
      // console.log(ranks[i]);
    }
  }
  return deck;
}

// Shuffles the Deck
function shuffleCards(cardDeck) {
  var deckCopy = newDeck();
  var shuffledDeck = [];

  while(deckCopy.length > 0) {
    var randomIndex = Math.floor(Math.random() * deckCopy.length);
    shuffledDeck.push(deckCopy[randomIndex]);
    deckCopy.splice(randomIndex, 1);
  }
  return shuffledDeck;
}
