import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import BookTitle from './BookTitle';
import * as firebase from 'firebase';
import ProgressLabel from '../ProgressLabel';
import './TableOfContents.css';

class TableOfContents extends Component {

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
      <section>
        <Route exact path="/book/" component={BookTitle}/>
        <ol className="Table-of-contents">
          {
            this.state.chapters.length && this.state.chapters.map((chapter) => {
              return (
                <li key={chapter.slug}><Link to={{
                  pathname: "/book/" + chapter.number + "/" + chapter.slug,
                  state: { chapter: chapter }
                }}>{chapter.title}</Link> <ProgressLabel chapterData={chapter} /></li>
              );
            })
          }
        </ol>
      </section>
    );
  }

}

export default TableOfContents;
