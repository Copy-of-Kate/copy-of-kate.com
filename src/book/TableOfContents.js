import React from 'react';
import { Link, Route } from 'react-router-dom';
import BookTitle from './BookTitle';
import ProgressLabel from '../ProgressLabel';
import './TableOfContents.css';

const TableOfContents = (props) => {
  return (
    <section>
      <Route exact path="/book/" component={BookTitle}/>
      { !props.chapters.length &&
        <p>Loading...</p>
      }
      {
        props.chapters.length &&
        <ol className="Table-of-contents">
          {
            props.chapters.map((chapter) => {
              return (
                <li key={chapter.slug}><Link to={{
                  pathname: "/book/" + chapter.number + "/" + chapter.slug,
                  state: { chapter: chapter }
                }}>{chapter.title}</Link> <ProgressLabel chapterData={chapter} /></li>
              );
            })
          }
        </ol>
      }
    </section>
  );
};

export default TableOfContents;
