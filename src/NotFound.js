import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section>
      <h1>Are you lost?</h1>
      <p>This doesn't appear to be a thing yet...</p>
      <p>Would you like to <Link to="/">go home</Link>?</p>
    </section>
  );
};

export default NotFound;
