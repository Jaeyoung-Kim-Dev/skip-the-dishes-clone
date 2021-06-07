import React from 'react';
import './style/Benefits.scss';

export const Benefits = () => {
  return (
    <div className='benefits-container'>
      <div>Benefits</div>
      <div class='c5179 c5187'>
        <div class='c5181'>
          <div class='c5180 c5188'>
            <div class='c5182'>
              <h2 class='c5183 c5189'>More Choice</h2>
              <div class='c5184 c5190'>
                We have thousands of restaurants, including local favorites that
                don't normally deliver. Discover new cuisines all around you.
              </div>
            </div>
          </div>
        </div>
        <div
          className='slide1'
          style={{ backgroundImage: `url('/images/more-choice_desktop.jpg')` }}
        >
          <div class='c5186 c5192'></div>
        </div>
      </div>
    </div>
  );
};
