import React from 'react';
import "./CardsStyle.scss"

const CardItem = ({card}) => {
  return (
    <div className='card'>
      <div className="card__container">
        <div className="card__imageBox">
          <img src={card.image} className='card__imageBox__image' alt="" />
        </div>
        <div className="card__desc">
          <div className="card__desc__name">Name: {card.name}</div>
          <div className="card__desc__descrip">Description: {card.description}</div>
          <div className="card__desc__power">Power: {card.power}</div>
          <div className="card__desc__price">Price: {card.price}$</div>
          <div className="card__desc__rank">Rank: {card.rank}</div>
          <div className="card__desc__rating">Rating: {card.rating}</div>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
