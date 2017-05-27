import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './Book.css';

import Intro from './book/Intro';
import Chapter from './book/Chapter';
import TableOfContents from './book/TableOfContents';
import NotFound from './NotFound';

const Book = () => {
  return (
    <Router>
      <div className="Book">
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route exact path="/book/" component={TableOfContents} />
          <Route path="/book/:chapter/" component={Chapter} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default Book;
