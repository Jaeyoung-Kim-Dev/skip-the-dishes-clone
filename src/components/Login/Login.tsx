import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  Dispatch,
  SetStateAction,
  SyntheticEvent,
} from 'react';
import './style/Login.scss';
import { Link } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';
import { LoginForm } from './LoginForm';

interface Props {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export const Login = (props: Props) => {
  const { showModal, setShowModal } = props;
  const [emailLogin, setEmailLogin] = useState(false);
  const loginModalRef = useRef<HTMLHeadingElement>(null);

  const closeLoginModal = useCallback(() => {
    setShowModal(false);
    document.body.style.overflow = 'unset'; // allow scrolling once modal close
    setEmailLogin(false);
  }, [setShowModal, setEmailLogin]);

  const clickBackgroundToClose = (e: SyntheticEvent) => {
    if (loginModalRef.current === e.target) {
      closeLoginModal();
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) closeLoginModal();
    },
    [showModal, closeLoginModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.addEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <div
      className='login-background'
      ref={loginModalRef}
      onClick={clickBackgroundToClose}
    >
      <div className='login-container'>
        <div className='login-title'>
          <button onClick={closeLoginModal}>
            <GrClose />
          </button>
          <h2>Log In To SkipTheDishes</h2>
        </div>
        <div className='login-wrapper'>
          <div className='social-link'>
            <svg>
              <g fill='none' fillRule='evenodd' stroke='none' strokeWidth='1'>
                <path
                  d='M20.8961869,2 L3.10381314,2 C2.49405567,2 2,2.49413061 2,3.10388807 L2,20.8962618 C2,21.5058694 2.49405567,22.0001499 3.10381314,22.0001499 L12.6826331,22.0001499 L12.6826331,14.2550235 L10.0762703,14.2550235 L10.0762703,11.2365854 L12.6826331,11.2365854 L12.6826331,9.01059975 C12.6826331,6.42739225 14.260344,5.02076113 16.5647881,5.02076113 C17.6686013,5.02076113 18.617371,5.10289142 18.8938863,5.13968519 L18.8938863,7.83926892 L17.2955679,7.84001828 C16.0423316,7.84001828 15.7996126,8.43553784 15.7996126,9.30952104 L15.7996126,11.2365854 L18.7886007,11.2365854 L18.399381,14.2550235 L15.7996126,14.2550235 L15.7996126,22.0001499 L20.8961869,22.0001499 C21.5057195,22.0001499 22,21.5058694 22,20.8962618 L22,3.10388807 C22,2.49413061 21.5057195,2 20.8961869,2'
                  fill='#4267B2'
                ></path>
              </g>
            </svg>
            <div>Continue with Facebook</div>
          </div>
          <div className='social-link'>
            <svg>
              <g fill='none' fillRule='evenodd' stroke='none' strokeWidth='1'>
                <g transform='translate(2.500000, 2.250000)'>
                  <g>
                    <path
                      d='M19.0702703,9.96737192 C19.0702703,9.2763008 19.0083538,8.61180934 18.8933661,7.97389753 L9.72972973,7.97389753 L9.72972973,11.7437791 L14.9660934,11.7437791 C14.7405405,12.9620134 14.0550369,13.9941902 13.02457,14.6852613 L13.02457,17.1305899 L16.1690418,17.1305899 C18.0088452,15.4339217 19.0702703,12.9354338 19.0702703,9.96737192 L19.0702703,9.96737192 Z'
                      fill='#4285F4'
                    ></path>
                    <path
                      d='M9.72972973,19.4917495 C12.3567568,19.4917495 14.5592138,18.6190507 16.1690418,17.1305899 L13.02457,14.6852613 C12.153317,15.2700138 11.0388206,15.6155493 9.72972973,15.6155493 C7.1955774,15.6155493 5.05061425,13.9011614 4.28550369,11.597591 L1.03488943,11.597591 L1.03488943,14.1226585 C2.63587224,17.3077876 5.92628993,19.4917495 9.72972973,19.4917495 L9.72972973,19.4917495 Z'
                      fill='#34A853'
                    ></path>
                    <path
                      d='M4.28550369,11.597591 C4.09090909,11.0128385 3.98034398,10.3882165 3.98034398,9.74587476 C3.98034398,9.10353302 4.09090909,8.47891104 4.28550369,7.89415856 L4.28550369,5.36909101 L1.03488943,5.36909101 C0.375921376,6.6847841 0,8.17324497 0,9.74587476 C0,11.3185046 0.375921376,12.8069654 1.03488943,14.1226585 L4.28550369,11.597591 L4.28550369,11.597591 Z'
                      fill='#FBBC05'
                    ></path>
                    <path
                      d='M9.72972973,3.87620019 C11.158231,3.87620019 12.4407862,4.36792387 13.44914,5.33365146 L16.2398034,2.53835738 C14.5547912,0.96572759 12.3523342,0 9.72972973,0 C5.92628993,0 2.63587224,2.18396194 1.03488943,5.36909101 L4.28550369,7.89415856 C5.05061425,5.59058816 7.1955774,3.87620019 9.72972973,3.87620019 L9.72972973,3.87620019 Z'
                      fill='#EA4335'
                    ></path>
                    <polygon points='0 0 19.4594595 0 19.4594595 19.4917495 0 19.4917495'></polygon>
                  </g>
                </g>
              </g>
            </svg>
            <div>Continue with Google</div>
          </div>
          <div className='social-link'>
            <svg viewBox='0 20 288 288'>
              <path d='M230.91,204.16A116.35,116.35,0,0,1,219.33,225q-9.14,13-14.91,18-8.94,8.22-19.18,8.44c-4.9,0-10.82-1.39-17.71-4.22A50.8,50.8,0,0,0,148.47,243a52.56,52.56,0,0,0-19.61,4.22c-7,2.83-12.63,4.3-16.94,4.45q-9.83.42-19.61-8.67-6.24-5.44-15.6-18.67a129.14,129.14,0,0,1-16.5-32.77,120.14,120.14,0,0,1-6.93-39.06q0-21.66,9.37-37.32A54.89,54.89,0,0,1,82.27,95.35a52.71,52.71,0,0,1,26.52-7.49c5.21,0,12,1.61,20.51,4.78s13.89,4.78,16.28,4.78c1.78,0,7.81-1.88,18-5.63q14.5-5.22,24.52-4.36,27.18,2.2,40.79,21.48-24.3,14.73-24.06,41.22.21,20.61,14.93,34.26a49.08,49.08,0,0,0,14.92,9.79c-1.2,3.47-2.46,6.79-3.81,10ZM189.35,40.61q0,16.16-11.78,30.14c-9.46,11.07-20.92,17.46-33.33,16.45a33.11,33.11,0,0,1-.25-4.08c0-10.34,4.5-21.41,12.49-30.46a48.23,48.23,0,0,1,15.23-11.43,45.54,45.54,0,0,1,17.42-4.93,39,39,0,0,1,.22,4.31Z'></path>
            </svg>
            <div>Continue with Apple</div>
          </div>
          <div className='or'>OR</div>
          {!emailLogin ? (
            <div className='email-login' onClick={(e) => setEmailLogin(true)}>
              Log In With Email
            </div>
          ) : (
            <LoginForm />
          )}
        </div>
        <div className='signup'>
          Need an account?{' '}
          <Link to='/' className='signup-link'>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};
