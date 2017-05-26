import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './Book.css';

import Intro from './book/Intro';
import Chapter from './book/Chapter';

class Book extends Component {
  render() {
    return (
      <Router>
        <div className="Book">
          <Route exact path="/" component={Intro} />
          <Route path="/book/:chapter/" component={Chapter} />
        </div>
      </Router>
    );
  }
}

export default Book;
