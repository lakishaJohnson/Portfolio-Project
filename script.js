console.log("It's awake, right?");

fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=52")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Something ain't right");
    }
  })
  .then((data) => {
    const cards = data.cards;

    for (let i = 0; i < cards.length; i++) {
      if (cards[i].value === "QUEEN" && cards[i].suit === "SPADES") {
        const queenSpade = document.createElement("img");
        queenSpade.setAttribute("class", "cardImage")
        queenSpade.src = cards[i].image;
        queenSpade.alt = "Queen of Spades";
        document.body.appendChild(queenSpade);
        return;
      }
    }
    console.log("The Queen of Spades card was not found in the deck.");
  })
  .catch((error) => console.error("catch error", error));
