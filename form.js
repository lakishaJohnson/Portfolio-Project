function getRandomCard() {
    // Get a new deck from the API
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then((response) => response.json())
      .then((data) => {
        const deckId = data.deck_id;
  
        // Draw a card from the deck
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
          .then((response) => response.json())
          .then((data) => {
            // Check if the drawn card is the queen of spades
            if (
              data.cards[0].value === "QUEEN" &&
              data.cards[0].suit === "SPADES"
            ) {
              // Draw a new card and try again
              getRandomCard();
            } else {
              // Update the HTML with the card image and value, and add a "Try again" button
              const cardImgUrl = data.cards[0].image;
              const cardValue = data.cards[0].value;
              const cardSuit = data.cards[0].suit;
  
              const tryAgainButton =
                '<button id="try-again-button">Another Hit</button>';
              document.querySelector(".cardImage").src = cardImgUrl;
              document.querySelector("#question-box").innerHTML = `
              <p>You drew a ${cardValue} of ${cardSuit}!</p>
              ${tryAgainButton}`;
        }
      });
  });
  }
  document
    .querySelector("#question-box")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      getRandomCard();
    });
          
  
  