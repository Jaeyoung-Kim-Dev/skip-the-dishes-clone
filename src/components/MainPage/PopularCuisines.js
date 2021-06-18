import React from 'react';
import './style/PopularCuisines.scss';
import cuisines from './JSON/cuisines.json';

export const PopularCuisines = () => {
  return (
    <div className='popularcuisines-container'>
      <div>
        <h6>Popular Cuisines</h6>
        <ul>
          {React.children.toArray(
            cuisines.map((cuisine) => (
              <li>
                <a href={cuisine.link}>
                  <div
                    style={{
                      backgroundImage: `url('/images/cuisines/${cuisine.name}.jpg')`,
                    }}
                  >
                    <p>{cuisine.name}</p>
                    <div></div>
                  </div>
                </a>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};
