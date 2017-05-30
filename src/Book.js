import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import * as firebase from 'firebase';
import './Book.css';

import Intro from './book/Intro';
import Chapter from './book/Chapter';
import TableOfContents from './book/TableOfContents';
import NotFound from './NotFound';

class Book extends Component {

  constructor() {
    super();
    this.state = {
      chapters: {}
    };
  }

  componentDidMount() {
    const rootRef = firebase.database().ref().child('chapters');
    rootRef.on('value', (snapshot) => {
      this.setState({
        chapters: snapshot.val()
      });
    });
  }

  render() {
    return (
      <Router>
        <div className="Book">
          <Switch>
            <Route exact path="/" component={Intro} />
            <Route exact path="/book/" component={TableOfContents} />
            <Route path="/book/:chapter/:title/" component={Chapter} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Book;
