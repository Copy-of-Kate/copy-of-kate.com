import React from 'react';
import './Chapter.css';

const Chapter = (props) => {
  return (
    <section>
      <h1 className="Chapter__title">Chapter {props.match.params.chapter}</h1>
      <article className="Book__pages">
        <p>Coming Soon</p>
      </article>
    </section>
  );
};

export default Chapter;
