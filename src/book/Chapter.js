import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import ProgressMessage from '../ProgressMessage';
import TableOfContents from './TableOfContents';
import './Chapter.css';

import One from './chapters/One';

const Chapter = (props) => {
  let currentChapter;
  if (props.chapters.length) {
    currentChapter = props.chapters.filter((chapter) => (chapter.number === props.match.params.chapter) ? chapter : false)[0];
  }
  return (
    <div>
      { currentChapter &&
        <section className="Book__pages">
          <h1 className="Chapter__title">Chapter {currentChapter.number}</h1>
          <h3>{currentChapter.title}</h3>
          <Switch>
            <Route path="/chapter/one/" component={One} />
            <Route path="/chapter/" render={() => <p>"Soon"...</p>} />
          </Switch>
          <TableOfContents chapters={props.chapters} />
          <ProgressMessage chapterData={currentChapter} />
        </section>
      }
    </div>
  );
};

export default Chapter;
