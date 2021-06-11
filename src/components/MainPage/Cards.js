import React from 'react';
import './style/Cards.scss';
import cardLists from './JSON/cardLists.json';

export const Cards = () => {
  return (
    <div className='cards-container'>
      <div>
        {cardLists.map((card) => (
          <div key={card.id} className='card'>
            <div>
              <img src={`/images/cards/${card.id}.jpg`} alt={card.title} />
              <div>
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
