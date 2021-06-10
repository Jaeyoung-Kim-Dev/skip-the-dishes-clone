import React from 'react';
import './style/SkipRewards.scss';

export const SkipRewards = () => {
  return (
    <div className='skipRewards-container'>
      <div>
        <div
          className='photo'
          style={{
            backgroundImage: `url('/images/rewards-landingPage-en-1x.png')`,
          }}
        ></div>
        <div className='text'>
          <div>
            <div className='rewards-title'>
              <svg
                role='img'
                viewBox='0 0 1697 200'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Skip Rewards</title>
                <path d='M1 168.89a4.31 4.31 0 01.28-5.84l21.39-24.44c1.11-1.67 3.33-2.5 5.83-.56 13.34 12.23 23.33 17.78 36.95 17.78 12.22 0 21.39-3.88 21.39-15 0-9.44-6.95-12.22-17.78-16.94l-23.6-10.83C24.89 103.61 4.34 88.89 4.34 57.5 4.34 20 32.68 0 67.12 0c23.34 0 42.5 8.89 59.44 26.11 1.67 1.39 1.95 3.89.56 6.11l-20.56 24.72c-1.39 2.23-3.89 3.06-6.11 1.67-12.45-10-21.39-14.44-31.66-14.44C57.12 44.17 51 50 51 58.05c0 10 7.51 12.23 21.4 18.62L91.28 85c20.29 9.45 42.5 22.5 42.5 56.11 0 41.94-35 58.89-67.21 58.89-31.12 0-53.89-15.56-65.57-31.11zM316.85 196.66h-46.38a5.31 5.31 0 01-5-2.49L218.24 125l-18.89 23.89v43.33a4.37 4.37 0 01-4.43 4.44h-39.73a4.15 4.15 0 01-4.16-4.44V6.67a4.16 4.16 0 014.16-4.45h39.73a4.38 4.38 0 014.43 4.45v76.38L256 4.45a6 6 0 015-2.23h48.34c3.61 0 3.88 2.78 2.22 5L248 87.5l71.39 104.17c1.91 2.77.8 4.99-2.54 4.99zM332.45 192.22V6.67a4.16 4.16 0 014.16-4.45h39.72a4.39 4.39 0 014.44 4.45v185.55a4.38 4.38 0 01-4.44 4.44h-39.72a4.15 4.15 0 01-4.16-4.44zM409.68 192.22V6.67a4.16 4.16 0 014.16-4.45H475c47.78 0 70.28 26.11 70.28 64.45s-22.5 64.44-70.28 64.44h-17v61.11a4.38 4.38 0 01-4.44 4.44h-39.72a4.15 4.15 0 01-4.16-4.44zm64.16-103.89c12.77 0 25.28-3.33 25.28-21.66S486.61 45 473.84 45H458v43.33zM690.25 196.66h-13.89a5.29 5.29 0 01-5-2.77l-47-70.83h-31.1v69.71c0 2.51-1.39 3.89-3.9 3.89h-13a3.51 3.51 0 01-3.89-3.89V6.11a3.52 3.52 0 013.89-3.89h53c42 0 63.89 25.28 63.89 60.56 0 30-16.1 53.05-47.5 58.88l47.23 70c2.02 3.06.6 5-2.73 5zm-96.94-92.22h34.44C653 104.44 673 93.33 673 62.78c0-30.84-20-41.95-45.28-41.95h-34.41zM722.21 192.77V6.11c0-2.5 1.38-3.89 3.88-3.89h93.06A3.52 3.52 0 01823 6.11V17c0 2.5-1.39 3.88-3.89 3.88H743v66.06h72.23a3.51 3.51 0 013.88 3.89v10.84a3.51 3.51 0 01-3.88 3.88H743v72.51h76.39a3.5 3.5 0 013.88 3.88v10.83c0 2.51-1.38 3.89-3.88 3.89h-93.3c-2.5 0-3.88-1.38-3.88-3.89zM1105.28 7l-57.5 186.38a4.44 4.44 0 01-4.72 3.33h-15.28a4.43 4.43 0 01-4.72-3.33l-53.33-165-53.61 165a4.45 4.45 0 01-4.72 3.33h-15.28a4.44 4.44 0 01-4.73-3.33L833.89 7c-.84-2.78.28-4.73 3.34-4.73h13A4.44 4.44 0 01855 5.56l49.45 163.33L957.78 5.56c.83-2.51 2.23-3.34 4.44-3.34H977c2.22 0 3.61.83 4.44 3.34l53.34 163.33 49.38-163.33c1.11-2.51 2.5-3.34 4.73-3.34h13c3.11 0 4.22 1.95 3.39 4.78zM1240 196.66h-13.89c-2.23 0-3.61-.83-4.45-3.33l-14.17-40.28h-88.88l-14.17 40.28c-.83 2.5-2.21 3.33-4.72 3.33h-13.61c-3.06 0-4.17-1.94-3.06-4.72l67.26-186.38a5.08 5.08 0 015-3.34h15.28a5.09 5.09 0 015 3.34l67.5 186.38c1.1 2.78-.01 4.72-3.09 4.72zm-39.17-62.22L1163.09 27l-37.78 107.49zM1388.12 196.66h-13.9a5.28 5.28 0 01-5-2.77l-47-70.83h-31.11v69.71c0 2.51-1.39 3.89-3.9 3.89h-13a3.51 3.51 0 01-3.89-3.89V6.11a3.52 3.52 0 013.89-3.89h53.06c42 0 63.88 25.28 63.88 60.56 0 30-16.1 53.05-47.49 58.88l47.22 70c1.96 3.06.56 5-2.76 5zm-96.95-92.22h34.44c25.28 0 45.28-11.11 45.28-41.66 0-30.84-20-41.95-45.28-41.95h-34.44zM1420.08 192.77V6.11a3.52 3.52 0 013.92-3.89h42.22c67.78 0 98.89 41.67 98.89 97.22s-31.11 97.22-98.89 97.22H1424a3.51 3.51 0 01-3.92-3.89zm45.84-14.71c54.17 0 78-30 78-78.62s-23.88-78.61-78-78.61h-25v157.23zM1579.26 171.11c-1.39-2.22-2-3.89.28-5.83l6.67-7.51c2.5-2.49 4.72-1.66 6.38.28 10.28 13.34 23.34 22.78 44.45 22.78 25 0 39.72-13.33 39.72-33.61 0-21.39-15.56-30-35.27-39.72l-23.61-11.39c-20.57-9.72-34.17-24.44-34.17-47.5 0-30 23.61-48.61 53.88-48.61 22.23 0 39.17 9.44 51.67 24.72 2.5 2.78 1.67 4.45-.56 7l-5.83 6.66c-2.22 2.5-4.16 2.23-6.39 0-10.83-12.49-22.22-19.17-38.33-19.17-19.16 0-34.16 10-34.16 29.17 0 14.17 8 23.34 25.27 31.67l23.06 11.39c22.78 11.11 44.71 24.44 44.71 55.55 0 33.06-25.27 53.06-60 53.06-28.32-.05-47.21-13.11-57.77-28.94z'></path>
              </svg>
            </div>
            <div className='rewards-text'>
              <span>
                This is the ultimate rewards program for the ultimate foodie.
                Earn points on every order and use your points to get more of
                what you love: free food. Order, earn points, and start getting
                rewarded now.
              </span>
              <span>
                There are no sign-ups or monthly fees. To begin, all you need is
                a Skip account. It’s that easy.
              </span>
            </div>
            <div className='learn-more'>
              <a href='/rewards'>
                <span>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
