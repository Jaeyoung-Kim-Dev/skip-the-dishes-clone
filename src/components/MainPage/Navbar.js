import React, { useState, useEffect } from 'react';
import './style/Navbar.scss';
import { useWindowSize } from '../../hooks/useWindowSize';

export const Navbar = () => {
  const [logoImage, setlogoImage] = useState();
  const isMobile = useWindowSize();

  useEffect(() => {
    isMobile
      ? setlogoImage(
          <svg
            fill='#fff'
            height='32'
            viewBox='0 0 78 32'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>SkipTheDishes</title>
            <path
              d='M16.737.296a40.48 40.48 0 014.46 3.227s.393.262.393-.184c0 0-.053-1.338.104-1.757a.787.787 0 01.735-.525s1.757.079 2.859.236c.508.064.896.485.918.997 0 0 .708 4.774.865 6.505 0 0 .132.865 1.417 2.36 0 0 2.57 3.594 2.885 4.302 0 0 .603 1.26-.682 1.416 0 0-2.36.237-2.57.289a.585.585 0 00-.525.536v.152c-.01.567-.153 8.427-.734 12.27 0 0-.158 1.573-1.05 1.547 0 0-2.413-.079-2.963-.053h-.025c-.06-.004-.206-.042-.185-.314 0 0 1.232-12.958.393-19.515 0 0-.026-.84-.682-1.023 0 0-.577-.236-1.154.55 0 0-3.83 4.853-3.83 11.7 0 0-.078 2.071.237 2.596 0 0 .21.367 1.206.446l1.26.157s.235 0 .209.315l-.004.052c-.035.458-.29 3.798-.363 4.433a.881.881 0 01-.105.446s-.053.131-.446.105h-.056c-.584-.006-5.568-.05-6.16 0 0 0-.263.026-.315-.131-.053-.158-.394-4.905-.367-5.587a.404.404 0 01.21-.341 3.318 3.318 0 001.547-2.466s.079-.393.026-2.177c0 0 .21-7.291.263-8.446 0 0 .052-.393-.473-.472a.483.483 0 00-.554.292l-.023.073v.052s-.367 4.8-.288 6.715c0 0 .131 1.26-.735 1.26 0 0-.839.13-.865-.919 0 0 .052-4.669.262-6.977a.525.525 0 00-.472-.498.504.504 0 00-.555.329l-.022.088v.052s-.367 4.485-.289 6.846c0 0 .105 1.154-.813 1.102 0 0-.76.078-.813-.918 0 0 .21-6.4.262-6.899a.525.525 0 00-.43-.577h-.068a.498.498 0 00-.55.42v.052s-.342 7.66-.29 9.915l.001.03c.004.272.087 2.341 1.678 3.223 0 0 .263.157.263.367 0 0 .183 4.065.367 5.377 0 0 .052.315-.21.315l-4.301.105h-.028c-.132-.001-.7-.053-.838-.84-.131-.813-.918-7.606-.787-12.983a.656.656 0 00-.525-.709s-2.203-.21-2.727-.34a.9.9 0 01-.659-1.084v-.013a.866.866 0 01.105-.236C.108 15.457 4.855 6.408 14.717.296a1.865 1.865 0 012.02 0zm24.574 10.432a5.71 5.71 0 012.309.446l.026.026c.026.026.052.026.079.052l.603.289-.89 2.977a.41.41 0 01-.262.289.48.48 0 01-.183.026.81.81 0 01-.236-.053c-.577-.288-.997-.577-1.941-.498a1.752 1.752 0 00-1.679 1.521c-.079.604.341 1.154 1.05 1.941.865.945 2.36 2.466 2.281 4.38l3.279-11.173h3.803a.488.488 0 01.367.183.42.42 0 01.08.394l-1.758 5.456 4.118-6.007h3.83a.118.118 0 01.06 0c.097.03.152.133.123.23l-.105.316-.079.157-5.377 7.344 1.758 7.633 4.642-15.711h3.777c.145 0 .28.068.367.183a.525.525 0 01.08.394l-.003.018-4.774 16.315h-8a.475.475 0 01-.42-.367l-.892-4.538-1.154 1.652-.944 3.227h-3.803a.459.459 0 01-.368-.184.433.433 0 01-.078-.394l.865-2.937c-1.442 2.623-3.908 3.724-6.74 3.724a8.881 8.881 0 01-3.568-.839l.105-.367.84-2.885a.462.462 0 01.314-.315.619.619 0 01.446.078c.76.341 1.364.604 2.334.525.866-.079 1.784-.603 1.941-1.547.105-.682-.393-1.26-1.075-1.994l-.079-.079c-.944-1.075-2.255-2.518-1.914-4.564.498-2.937 3.514-5.324 6.845-5.324zm27.36.218a3.85 3.85 0 012.912 1.259c.76.865 1.102 1.862 1.075 3.173.027.577-.157 1.495-.524 2.728-.892 3.043-2.912 5.85-6.899 5.797h-1.652l-1.154 3.856h-3.672a.464.464 0 01-.341-.184.422.422 0 01-.053-.393l4.092-13.902c.09-.31.042-.645-.131-.918l-.184-.289a.367.367 0 01-.026-.236l.262-.891zm-.918 3.645h-1.416l-1.679 5.719h1.076c1.233-.132 1.678-.919 2.15-1.968a8.252 8.252 0 00.683-2.57 1.233 1.233 0 00-.289-.97.682.682 0 00-.525-.21zm7.423-3.54l-.236 1.125h-.157l.236-1.126h.157zm-1.075.133a.289.289 0 01.315.21l-.131.053a.168.168 0 00-.184-.132.163.163 0 00-.184.14v.228c-.009.09.055.171.145.183h.039a.173.173 0 00.184-.157l.13.052c-.052.184-.13.263-.314.263v-.003a.307.307 0 01-.341-.338v-.158a.302.302 0 01.262-.34.2.2 0 01.079 0zm2.334-.002l.263.524.236-.524h.157v.813h-.131v-.525l-.21.443h-.131l-.184-.443v.525h-.157v-.813h.157zm-3.488 0l.236.524.236-.524h.184v.813h-.158v-.525l-.21.443h-.105l-.21-.443v.525h-.13v-.813h.157zm3.2 0v.157h-.236v.656h-.158v-.656h-.236v-.157h.63z'
              fill='#fff'
            ></path>
          </svg>
        )
      : setlogoImage(
          <svg
            fill='#fff'
            height='40'
            viewBox='0 0 110 32'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>SkipTheDishes</title>
            <path
              d='M16.95.31a44.62 44.62 0 014.5 3.249s.39.27.401-.19c0 0-.063-1.358.102-1.758a.802.802 0 01.767-.556s1.758.088 2.898.24c.502.078.886.49.928.998 0 0 .724 4.842.883 6.58 0 0 .14.885 1.406 2.387 0 0 2.588 3.632 2.908 4.35 0 0 .609 1.266-.703 1.43 0 0-2.38.24-2.606.296a.594.594 0 00-.535.548v.127c-.008.563-.14 8.507-.734 12.4 0 0-.158 1.6-1.055 1.56 0 0-2.462-.08-3.01-.062 0 0-.25 0-.211-.327 0 0 1.245-13.096.397-19.72 0 0-.031-.855-.703-1.031 0 0-.59-.24-1.16.545a20.796 20.796 0 00-3.869 11.815s-.07 2.11.25 2.63c0 0 .197.352 1.21.45l1.283.173s.24 0 .218.313c0 0-.295 3.84-.38 4.522-.002.156-.033.31-.091.454 0 0-.037.105-.34.116h-.163c-.576-.005-5.631-.04-6.231 0 0 0-.267.028-.324-.137-.056-.166-.393-4.962-.38-5.627a.352.352 0 01.198-.351 3.39 3.39 0 001.568-2.494c.075-.73.09-1.465.046-2.197 0 0 .207-7.385.26-8.549 0 0 .046-.397-.478-.475a.485.485 0 00-.584.352v.046s-.352 4.86-.296 6.794c0 0 .124 1.258-.745 1.283 0 0-.848.127-.886-.918 0 0 .063-4.726.267-7.06a.496.496 0 00-.464-.51.513.513 0 00-.59.421v.042s-.353 4.52-.296 6.907c0 0 .105 1.157-.82 1.115 0 0-.77.091-.815-.936 0 0 .21-6.47.267-6.973a.52.52 0 00-.447-.587h-.07a.489.489 0 00-.556.422v.056s-.351 7.736-.295 10.008v.066c.011.388.14 2.367 1.691 3.218 0 0 .254.148.26.352 0 0 .194 4.107.352 5.43 0 0 .063.316-.218.316L5.626 32a.893.893 0 01-.886-.84 97.206 97.206 0 01-.749-13.106.65.65 0 00-.527-.704S1.24 17.143.704 17a.921.921 0 01-.577-1.358A44.631 44.631 0 0114.907.31a1.846 1.846 0 012.042 0zm24.83 10.528c.799-.013 1.592.142 2.327.457h.028l.092.042.619.288-.893 3.021a.45.45 0 01-.271.289.527.527 0 01-.183.035.619.619 0 01-.225-.053c-.609-.285-1.02-.58-1.976-.503a1.78 1.78 0 00-1.685 1.547c-.08.623.352 1.182 1.055 1.97.876.967 2.38 2.496 2.307 4.434l3.327-11.292h3.843a.447.447 0 01.429.573l-1.78 5.529 4.192-6.098h3.869a.127.127 0 01.052 0 .186.186 0 01.13.236l-.095.327a.44.44 0 01-.08.161l-5.447 7.438 1.758 7.715 4.694-15.88h3.826c.14 0 .27.066.352.179l.017-.007a.44.44 0 01.07.394l-4.834 16.436H49.21a.45.45 0 01-.44-.352l-.9-4.571-1.168 1.684-.96 3.26H41.9a.397.397 0 01-.127-.021.443.443 0 01-.302-.552l.868-2.961c-1.473 2.658-3.952 3.759-6.822 3.759a9.002 9.002 0 01-3.625-.848l.109-.372.847-2.92a.471.471 0 01.313-.305.647.647 0 01.444.08c.763.338 1.374.613 2.352.532.89-.074 1.811-.616 1.973-1.565.133-.675-.352-1.259-1.055-2.011l-.085-.095c-.97-1.07-2.296-2.532-1.944-4.607.506-2.964 3.57-5.373 6.934-5.373zm65.744 7.184c.56.007 1.112.126 1.624.352 0 0-.394 1.308-.394 1.336a.05.05 0 010 .021.316.316 0 01-.418.155 2.38 2.38 0 00-1.083-.194c-.66.042-1.2.536-1.301 1.189-.085.52.26.95.671 1.438.542.619 1.287 1.53 1.097 2.729a3.924 3.924 0 01-3.868 3.214c-.648 0-1.29-.12-1.895-.352l.425-1.459a.236.236 0 01.036-.08.285.285 0 01.397-.103c.404.196.855.275 1.301.229a1.466 1.466 0 001.407-1.249c.088-.548-.257-.977-.683-1.466-.541-.64-1.297-1.487-1.107-2.673.267-1.779 2.025-3.08 3.783-3.08zm-19.028 0c.558.007 1.11.126 1.62.352 0 0-.393 1.308-.393 1.336a.05.05 0 010 .021.316.316 0 01-.418.155 2.38 2.38 0 00-1.083-.194 1.407 1.407 0 00-1.291 1.185l.004-.01c-.078.517.274.935.668 1.445.541.619 1.287 1.53 1.097 2.729a3.924 3.924 0 01-3.868 3.214c-.648 0-1.29-.12-1.896-.352l.426-1.459a.236.236 0 01.035-.08.285.285 0 01.397-.103c.404.196.855.275 1.301.229a1.466 1.466 0 001.407-1.249c.088-.548-.257-.977-.682-1.466-.542-.64-1.298-1.488-1.108-2.673.267-1.779 2.026-3.08 3.784-3.08zm-19.052-6.949a3.924 3.924 0 012.94 1.28 4.53 4.53 0 011.11 3.211 10.328 10.328 0 01-.538 2.764c-.91 3.073-2.95 5.904-6.98 5.851h-1.674l-1.153 3.904h-3.7a.454.454 0 01-.351-.183.44.44 0 01-.067-.394L63.16 13.44a1.111 1.111 0 00-.127-.935l-.18-.285a.306.306 0 01-.035-.246l.271-.9zm27.936 7.119l.027.002a.215.215 0 01.158.264l-2.813 9.618h-1.699a.222.222 0 01-.151-.264l1.189-3.998h-1.96l-1.24 4.265h-1.646a.18.18 0 01-.06 0 .211.211 0 01-.144-.26l2.813-9.618h1.625a.127.127 0 01.052 0 .215.215 0 01.152.264l-1.087 3.717h1.959l1.167-3.988h1.632a.137.137 0 01.053 0zm5.943.003l.026.003a.215.215 0 01.152.264l-.398 1.374h-2.532l-.703 2.388h1.723a.113.113 0 01.05 0 .215.215 0 01.158.264l-.415 1.385H99.39l-.767 2.564h2.258a.127.127 0 01.053 0 .215.215 0 01.15.264l-.397 1.375h-4.184a.18.18 0 01-.06 0 .211.211 0 01-.144-.26l2.813-9.618h4.185a.127.127 0 01.052 0zm-19.15-.007l.026.003a.215.215 0 01.15.264l-2.812 9.617h-1.642a.18.18 0 01-.06 0 .211.211 0 01-.144-.26l2.813-9.618 1.642-.003a.127.127 0 01.053 0zm-6.413-.015c1.315 0 2.521 1.052 2.391 3.218-.12 1.98-1.424 6.681-5.173 6.681h-2.345l.01-.032a.18.18 0 01-.06 0 .211.211 0 01-.143-.26l2.813-9.607zm-.471 1.667h-.538l-1.941 6.597h.597c1.804 0 2.708-3.858 2.778-4.997.07-1.14-.376-1.6-.896-1.6zm-8.777-5.092h-1.435l-1.71 5.785h1.088c1.251-.144 1.69-.936 2.166-1.99.38-.824.618-1.707.703-2.61.054-.352-.05-.71-.285-.977a.703.703 0 00-.527-.208zm14.435-3.439a.127.127 0 01.084.158l-1.575 5.38h-.946a.127.127 0 01-.088-.154l.65-2.23h-1.097l-.703 2.395h-.91l.003-.003h-.021a.13.13 0 01-.095-.159l1.575-5.38h.946a.127.127 0 01.085.158l-.605 2.071h1.107l.65-2.236zm3.386-.007a.127.127 0 01.085.158l-.218.76h-1.407l-.397 1.336H85.4a.127.127 0 01.085.158l-.225.767h-1.143l-.454 1.438h1.26a.102.102 0 01.055 0 .12.12 0 01.067.155l-.225.76h-2.32l.01-.011h-.028a.134.134 0 01-.099-.155l1.547-5.275.029-.091zm-7.258-.007a.13.13 0 01.095.158l-.214.76h-.865l-1.358 4.62h-.91l.006-.007h-.035a.127.127 0 01-.088-.154l1.305-4.46h-.731a.13.13 0 01-.095-.157l.214-.76z'
              fill='#fff'
            ></path>
          </svg>
        );
  }, [isMobile]);

  return (
    <div className='navbar-container'>
      <a href='/'>{logoImage}</a>
      <div className='menu'>
        <button className='needHelp'>
          <svg
            focusable='false'
            viewBox='0 0 24 24'
            fill='white'
            aria-hidden='true'
            size='25'
            theme='[object Object]'
            borderweight='2'
            padding='8'
          >
            <g transform='translate(2.000000, 2.000000)'>
              <path
                d='M10.0048023,19.2980769 C11.3948926,19.2980769 12.7176429,19.0240385 13.9153332,18.5336538 C13.9441932,18.5192308 13.9682432,18.5096154 13.9971032,18.5 C14.0019132,18.5 14.0067232,18.5 14.0067232,18.4951923 C14.1750732,18.4326923 14.3578533,18.3990385 14.5454433,18.3990385 C14.7522733,18.3990385 14.9494834,18.4375 15.1274534,18.5144231 L19.1678543,20 L18.1048441,15.75 C18.1048441,15.4951923 18.1769941,15.2548077 18.2924341,15.0480769 L18.2924341,15.0480769 C18.3309142,14.9855769 18.3693942,14.9230769 18.4126842,14.8701923 C19.4179744,13.3653846 19.9999845,11.5769231 19.9999845,9.65865385 C20.0096045,4.32211538 15.5314935,0 10.0048023,0 C4.47811101,0 0,4.32211538 0,9.64903846 C0,14.9807692 4.47811101,19.2980769 10.0048023,19.2980769 Z M14.6224033,8.46153846 C15.4737735,8.46153846 16.1616037,9.14903846 16.1616037,10 C16.1616037,10.8509615 15.4737735,11.5384615 14.6224033,11.5384615 C13.7710331,11.5384615 13.083203,10.8509615 13.083203,10 C13.083203,9.14903846 13.7710331,8.46153846 14.6224033,8.46153846 Z M10.0048023,8.46153846 C10.8561725,8.46153846 11.5440026,9.14903846 11.5440026,10 C11.5440026,10.8509615 10.8561725,11.5384615 10.0048023,11.5384615 C9.15343207,11.5384615 8.46560192,10.8509615 8.46560192,10 C8.46560192,9.14903846 9.15343207,8.46153846 10.0048023,8.46153846 Z M5.38720122,8.46153846 C6.23857141,8.46153846 6.92640157,9.14903846 6.92640157,10 C6.92640157,10.8509615 6.23857141,11.5384615 5.38720122,11.5384615 C4.53583103,11.5384615 3.84800087,10.8509615 3.84800087,10 C3.84800087,9.14903846 4.53583103,8.46153846 5.38720122,8.46153846 Z'
                transform='translate(10.000000, 10.000000) scale(-1, 1) translate(-10.000000, -10.000000) '
              ></path>
            </g>
          </svg>
          {!isMobile && (
            <div className='text'>
              <span>Need Help?</span>
            </div>
          )}
        </button>
        {!isMobile && (
          <div className='country'>
            <svg
              focusable='false'
              viewBox='0 0 512 512'
              color='grey'
              aria-hidden='true'
              size='25'
              theme='[object Object]'
              borderweight='2'
              padding='8'
            >
              <circle cx='256' cy='256' fill='#eee' r='256'></circle>
              <path
                d='M512 256A256 256 0 0 0 367.3 25.4v461.2A256 256 0 0 0 512 256zM0 256a256 256 0 0 0 144.7 230.6V25.4A256 256 0 0 0 0 256zm300.5 33.4L345 267l-22.2-11v-22.3L278.3 256l22.2-44.5h-22.2L256 178l-22.3 33.4h-22.2l22.2 44.5-44.5-22.3V256L167 267.1l44.5 22.3-11.2 22.3H245V345h22v-33.3h44.6z'
                fill='#d80027'
              ></path>
            </svg>
          </div>
        )}
        {!isMobile && <span className='divider'></span>}
        <button className='login'>
          <img src='/images/account-default@1x.png' alt='user' />
          {!isMobile && <div className='text'>Log In</div>}
        </button>
      </div>
    </div>
  );
};
