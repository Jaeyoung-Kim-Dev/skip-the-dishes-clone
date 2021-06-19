import React from 'react';
import './style/PopularCuisines.scss';
import cuisines from './JSON/cuisines.json';

export const PopularCuisines = () => {
  return (
    <div className='popularcuisines-container'>
      <div className='popularcuisines-wrapper'>
        <h6>Popular Cuisines</h6>
        <ul>
          {cuisines.map((cuisine) => (
            <li key={cuisine.name}>
              <a href={cuisine.link}>
                <div
                  style={{
                    backgroundImage: `url('/images/cuisines/${cuisine.name}.jpg')`,
                  }}
                >
                  <p>{cuisine.name}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
