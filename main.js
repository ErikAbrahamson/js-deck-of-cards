var reset = document.getElementById('reset');

window.onload = function() {
    reset.setAttribute('style', 'display: none');
};

cards.onclick = function() {
  var cardContainer = document.getElementById('container');
  cardContainer.innerHTML = '';
  displayCards();
  createRedeal();
  cards.setAttribute('style', 'display: none');
  reset.setAttribute('style', 'visibility: visible');

};

reset.onclick = function() {
  var cardContainer = document.getElementById('container');
  cardContainer.innerHTML = '';
  reset.setAttribute('style', 'visibility: hidden');
  cards.setAttribute('style', 'display: block');
};

function displayCards() {
  var deck = newDeck();
  var shuffledCards = shuffleCards(deck);

  for (var i = 0; i < deck.length; i++) {
    var card = document.createElement('div');
    card.className = "card";
    var cardContainer = document.getElementById('container');
    cardContainer.appendChild(card);
    card.style.backgroundImage = "url(images/" + shuffledCards[i].suit + "-" + shuffledCards[i].card + ".png" + ")";
  }
}

function createRedeal() {
  var redeal = document.createElement('button');
  if (document.body.childNodes.length <= 9 ) {
    var btnTxt = document.createTextNode('Redeal!');
    redeal.appendChild(btnTxt);
    document.body.insertBefore(redeal, reset);
    redeal.setAttribute('id', 'redeal');
  }
}

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
    }
  }
  return deck;
}

function shuffleCards(cardDeck) {
  var deckCopy = newDeck();
  var shuffledDeck = [];

  while (deckCopy.length > 0) {
    var randomIndex = Math.floor(Math.random() * deckCopy.length);
    shuffledDeck.push(deckCopy[randomIndex]);
    deckCopy.splice(randomIndex, 1);
  }
  return shuffledDeck;
}
