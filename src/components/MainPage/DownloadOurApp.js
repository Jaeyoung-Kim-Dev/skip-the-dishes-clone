import React from 'react';
import './style/DownloadOurApp.scss';

export const DownloadOurApp = () => {
  return (
    <div className='downloadourapp-container'>
      <div>
        <div className='photo'>
          <img src='/images/desktop-en.png' alt='screenshot' />
        </div>
        <div className='leftBackground'></div>
        <div className='text'>
          <div>
            <div className='download-title'>
              Download
              <br />
              Our App
            </div>
            <div className='download-text'>
              <span>
                Our app gives you access to your favourite restaurants. Get your
                food delivered right to you.
              </span>
            </div>
            <div className='applink'>
              <a href='https://app.adjust.com/xo9xwte?deeplink=skipthedishes%3A%2F%2F'>
                <img src='./images/appstore.png' alt='appstore' />
              </a>

              <a href='https://app.adjust.com/78o95m5?deeplink=skipthedishes%3A%2F%2F&amp;redirect=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.ncconsulting.skipthedishes_android%26hl%3Den'>
                <img src='./images/googleplay.png' alt='googleplay' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
