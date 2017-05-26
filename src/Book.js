import React, { Component } from 'react';
import './Book.css';

class Book extends Component {
  render() {
    return (
      <div className="Book">
        <h1 className="Book__title">Copy of Kate</h1>
        <section className="Book__pages">
          <p>This is an online, serialized, novel. It is open-source, in that you may read it as it's in-progress and view its changes over time. I don't personally recommend that as things will change so much that either a) they will suck horribly until they're good most of the time, and slightly b) something you like might be removed, moved, or who knows what else.</p>
          <p>Maybe one day this will all be done.</p>
          <p>- SD</p>
        </section>
      </div>
    );
  }
}

export default Book;
