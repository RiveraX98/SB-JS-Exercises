import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import Card from "./Card";
import "./Deck.css";

const Deck = () => {
  const [cards, setCards] = useState([]);
  const deckId = useRef();

  useEffect(() => {
    async function shuffleDeck() {
      const deck = await axios.get(
        `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`
      );
      deckId.current = deck.data.deck_id;
    }
    shuffleDeck();
  }, []);

  async function drawCard() {
    try {
      const res = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deckId.current}/draw/?count=1`
      );

      if (res.data.remaining === 0) throw new Error("Deck empty!");

      const card = res.data.cards[0];

      setCards((cards) => [
        ...cards,
        { name: card.suit + " " + card.value, img: card.image, id: uuid() },
      ]);
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className="Deck">
      <button className="drawCard" onClick={drawCard}>
        NEXT CARD
      </button>
      <div className="cards">
        {cards.map(({ name, img, id }) => (
          <Card cardName={name} key={id} cardImg={img} />
        ))}
      </div>
    </div>
  );
};

export default Deck;
