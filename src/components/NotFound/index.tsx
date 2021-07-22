import React from 'react';
import { Link } from 'react-router-dom';

interface Props {}

export const NotFound = (props: Props) => {
  return (
    <>
      <div>
        <h3>Page Not Found</h3>
        <div>
          Sorry, but the page you are looking for doesn't exist. You may have
          mistyped the address or the page may have moved.
        </div>
        <Link to='/'>Go To Homepage</Link>
      </div>
    </>
  );
};
