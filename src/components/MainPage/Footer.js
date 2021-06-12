import React from 'react';
import './style/Footer.scss';
import footerLinks from './JSON/footerLinks.json';

export const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='links'>
        <div>
          <div>
            <div className='siteLinks'>
              {footerLinks.map((link) => (
                <div>
                  <a href={link.url}>{link.name}</a>
                </div>
              ))}
            </div>
            <div className='socialLinks'>
              <div className='invite'>
                <button>
                  <span>
                    Invite Friends, Get $5
                    <div>
                      <div>
                        <svg
                          class='MuiSvgIcon-root-526 c5120 c5179'
                          focusable='false'
                          viewBox='0 0 24 24'
                          color='inherit'
                          aria-hidden='true'
                          size='20'
                          theme='[object Object]'
                          borderWeight='2'
                          padding='8'
                        >
                          <path d='M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z'></path>
                        </svg>
                      </div>
                    </div>
                  </span>
                </button>
              </div>
              <div className='socialMedia'>
                <div>
                  <a
                    aria-label='twitter'
                    href='http://twitter.com/skipthedishes'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <div>
                      <svg
                        focusable='false'
                        viewBox='0 0 24 24'
                        color='white'
                        aria-hidden='true'
                        size='24'
                        theme='[object Object]'
                        borderWeight='2'
                        padding='8'
                      >
                        <g>
                          <g transform='translate(2.000000, 3.805556)'>
                            <path d='M19.9110278,1.91541667 C19.1785278,2.24041667 18.3913056,2.45986111 17.5649167,2.55847222 C18.40825,2.05291667 19.0560278,1.25236111 19.3610278,0.29875 C18.5718611,0.766527778 17.6974167,1.10680556 16.7671389,1.28986111 C16.0218611,0.495972222 14.9601944,-0.000138888889 13.7851944,-0.000138888889 C11.5290833,-0.000138888889 9.70019444,1.82875 9.70019444,4.08486111 C9.70019444,4.40513889 9.73630556,4.71680556 9.80602778,5.01569444 C6.41075,4.84541667 3.40075,3.21902778 1.38630556,0.747638889 C1.03436111,1.35097222 0.832972222,2.05263889 0.832972222,2.80125 C0.832972222,4.21847222 1.55436111,5.46875 2.65019444,6.20152778 C1.98075,6.18041667 1.35075,5.99625 0.800194444,5.69041667 C0.799638889,5.70736111 0.799638889,5.72458333 0.799638889,5.74180556 C0.799638889,7.72097222 2.20797222,9.37208333 4.07658333,9.74736111 C3.73380556,9.84069444 3.37269444,9.89069444 3.00047222,9.89069444 C2.73713889,9.89069444 2.48102778,9.86486111 2.23158333,9.81736111 C2.75158333,11.4401389 4.26019444,12.62125 6.04769444,12.6543056 C4.64963889,13.7498611 2.88825,14.4029167 0.974361111,14.4029167 C0.644638889,14.4029167 0.319638889,14.38375 -8.33333333e-05,14.3459722 C1.80797222,15.5051389 3.95491667,16.1809722 6.26186111,16.1809722 C13.77575,16.1809722 17.8846389,9.95652778 17.8846389,4.55847222 C17.8846389,4.38125 17.8804722,4.20513889 17.8726944,4.02986111 C18.67075,3.45402778 19.3635278,2.73458333 19.9110278,1.91541667'></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </a>
                </div>
                <div>
                  <a
                    aria-label='facebook'
                    href='https://www.facebook.com/skipthedishes'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <div>
                      <svg
                        focusable='false'
                        viewBox='0 0 24 24'
                        color='white'
                        aria-hidden='true'
                        size='24'
                        theme='[object Object]'
                        borderWeight='2'
                        padding='8'
                      >
                        <g transform='translate(2.000000, 2.000000)'>
                          <path d='M18.8175833,2.77777778e-05 L1.09897222,2.77777778e-05 C0.49175,2.77777778e-05 8.33333333e-05,0.491972222 8.33333333e-05,1.09947222 L8.33333333e-05,18.8178056 C8.33333333e-05,19.42475 0.49175,19.9169722 1.09897222,19.9169722 L10.6381389,19.9169722 L10.6381389,12.2039167 L8.04258333,12.2039167 L8.04258333,9.19808333 L10.6381389,9.19808333 L10.6381389,6.98141667 C10.6381389,4.40891667 12.2089722,3.00808333 14.5039722,3.00808333 C15.6034167,3.00808333 16.5481389,3.09002778 16.8234167,3.12641667 L16.8234167,5.81502778 L15.23175,5.81586111 C13.9839722,5.81586111 13.7423056,6.40863889 13.7423056,7.27891667 L13.7423056,9.19808333 L16.7186944,9.19808333 L16.3311944,12.2039167 L13.7423056,12.2039167 L13.7423056,19.9169722 L18.8175833,19.9169722 C19.42425,19.9169722 19.91675,19.42475 19.91675,18.8178056 L19.91675,1.09947222 C19.91675,0.491972222 19.42425,2.77777778e-05 18.8175833,2.77777778e-05'></path>
                        </g>
                      </svg>
                    </div>
                  </a>
                </div>
                <div>
                  <a
                    aria-label='instagram'
                    href='https://www.instagram.com/skipthedishes'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <div>
                      <svg
                        focusable='false'
                        viewBox='0 0 24 24'
                        color='white'
                        aria-hidden='true'
                        size='24'
                        theme='[object Object]'
                        borderWeight='2'
                        padding='8'
                      >
                        <g>
                          <g transform='translate(2.019802, 2.000000)'>
                            <g transform='translate(0.000000, 0.033307)'>
                              <path d='M9.9770495,0.0063009901 C7.26746535,0.0063009901 6.92766337,0.0177861386 5.86354455,0.0663405941 C4.80156436,0.114776238 4.07633663,0.283449505 3.44168317,0.53010297 C2.78564356,0.785033663 2.22920792,1.12618218 1.67455446,1.68083564 C1.11986139,2.23552871 0.778752475,2.79192475 0.523782178,3.44796436 C0.277128713,4.08261782 0.10849505,4.80784554 0.060019802,5.86982574 C0.0114653465,6.93398416 1.98019802e-05,7.27370693 1.98019802e-05,9.98333069 C1.98019802e-05,12.6929545 0.0114653465,13.0327168 0.060019802,14.0968752 C0.10849505,15.1588158 0.277128713,15.8840832 0.523782178,16.518697 C0.778752475,17.1747366 1.11986139,17.7311723 1.67455446,18.2858257 C2.22920792,18.8405188 2.78564356,19.1816277 3.44168317,19.4366376 C4.07633663,19.6832515 4.80156436,19.8519248 5.86354455,19.9004 C6.92766337,19.9489149 7.26746535,19.9604 9.9770495,19.9604 C12.6866733,19.9604 13.026396,19.9489149 14.0905545,19.9004 C15.1525347,19.8519248 15.8777624,19.6832515 16.5124158,19.4366376 C17.168495,19.1816277 17.7248911,18.8405188 18.2795446,18.2858257 C18.8342376,17.7311723 19.1753465,17.1747762 19.4303168,16.518697 C19.6769703,15.8840832 19.8456436,15.1588158 19.8940792,14.0968752 C19.9426337,13.0327168 19.9541188,12.6929545 19.9541188,9.98333069 C19.9541188,7.27374653 19.9426337,6.93398416 19.8940792,5.86982574 C19.8456436,4.80784554 19.6769703,4.08261782 19.4303168,3.44796436 C19.1753465,2.79192475 18.8342376,2.23552871 18.2795446,1.68083564 C17.7248911,1.12618218 17.168495,0.785033663 16.5124158,0.53010297 C15.8777624,0.283449505 15.1525347,0.114776238 14.0905545,0.0663405941 C13.026396,0.0177861386 12.6866733,0.0063009901 9.9770495,0.0063009901 M9.9770495,1.80396436 C12.6410495,1.80396436 12.9565743,1.81410297 14.0086139,1.86210297 C14.9813663,1.90649901 15.5096436,2.06903366 15.8612079,2.20566733 C16.3269109,2.38665743 16.6593069,2.60285545 17.0084158,2.95196436 C17.3575248,3.30111287 17.5737228,3.63346931 17.7547525,4.09917228 C17.8913465,4.45073663 18.0538812,4.97901386 18.0982772,5.95176634 C18.1462376,7.00380594 18.1564158,7.3193703 18.1564158,9.98333069 C18.1564158,12.6473307 18.1462376,12.962895 18.0982772,14.014895 C18.0538812,14.9876871 17.8913465,15.5159644 17.7547525,15.8675287 C17.5737228,16.3331921 17.3575248,16.6655881 17.0084158,17.014697 C16.6593069,17.3638455 16.3269109,17.5800436 15.8612079,17.7610337 C15.5096436,17.8976277 14.9813663,18.060202 14.0086139,18.1045584 C12.9567327,18.1525584 12.6412475,18.1627366 9.9770495,18.1627366 C7.31285149,18.1627366 6.99736634,18.1525584 5.94548515,18.1045584 C4.97273267,18.060202 4.44441584,17.8976277 4.09285149,17.7610337 C3.62718812,17.5800436 3.29479208,17.3638455 2.94568317,17.014697 C2.59657426,16.6655881 2.38033663,16.3331921 2.19934653,15.8675287 C2.06275248,15.5159644 1.90021782,14.9876871 1.85582178,14.0149347 C1.80782178,12.962895 1.79768317,12.6473307 1.79768317,9.98333069 C1.79768317,7.3193703 1.80782178,7.00380594 1.85582178,5.95176634 C1.90021782,4.97901386 2.06275248,4.45073663 2.19934653,4.09917228 C2.38033663,3.63346931 2.59657426,3.30111287 2.94568317,2.95200396 C3.29479208,2.60285545 3.62718812,2.38665743 4.09285149,2.20566733 C4.44441584,2.06903366 4.97273267,1.90649901 5.94544554,1.86210297 C6.99752475,1.81410297 7.3130495,1.80396436 9.9770495,1.80396436'></path>
                            </g>
                            <path d='M9.9770495,13.3423406 C8.14033663,13.3423406 6.65134653,11.8533505 6.65134653,10.0166376 C6.65134653,8.17992475 8.14033663,6.69097426 9.9770495,6.69097426 C11.8137624,6.69097426 13.3027525,8.17992475 13.3027525,10.0166376 C13.3027525,11.8533505 11.8137624,13.3423406 9.9770495,13.3423406 M9.9770495,4.89331089 C7.14750495,4.89331089 4.85368317,7.18709307 4.85368317,10.0166376 C4.85368317,12.8462218 7.14750495,15.140004 9.9770495,15.140004 C12.8065941,15.140004 15.1003762,12.8462218 15.1003762,10.0166376 C15.1003762,7.18709307 12.8065941,4.89331089 9.9770495,4.89331089'></path>
                            <path d='M16.5000634,4.69088713 C16.5000634,5.35211485 15.9640634,5.88811485 15.3028356,5.88811485 C14.6416079,5.88811485 14.1055683,5.35211485 14.1055683,4.69088713 C14.1055683,4.02965941 14.6416079,3.49365941 15.3028356,3.49365941 C15.9640634,3.49365941 16.5000634,4.02965941 16.5000634,4.69088713'></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </a>
                </div>
                <div>
                  <a
                    aria-label='youtube'
                    href='https://www.youtube.com/channel/UCspnBbuz5iyHAB5H0-KbOiQ'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <div>
                      <svg
                        focusable='false'
                        viewBox='0 0 24 24'
                        color='white'
                        aria-hidden='true'
                        size='24'
                        theme='[object Object]'
                        borderWeight='2'
                        padding='8'
                      >
                        <g>
                          <g transform='translate(1.000000, 4.410000)'>
                            <g>
                              <path d='M21.0850423,2.36919689 C21.5350756,4.05945273 21.5350756,7.58618242 21.5350756,7.58618242 C21.5350756,7.58618242 21.5350756,11.1127898 21.0850423,12.8032903 C20.8373893,13.735782 20.1077675,14.4701758 19.1810267,14.7195417 C17.5017831,15.1723893 10.7675562,15.1723893 10.7675562,15.1723893 C10.7675562,15.1723893 4.03332925,15.1723893 2.35396329,14.7195417 C1.42734483,14.4701758 0.697600667,13.735782 0.44994772,12.8032903 C3.67074527e-05,11.1127898 3.67074527e-05,7.58618242 3.67074527e-05,7.58618242 C3.67074527e-05,7.58618242 3.67074527e-05,4.05945273 0.44994772,2.36919689 C0.697600667,1.43658287 1.42734483,0.702189099 2.35396329,0.452945495 C4.03332925,-2.44716352e-05 10.7675562,-2.44716352e-05 10.7675562,-2.44716352e-05 C10.7675562,-2.44716352e-05 17.5017831,-2.44716352e-05 19.1810267,0.452945495 C20.1077675,0.702189099 20.8373893,1.43658287 21.0850423,2.36919689 Z M8.5650723,10.7881858 L14.1935484,7.58631702 L8.5650723,4.38420356 L8.5650723,10.7881858 Z'></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom'>bottom</div>
    </div>
  );
};
