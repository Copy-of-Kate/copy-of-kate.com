import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import './Chapter.css';

import One from './chapters/One';

const Chapter = (props) => {
  const chapterData = props.location.state.chapter;
  return (
    <section>
      <h1 className="Chapter__title">Chapter {chapterData.number}</h1>
      <h3>{chapterData.title}</h3>
      <Switch>
        <Route path="/book/one/" component={One} />
        <Route render={() => <p>Not a valid chapter...</p>} />
      </Switch>
    </section>
  );
};

export default Chapter;
