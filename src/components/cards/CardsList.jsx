import React, { useEffect } from "react";
import { useCards } from "../../context/CardsContext";
import CardItem from "./CardItem";

const CardsList = () => {
  const {cards, getAllCards} = useCards()
    useEffect(() => {
      getAllCards()
    },[])
  return (
    <>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "50px",
            justifyContent: "space-between",
            width: "80%",
            margin: "50px auto",
          }}
        >
          {cards.map((card) => (
            <CardItem key={card.id} card={card} />
          ))}
        </div>
    </>
  );
};

export default CardsList;
