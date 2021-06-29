import React, { useState, useEffect, useRef, useCallback } from 'react';
import './style/Sidebar.scss';

export const Sidebar = (props) => {
  const { showSidebar, setShowSidebar } = props;
  // const [emailLogin, setEmailLogin] = useState(false);
  const sidebarModalRef = useRef();

  const closeSidebarModal = useCallback(() => {
    setShowSidebar(false);
    document.body.style.overflow = 'unset'; // allow scrolling once modal close
    // setEmailLogin(false);
  }, [setShowSidebar]);

  const clickBackgroundToClose = (e) => {
    if (sidebarModalRef.current === e.target) {
      closeSidebarModal();
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showSidebar) closeSidebarModal();
    },
    [showSidebar, closeSidebarModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.addEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <div
      className='sidebar-background'
      ref={sidebarModalRef}
      onClick={clickBackgroundToClose}
    >
      {/* <div className='sidebar-container'> */}
      <div className={'sidebar-container'}>
        <h2>Welcome!</h2>
        <div>
          <svg>
            <g>
              <path d='M2,11 L13.0833333,11 L10.79,8.70666667 C10.6017121,8.51903146 10.4958781,8.26415148 10.4958781,7.99833333 C10.4958781,7.73251519 10.6017121,7.47763521 10.79,7.29 C10.9776352,7.10171215 11.2325152,6.9958781 11.4983333,6.9958781 C11.7641515,6.9958781 12.0190315,7.10171215 12.2066667,7.29 L16.2066667,11.29 C16.3949545,11.4776352 16.5007886,11.7325152 16.5007886,11.9983333 C16.5007886,12.2641515 16.3949545,12.5190315 16.2066667,12.7066667 L12.2066667,16.7066667 C12.0190315,16.8949545 11.7641515,17.0007886 11.4983333,17.0007886 C11.2325152,17.0007886 10.9776352,16.8949545 10.79,16.7066667 C10.6017121,16.5190315 10.4958781,16.2641515 10.4958781,15.9983333 C10.4958781,15.7325152 10.6017121,15.4776352 10.79,15.29 L13.0833333,13 L2,13 C1.44771525,13 1,12.5522847 1,12 C1,11.4477153 1.44771525,11 2,11 Z M19.0151726,4.86808449 C20.9249747,6.74975697 22.000287,9.31879406 22.000287,11.9998452 C22.000287,14.6808964 20.9249747,17.2499335 19.0151726,19.131606 C15.1798071,22.9127407 8.9691348,22.9619656 5.07536696,19.2417361 C4.33848687,18.5396096 3.71280823,17.7293783 3.219841,16.8388968 C3.0443943,16.5288594 3.04690527,16.148948 3.22643474,15.8412568 C3.40596421,15.5335656 3.73546779,15.3444454 4.0917046,15.344631 C4.45878224,15.3462129 4.79597114,15.5472478 4.97191138,15.8694178 C6.73646263,19.0589968 10.4353118,20.6508778 13.9647255,19.7396728 C17.4941391,18.8284678 19.960111,15.6449866 19.960111,11.9998452 C19.960111,8.35470391 17.4941391,5.17122271 13.9647255,4.26001772 C10.4353118,3.34881273 6.73646263,4.94069366 4.97191138,8.13027267 C4.79509551,8.45115377 4.45807558,8.65081012 4.0917046,8.65172219 C3.73648717,8.65124034 3.40812071,8.46257556 3.22880615,8.15593907 C3.04949158,7.84930259 3.04607999,7.47061103 3.219841,7.16079373 C3.71280823,6.27031224 4.33848687,5.46008091 5.07536696,4.75795436 C8.9691348,1.03772492 15.1773042,1.08778407 19.0151726,4.86808449 Z'></path>
            </g>
          </svg>
          <span>Log In</span>
        </div>
        <div>
          <svg>
            <g>
              <path
                d='M12,5.73951667 C10.3433333,5.73951667 9.00033333,7.08251667 9.00033333,8.73918333 C9.00033333,10.39585 10.3433333,11.7389333 12,11.7389333 C13.6566667,11.7389333 14.9996667,10.39585 14.9996667,8.73918333 C14.9996667,7.08251667 13.6566667,5.73951667 12,5.73951667 M20.0046417,18.211075 L18.224475,18.211075 L18.224475,19.9912417 C18.224475,20.2706583 17.9978917,20.4971583 17.718475,20.4971583 C17.4391417,20.4971583 17.2126417,20.2706583 17.2126417,19.9912417 L17.2126417,18.211075 L15.431975,18.211075 C15.1525583,18.211075 14.9261417,17.9844917 14.9261417,17.7051583 C14.9261417,17.4257417 15.1525583,17.1992417 15.431975,17.1992417 L17.2126417,17.1992417 L17.2126417,15.418575 C17.2126417,15.1392417 17.4391417,14.9127417 17.718475,14.9127417 C17.9978917,14.9127417 18.224475,15.1392417 18.224475,15.418575 L18.224475,17.1992417 L20.0046417,17.1992417 C20.2840583,17.1992417 20.510475,17.4257417 20.510475,17.7051583 C20.510475,17.9844917 20.2840583,18.211075 20.0046417,18.211075 M17.784225,12.7944917 C20.5388917,12.7944917 22.7720583,15.027575 22.7720583,17.7822417 C22.7720583,20.5369083 20.5388917,22.7699917 17.784225,22.7699917 C15.0296417,22.7699917 12.7965583,20.5369083 12.7965583,17.7822417 C12.7965583,15.027575 15.0296417,12.7944917 17.784225,12.7944917 Z M11.54655,17.782275 C11.54655,18.077775 11.5686333,18.3681083 11.60855,18.652775 C9.30471667,18.518525 7.3123,17.2086083 6.22155,15.315775 C6.54655,14.6698583 6.91388333,14.1556083 7.3128,13.983775 C8.77555,13.3533583 9.68638333,12.977025 11.93005,12.977025 C12.6442167,12.977025 13.2143,13.0031083 13.7123,13.0628583 C12.3874667,14.2076083 11.54655,15.8981083 11.54655,17.782275 Z M11.9543417,19.9975333 C12.228175,20.7155333 12.630425,21.3703667 13.133675,21.9335333 C12.7615917,21.9755333 12.3833417,21.99795 12.0000083,21.99795 C6.477675,21.99795 2.00100833,17.5212 2.00100833,11.99895 C2.00100833,6.4767 6.477675,1.99995 12.0000083,1.99995 C17.5222583,1.99995 21.9990083,6.4767 21.9990083,11.99895 C21.9990083,12.3817833 21.9767583,12.7593667 21.9348417,13.1310333 C21.3715083,12.6277833 20.716675,12.2256167 19.9985917,11.95195 C19.973175,7.5627 16.3950917,3.9997 12.0000083,3.9997 C7.589175,3.9997 4.00084167,7.58811667 4.00084167,11.99895 C4.00084167,16.3945333 7.56450833,19.9728667 11.9543417,19.9975333 Z'
                id='signup-path-1'
              ></path>
            </g>
          </svg>
          <span>Sign Up</span>
        </div>
        <div>
          <svg>
            <g transform='translate(2.000000, 2.000000)'>
              <path
                d='M10.0048023,19.2980769 C11.3948926,19.2980769 12.7176429,19.0240385 13.9153332,18.5336538 C13.9441932,18.5192308 13.9682432,18.5096154 13.9971032,18.5 C14.0019132,18.5 14.0067232,18.5 14.0067232,18.4951923 C14.1750732,18.4326923 14.3578533,18.3990385 14.5454433,18.3990385 C14.7522733,18.3990385 14.9494834,18.4375 15.1274534,18.5144231 L19.1678543,20 L18.1048441,15.75 C18.1048441,15.4951923 18.1769941,15.2548077 18.2924341,15.0480769 L18.2924341,15.0480769 C18.3309142,14.9855769 18.3693942,14.9230769 18.4126842,14.8701923 C19.4179744,13.3653846 19.9999845,11.5769231 19.9999845,9.65865385 C20.0096045,4.32211538 15.5314935,0 10.0048023,0 C4.47811101,0 0,4.32211538 0,9.64903846 C0,14.9807692 4.47811101,19.2980769 10.0048023,19.2980769 Z M14.6224033,8.46153846 C15.4737735,8.46153846 16.1616037,9.14903846 16.1616037,10 C16.1616037,10.8509615 15.4737735,11.5384615 14.6224033,11.5384615 C13.7710331,11.5384615 13.083203,10.8509615 13.083203,10 C13.083203,9.14903846 13.7710331,8.46153846 14.6224033,8.46153846 Z M10.0048023,8.46153846 C10.8561725,8.46153846 11.5440026,9.14903846 11.5440026,10 C11.5440026,10.8509615 10.8561725,11.5384615 10.0048023,11.5384615 C9.15343207,11.5384615 8.46560192,10.8509615 8.46560192,10 C8.46560192,9.14903846 9.15343207,8.46153846 10.0048023,8.46153846 Z M5.38720122,8.46153846 C6.23857141,8.46153846 6.92640157,9.14903846 6.92640157,10 C6.92640157,10.8509615 6.23857141,11.5384615 5.38720122,11.5384615 C4.53583103,11.5384615 3.84800087,10.8509615 3.84800087,10 C3.84800087,9.14903846 4.53583103,8.46153846 5.38720122,8.46153846 Z'
                transform='translate(10.000000, 10.000000) scale(-1, 1) translate(-10.000000, -10.000000) '
              ></path>
            </g>
          </svg>
          <span>Need Help?</span>
        </div>
        <div>
          <svg viewBox='0 0 512 512'>
            <circle cx='256' cy='256' fill='#eee' r='256'></circle>
            <path
              d='M512 256A256 256 0 0 0 367.3 25.4v461.2A256 256 0 0 0 512 256zM0 256a256 256 0 0 0 144.7 230.6V25.4A256 256 0 0 0 0 256zm300.5 33.4L345 267l-22.2-11v-22.3L278.3 256l22.2-44.5h-22.2L256 178l-22.3 33.4h-22.2l22.2 44.5-44.5-22.3V256L167 267.1l44.5 22.3-11.2 22.3H245V345h22v-33.3h44.6z'
              fill='#d80027'
            ></path>
          </svg>
          <span>Canada</span>
        </div>
        <div>
          <svg>
            <path
              d='M9.99,0 C4.47,0 0,4.48 0,10 C0,15.52 4.47,20 9.99,20 C15.52,20 20,15.52 20,10 C20,4.48 15.52,0 9.99,0 Z M16.92,6 L13.97,6 C13.65,4.75 13.19,3.55 12.59,2.44 C14.43,3.07 15.96,4.35 16.92,6 Z M10,2.04 C10.83,3.24 11.48,4.57 11.91,6 L8.09,6 C8.52,4.57 9.17,3.24 10,2.04 Z M2.26,12 C2.1,11.36 2,10.69 2,10 C2,9.31 2.1,8.64 2.26,8 L5.64,8 C5.56,8.66 5.5,9.32 5.5,10 C5.5,10.68 5.56,11.34 5.64,12 L2.26,12 Z M3.08,14 L6.03,14 C6.35,15.25 6.81,16.45 7.41,17.56 C5.57,16.93 4.04,15.66 3.08,14 Z M6.03,6 L3.08,6 C4.04,4.34 5.57,3.07 7.41,2.44 C6.81,3.55 6.35,4.75 6.03,6 Z M10,17.96 C9.17,16.76 8.52,15.43 8.09,14 L11.91,14 C11.48,15.43 10.83,16.76 10,17.96 Z M12.34,12 L7.66,12 C7.57,11.34 7.5,10.68 7.5,10 C7.5,9.32 7.57,8.65 7.66,8 L12.34,8 C12.43,8.65 12.5,9.32 12.5,10 C12.5,10.68 12.43,11.34 12.34,12 Z M12.59,17.56 C13.19,16.45 13.65,15.25 13.97,14 L16.92,14 C15.96,15.65 14.43,16.93 12.59,17.56 Z M14.36,12 C14.44,11.34 14.5,10.68 14.5,10 C14.5,9.32 14.44,8.66 14.36,8 L17.74,8 C17.9,8.64 18,9.31 18,10 C18,10.69 17.9,11.36 17.74,12 L14.36,12 Z'
              id='globe-menu-path'
            ></path>
          </svg>
          <span>Français (CAN)</span>
        </div>
      </div>
    </div>
  );
};
