import React from 'react';
import './style/Benefits.scss';

export const Benefits = () => {
  return (
    <div className='benefits-container'>
      <div className='benefits-wrapper'>
        <div className='text1'>
          <div>
            <h2>More Choice</h2>
            <div>
              We have thousands of restaurants, including local favorites that
              don't normally deliver. Discover new cuisines all around you.
            </div>
          </div>
        </div>
        <div
          className='slide1'
          style={{ backgroundImage: `url('/images/more-choice_desktop.jpg')` }}
        ></div>
      </div>
    </div>
  );
};
