import React from 'react';
import { Link, Route } from 'react-router-dom';
import BookTitle from './BookTitle';
import ChapterData from '../data/ChapterData';
import './TableOfContents.css';

const TableOfContents = () => {
  return (
    <section>
      <Route exact path="/book/" component={BookTitle}/>
      <ol className="Table-of-contents">
        {
          ChapterData.map((chapter) => {
            return (
              <li><Link to={{
                pathname: "/book/" + chapter.number + "/" + chapter.slug,
                state: { chapter: chapter }
              }}>{chapter.title}</Link> ({chapter.progress})</li>
            );
          })
        }
      </ol>
    </section>
  );
};

export default TableOfContents;
