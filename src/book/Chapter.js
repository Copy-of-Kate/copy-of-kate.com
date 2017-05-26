import React from 'react';

const Chapter = (props) => {
  return (
    <section>
      <h1>Chapter {props.match.params.chapter}</h1>
      <p>Coming Soon</p>
    </section>
  );
};

export default Chapter;
