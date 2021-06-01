import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPageNch55() {
    return(
  <div>
    <h1>404 - Page Not Found!</h1>
    <Link to="/">
      Go Back to Home Page
    </Link>
  </div>
);
}

export default NotFoundPageNch55;