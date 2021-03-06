import React from 'react';
import './style/NowServing.scss';
import { useWindowSize } from '../../hooks/useWindowSize';
import servingLists from './JSON/nowServing.json';

export const NowServing = () => {
  const isMobile = useWindowSize();

  return (
    <div className='nowserving-container'>
      <div className='nowserving-wrapper'>
        <h4>Now Serving</h4>
        {isMobile ? (
          <div className='mobile-screen'>
            {servingLists.map((list) => (
              <div key={list.province}>
                <p>{list.province}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className='desktop-screen'>
            <svg
              aria-labelledby='now-serving'
              height='100%'
              role='tablist'
              width='100%'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 1003 449'
            >
              <title id='now-serving'>
                Interactive map of areas where SkipTheDishes is available
              </title>
              <g
                aria-label='Alberta'
                aria-selected='false'
                role='tab'
                className='styles__Group-i6vatj-1 WPjxJ'
              >
                <g id='AB' transform='translate(133.000000, 95.000000)'>
                  <path d='M94.243471,241.788076 L54.795114,233.11808 C53.679446,232.872228 52.708129,232.191138 52.097686,231.22684 L50.893322,229.322568 C50.537665,228.760495 50.318531,228.123711 50.252444,227.461734 L47.930673,204.105738 L0.863952,132.288115 L26.431253,0.9046673 L127.737835,16.991071 L126.4126,29.629458 L115.187231,42.341687 L118.207272,44.071343 L123.120382,43.116601 L126.068247,38.278604 L106.363634,238.805702 C106.130588,241.184304 103.991428,242.908747 101.615744,242.635964 L94.243471,241.788076 Z'></path>
                  <circle
                    cx='66'
                    cy='98'
                    r='5'
                    style={{ fill: 'transparent' }}
                    className='styles__Tooltip-i6vatj-2 hrulyW'
                  ></circle>
                </g>
              </g>
              <g
                aria-label='British Columbia'
                aria-selected='false'
                role='tab'
                className='styles__Group-i6vatj-1 WPjxJ'
              >
                <g id='BC' transform='translate(0.000000, 53.000000)'>
                  <path
                    d='M10.8946919,210.035505 C10.7522253,209.845292 10.6918866,209.607525 10.7245701,209.372261 L11.2349356,205.759877 C11.2701332,205.511265 11.4084096,205.288516 11.6154051,205.145856 L13.9409623,203.539054 C14.3390306,203.26458 14.8837557,203.350509 15.1770692,203.734273 L34.5831238,216.597244 L40.8791269,235.232808 L59.7977249,257.298881 C62.29508,260.569214 57.6103165,267.028576 53.4846524,267.086975 C40.36563,256.752598 31.4077667,248.372693 26.6110627,241.947258 C21.9433311,235.694589 16.7045408,225.057338 10.8946919,210.035505 Z'
                    id='BC-2'
                  ></path>
                  <path
                    d='M177.299395,278.670308 L71.6154644,257.087337 C70.6122223,256.882899 69.7206409,256.322586 69.1069329,255.513246 L34.412825,209.742609 L24.7068622,204.822627 L14.8525865,159.478535 L16.2769006,155.4108 L11.1567004,123.828017 L24.9975211,109.669609 L29.3940572,92.156897 L0,0.6703078 L147.340148,48.572234 C148.77836,49.039812 149.643678,50.504788 149.358954,51.990054 L125.348159,177.242798 L177.299395,278.670308 Z'
                    id='BC-1'
                  ></path>
                  <circle
                    cx='75'
                    cy='140'
                    r='5'
                    style={{ fill: 'transparent' }}
                    className='styles__Tooltip-i6vatj-2 hrulyW'
                  ></circle>
                </g>
              </g>
              <g
                aria-label='New Brunswick'
                aria-selected='false'
                role='tab'
                className='styles__Group-i6vatj-1 WPjxJ'
              >
                <g id='NB' transform='translate(807.000000, 253.000000)'>
                  <polygon points='36.875954 64.684211 14.554506 33.281033 4.357044 29.797455 1.929987 30.134408 0.194638 20.186512 48.502016 0.747766 49.67253 15.09247 57.210918 24.372508 71.124131 26.293141 47.667797 59.731862'></polygon>
                  <circle
                    cx='38'
                    cy='33'
                    r='5'
                    style={{ fill: 'transparent' }}
                    className='styles__Tooltip-i6vatj-2 hrulyW'
                  ></circle>
                </g>
              </g>
              <g
                aria-label='Nova Scotia'
                aria-selected='false'
                role='tab'
                className='styles__Group-i6vatj-1 WPjxJ'
              >
                <g id='NS' transform='translate(859.000000, 242.000000)'>
                  <polygon
                    id='NS-1'
                    points='11.358325 102.289356 1.529798 93.597635 0.142999 87.365341 21.639258 57.049846 14.55823 61.031153 14.636531 49.333174 42.068013 36.722939 56.087388 40.269922 15.336021 102.657398'
                  ></polygon>
                  <circle
                    cx='35'
                    cy='54'
                    r='5'
                    style={{ fill: 'transparent' }}
                    className='styles__Tooltip-i6vatj-2 hrulyW'
                  ></circle>
                  <polygon
                    id='NS-2'
                    points='57.194618 32.726912 48.095333 23.73502 54.353781 0.758689 69.074479 17.996023 63.863696 28.012072'
                  ></polygon>
                </g>
              </g>
              <g
                aria-label='Ontario'
                aria-selected='false'
                role='tab'
                className='styles__Group-i6vatj-1 WPjxJ'
              >
                <g id='ON' transform='translate(445.554121, 170.830189)'>
                  <path d='M201.905104,277.724107 L208.585131,224.462246 L220.776788,224.27011 L222.7302,213.380363 L208.294771,201.518581 L163.784443,201.415527 L141.203276,176.850059 C139.998368,175.539167 138.473541,174.567133 136.779193,174.030899 L130.106991,171.915656 C127.145141,170.975936 124.770967,168.734057 123.65647,165.823196 C122.182066,161.974361 118.55517,159.388385 114.451004,159.260003 L104.567451,158.953459 C101.356101,158.853897 98.2847145,160.280071 96.280011,162.80404 L87.9899626,173.238774 C85.9617869,175.791564 82.8434559,177.220357 79.5947237,177.085862 L18.3443403,174.534819 L8.53728944,163.188312 C8.41992823,163.050323 8.34255676,162.882641 8.31734583,162.702732 L0.43762693,93.8647504 C0.408938633,93.6560208 0.44892838,93.4437978 0.55324946,93.2612685 L58.8217886,4.40358369 C60.9221197,1.20102501 65.0141141,-0.0181655906 68.5097396,1.52416291 C81.7585167,7.36946568 111.872535,21.2364487 111.872535,21.2364487 L147.519917,20.4906115 L185.621453,90.3827211 L194.999049,88.3294854 L226.637894,179.890175 L264.174357,189.570339 L266.687626,192.24889 L292.727037,182.262182 L294.455289,186.85074 L271.749806,220.556644 L238.269694,239.869811 L239.379844,246.803303 L230.083967,260.06593 L231.053283,262.18292 C231.13674,262.364576 231.274966,262.515665 231.448834,262.612607 L201.905104,277.724107 Z'></path>
                  <circle
                    cx='113.445879'
                    cy='104.169811'
                    r='5'
                    style={{ fill: 'transparent' }}
                    className='styles__Tooltip-i6vatj-2 hrulyW'
                  ></circle>
                </g>
              </g>
              <g
                aria-label='Prince Edward Island'
                aria-selected='false'
                role='tab'
                className='styles__Group-i6vatj-1 WPjxJ'
              >
                <g id='PE' transform='translate(866.000000, 263.000000)'>
                  <polygon points='28.264931 12.725919 2.438156 12.36515 0.136048 7.437576 2.457695 3.315132 12.106654 7.476292 31.105263 0.737835'></polygon>
                  <circle
                    cx='16'
                    cy='8'
                    r='5'
                    style={{ fill: 'transparent' }}
                    className='styles__Tooltip-i6vatj-2 hrulyW'
                  ></circle>
                </g>
              </g>
              <g
                aria-label='Saskatchewan'
                aria-selected='false'
                role='tab'
                className='styles__Group-i6vatj-1 WPjxJ'
              >
                <g id='SK' transform='translate(248.000000, 119.000000)'>
                  <path d='M107.643496,224.658391 L4.662395,219.267444 C2.314484,219.14524 0.543116,217.080863 0.769211,214.732798 L19.577715,19.181773 L56.778185,16.842437 L21.748228,8.962891 L20.501226,4.587983 L22.052587,0.880834 L96.10308,4.675272 L99.339718,7.103642 L99.677991,41.378405 L92.364684,55.472031 L91.917712,74.517542 L97.920537,70.709138 L107.643496,224.658391 Z'></path>
                  <circle
                    cx='55'
                    cy='110'
                    r='5'
                    style={{ fill: 'transparent' }}
                    className='styles__Tooltip-i6vatj-2 hrulyW'
                  ></circle>
                </g>
              </g>
              <g
                aria-label='Manitoba'
                aria-selected='false'
                role='tab'
                className='styles__Group-i6vatj-1 WPjxJ'
              >
                <g id='MB' transform='translate(353.000000, 113.000000)'>
                  <path d='M1.400858,3.423917 L3.127059,53.949969 L0.645482,58.386666 L12.332011,227.663669 C12.493379,229.997948 14.497831,231.773498 16.83723,231.651467 L84.632709,228.12913 C87.018338,228.005356 88.844849,225.958722 88.693076,223.57476 L84.191346,152.460341 C84.159072,151.964372 84.290784,151.471018 84.563801,151.055241 L140.678856,65.855833 C142.871716,62.526131 140.440729,58.101637 136.451887,58.162652 L111.7591,58.543563 C109.557518,58.577557 107.596679,57.159383 106.94074,55.058707 L99.960921,32.708735 C99.529153,31.32717 98.51646,30.20187 97.186264,29.628325 L82.235741,23.18509 C80.592404,22.476438 79.457595,20.940591 79.264826,19.162426 L77.761923,5.315397 C77.481055,2.728341 75.248944,0.796765 72.646122,0.890031 L1.400858,3.423917 Z'></path>
                  <circle
                    cx='54'
                    cy='104'
                    r='5'
                    style={{ fill: 'transparent' }}
                    className='styles__Tooltip-i6vatj-2 hrulyW'
                  ></circle>
                </g>
              </g>
              <g
                aria-label='Quebec'
                aria-selected='false'
                role='tab'
                className='styles__Group-i6vatj-1 WPjxJ'
              >
                <g id='QC' transform='translate(597.000000, 0.000000)'>
                  <path d='M151.107037,345.911282 L148.879951,341.33892 L145.009747,338.9222 L126.274894,347.654419 L81.584347,337.143382 L49.640149,243.445642 L54.968098,226.389357 L28.832252,181.197467 L51.044806,147.806345 L44.041538,113.67985 L17.332167,92.7334888 L21.453887,64.8607042 L0.403178,19.7332144 L6.77113,10.1289915 L33.953942,8.09170573 L42.011138,0 L69.827525,12.4847935 L71.524601,16.1938546 L96.878921,19.0213392 L112.892359,55.6707266 L116.60417,54.6803672 L133.844725,60.6268746 L138.36504,57.365999 L145.242116,41.6351243 L142.079462,25.4038484 L145.378752,14.0416941 L157.572463,34.9323584 L162.299038,36.3874382 L166.66357,35.4492946 L167.817582,51.8894337 L176.331684,55.7603637 L202.73297,103.155759 L202.288249,113.632856 L191.695011,113.752082 L182.625661,118.886634 L176.305575,117.559483 L170.215247,121.302484 L163.981319,139.576267 L166.173594,144.488902 L176.96961,152.646748 L182.389811,164.456217 L191.824685,163.790466 L197.734862,172.468729 L225.312788,172.824667 L225.773174,158.782972 L235.688452,160.041373 L304.573215,124.545084 L311.09434,131.243499 L291.656288,170.446238 L213.937155,215.178628 L161.702886,325.036283 C202.300796,255.744339 223.657559,219.805342 225.773174,217.21929 C227.88879,214.633238 235.07627,215.680779 247.335617,220.361915 L253.758398,223.529672 L254.047336,238.860226 L215.68993,260.430566 L209.798029,269.898157 L211.173966,276.104003 L200.221297,279.615514 L193.323334,328.7993 L186.485422,337.204301 L156.757866,347.277595 L151.107037,345.911282 Z'></path>
                  <circle
                    cx='128'
                    cy='182'
                    r='5'
                    style={{ fill: 'transparent' }}
                    className='styles__Tooltip-i6vatj-2 hrulyW'
                  ></circle>
                </g>
              </g>
              <g
                aria-label='Newfoundland and Labrador'
                aria-selected='false'
                role='tab'
                className='styles__Group-i6vatj-1 WPjxJ'
              >
                <g id='NL' transform='translate(748.000000, 14.000000)'>
                  <polygon
                    id='NL-1'
                    points='171.019781 208.761433 163.8353 133.113575 169.480745 118.149831 174.002476 115.673747 179.720754 149.639693 182.912412 143.956034 188.602077 142.617728 192.013968 147.315313 192.226399 149.83063 221.540919 140.281141 224.762057 149.90561 236.260175 151.330231 232.746837 160.549285 234.996864 166.823194 236.874055 166.892943 241.016013 160.164794 243.44032 162.953876 248.925359 163.605156 251.611519 162.120378 254.590746 175.652526 249.700513 185.4008 246.170701 184.116549 243.240029 184.517605 233.399735 170.637584 220.774436 199.456936 218.528744 194.775045 220.428478 188.824596 218.489726 186.899528 173.74756 210.133742'
                  ></polygon>
                  <path
                    d='M154.72426,81.1008366 L154.180917,80.2455736 L154.334792,79.3606685 L127.867481,72.5290269 L107.337819,100.456283 L102.940655,97.668178 L120.813588,64.2492794 L60.259998,56.4237542 L58.490874,56.1962072 L58.061416,54.4595265 L54.770932,41.1484616 L46.058323,36.4475667 L45.333286,36.0569879 L44.962944,35.3176781 L42.259271,29.9158338 L0.253227,0.9851043 L1.973668,4.9719722 L3.659334,5.7949775 L4.480868,6.1951465 L4.873814,7.0216391 L9.603069,16.9831421 L18.058351,18.2350866 L19.917887,18.5097123 L20.244762,20.3667053 L22.917139,35.5068647 L26.100693,36.4092063 L27.145649,36.7056277 L27.672475,37.6576636 L56.926047,90.551449 L57.409405,91.425892 L57.187721,92.400595 L55.943683,97.875673 L58.194426,102.383022 L61.967398,100.254891 L65.444791,98.29415 L65.841214,102.274043 L66.657532,110.470095 L66.839226,112.2896 L65.197027,113.085578 L41.975863,124.327796 L38.08466,126.211816 L38.235057,121.881448 L38.397625,117.189271 L38.428922,116.319187 L38.972265,115.640905 L46.363464,106.419584 L46.446922,105.10574 L30.959481,109.787454 L30.287474,109.991462 L29.605905,109.829302 L24.99749,108.734287 L22.882365,109.764787 L18.483462,122.516138 C18.489548,122.57891 18.495633,122.645169 18.502588,122.713171 C18.521714,122.931128 18.542578,123.15606 18.554749,123.383607 L30.694329,135.08615 L30.717802,135.108817 L30.742144,135.1341 C32.010523,136.420918 32.677313,137.149766 32.792067,138.356375 L33.393656,144.743385 L35.219288,146.11477 L41.329068,143.721603 L43.679786,142.800953 L44.67432,145.126117 L47.601416,151.962118 L66.703608,154.832175 L68.497943,154.373593 L68.64834,141.433055 L68.681375,138.552537 L71.537185,138.863779 L83.598524,140.17588 L151.537229,104.945323 L153.153347,104.107497 L154.495621,105.338518 L160.16725,110.541585 L166.088381,98.982022 L154.72426,81.1008366 Z'
                    id='NL-2'
                  ></path>
                  <circle
                    cx='140'
                    cy='97'
                    r='5'
                    style={{ fill: 'transparent' }}
                    className='styles__Tooltip-i6vatj-2 hrulyW'
                  ></circle>
                </g>
              </g>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};
