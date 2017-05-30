import React, { Component } from 'react';
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

class Book extends Component {

  constructor() {
    super();
    this.state = {
      chapters: {}
    };
  }

  componentDidMount() {
    const rootRef = this.props.firebase.database().ref().child('chapters');
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
            <Route exact path="/" render={(props) => <Intro chapters={this.state.chapters} {...props} />} />
            <Route exact path="/chapter/" render={(props) => <TableOfContents chapters={this.state.chapters} {...props} />} />
            <Route path="/chapter/:chapter/:title/" render={(props) => <Chapter chapters={this.state.chapters} {...props} />} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Book;
