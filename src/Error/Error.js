import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

function Error404() {
  return (
    <div className="error-container">
      <div className="container-child">
        <h1>Oops! Error 404</h1>
      </div>
      <div className="container-child">
        <p>We couldn't find the page you're looking for.</p>
        <p>Maybe try going back to <Link to="/">home</Link>?</p>
      </div>
    </div>
  );
}

export default Error404;
