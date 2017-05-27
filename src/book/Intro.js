import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <section>
      <h1 className="Book__title">Copy of Kate</h1>
      <article className="Book__pages">
        <p>This is an online, serialized, novel. It is open-source, in that you may read it as it's in-progress and view its changes over time. I don't personally recommend that as things will change so much that either a) they will suck horribly until they're good most of the time, and slightly b) something you like might be removed, moved, or who knows what else.</p>
        <p>Maybe one day this will all be done.</p>
        <p>- SD</p>
        <h2>Index</h2>
        <h4>All chapters and chapter titles are subject to change at any time.</h4>
        <ol className="Book__index">
          <li><Link to="/book/one">Moving Day</Link> (in progress)</li>
          <li>Birth Day (coming soon)</li>
          <li>My Hole In The Ground (coming soon)</li>
        </ol>
      </article>
    </section>
  );
};

export default Intro;
