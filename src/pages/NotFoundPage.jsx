import React from 'react';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h1 className="not-found-title">404 :(</h1>
        <p className="not-found-message">Page not found!</p>
        <p className="not-found-submessage">(Sorry, this page has been moved or removed.)</p>
      </div>
    </div>
  );
};

export default NotFoundPage;

