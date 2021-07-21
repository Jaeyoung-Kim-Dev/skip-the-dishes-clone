import React, { useState } from 'react';
import './style/LoginForm.scss';
import { Link } from 'react-router-dom';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form>
      <div className='login-input email'>
        <input
          type='text'
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>
          <span>Email Address</span>
        </label>
      </div>
      <div className='login-input password'>
        <input
          type='password'
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>
          <span>Password</span>
        </label>
      </div>
      <div className='reCAPTCHA'>
        This site is protected by reCAPTCHA and the Google{' '}
        <a
          aria-label='Privacy Policy'
          href='https://policies.google.com/privacy'
          rel='noopener noreferrer'
          target='_blank'
        >
          Privacy Policy
        </a>{' '}
        and{' '}
        <a
          aria-label='Terms of Service'
          href='https://policies.google.com/terms'
          rel='noopener noreferrer'
          target='_blank'
        >
          Terms of Service
        </a>{' '}
        apply.
      </div>
      <div
        className={`email-login-btn ${
          email && password ? 'email-login-btn-active' : ''
        }`}
      >
        Log In
      </div>
      <Link className='forgot-password' to='/'>
        Forgot Your Password?
      </Link>
    </form>
  );
};
