import React from 'react';
import TableOfContents from './TableOfContents';
import BookTitle from './BookTitle';

const Intro = (props) => {
  return (
    <section>
      <BookTitle />
      <article className="Book__pages">
        <p>This is an online, serialized, novel. It is <a href="https://github.com/Copy-of-Kate/book" title="Github Book Project">open-source</a>, in that you may read it as it's in-progress and view its changes over time. I don't personally recommend that as things will change so much that either a) they will suck horribly until they're good most of the time, and slightly b) something you like might be removed, moved, or who knows what else.</p>
        <p>Maybe one day this will all be done.</p>
        <p>- SD</p>
        <h2>Index</h2>
        <h4>All chapters and chapter titles are subject to change at any time.</h4>
        <TableOfContents chapters={props.chapters} {...props} />
      </article>
    </section>
  );
};

export default Intro;
