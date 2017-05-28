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
            const url = "/book/" + chapter.number + "/" + chapter.slug;
            return (
              <li><Link to={{
                pathname: url,
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
