import React from 'react';
import './style/Cards.scss';
import cardLists from './JSON/cardLists.json';

export const Cards = () => {
  return (
    <div className='cards-container'>
      <div className='cards-wrapper'>
        {cardLists.map((card) => (
          <div key={card.id} className='card-wrapper'>
            <div className='card'>
              <div className={`image-wrapper ${card.id}`}>
                <img src={`/images/cards/${card.id}.jpg`} alt={card.title} />
              </div>
              <div className='card-text'>
                <h3>{card.title}</h3>
                <p>{card.content}</p>
              </div>
              <button>
                <a href={card.link}>{card.button}</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
