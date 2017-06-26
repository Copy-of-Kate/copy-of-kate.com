import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import './Book.css';
import ChapterData from './data/ChapterData';

import Intro from './book/Intro';
import Chapter from './book/Chapter';
import TableOfContents from './book/TableOfContents';
import NotFound from './NotFound';

class Book extends Component {

  constructor() {
    super();
    // Use local data at first, switch to Firebase when available
    this.state = {
      chapters: ChapterData
    };
  }

  componentDidMount() {
    const rootRef = this.props.firebase.database().ref().child('chapters');
    // Switch chapter data to Firebase
    rootRef.on('value', (snapshot) => {
      this.setState({
        chapters: snapshot.val()
      });
    });
  }

  render() {
    return (
      <Router>
        <ScrollToTop>
          <div className="Book">
            <Switch>
              <Route exact path="/" render={(props) => <Intro chapters={this.state.chapters} {...props} />} />
              <Route exact path="/chapter/" render={(props) => <TableOfContents chapters={this.state.chapters} {...props} />} />
              <Route path="/chapter/:chapter/:title/" render={(props) => <Chapter chapters={this.state.chapters} {...props} />} />
              <Route component={NotFound} />
            </Switch>
            <Route path="/" render={({location}) => {
              if (typeof window.ga === 'function') {
                window.ga('set', 'page', location.pathname + location.search);
                window.ga('send', 'pageview');
              }
              return null;
            }} />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default Book;
