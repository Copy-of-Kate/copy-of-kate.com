import React from 'react';
import { Link, Route } from 'react-router-dom';
import BookTitle from './BookTitle';
import './TableOfContents.css';

const TableOfContents = () => {
  return (
    <section>
      <Route exact path="/book/" component={BookTitle}/>
      <ol className="Table-of-contents">
        <li><Link to="/book/one">Moving Day</Link> (in progress)</li>
        <li>Birth Day (coming soon)</li>
        <li>My Hole In The Ground (coming soon)</li>
      </ol>
    </section>
  );
};

export default TableOfContents;
