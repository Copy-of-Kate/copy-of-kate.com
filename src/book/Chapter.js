import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import './Chapter.css';

import One from './chapters/One';

const Chapter = (props) => {
  return (
    <section>
      <h1 className="Chapter__title">Chapter {props.match.params.chapter}</h1>
      <Switch>
        <Route path="/book/one/" component={One} />
        <Route render={() => <p>Not a valid chapter...</p>} />
      </Switch>
    </section>
  );
};

export default Chapter;
