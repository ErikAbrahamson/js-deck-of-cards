showCards.onclick = function(){
  var cardContainer = document.getElementById('container');
  cardContainer.innerHTML = "";
  displayCards();
};

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
