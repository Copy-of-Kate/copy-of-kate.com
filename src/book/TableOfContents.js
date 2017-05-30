import React from 'react';
import { Link, Route } from 'react-router-dom';
import BookTitle from './BookTitle';
import ProgressLabel from '../ProgressLabel';
import './TableOfContents.css';

const TableOfContents = (props) => {
  return (
    <section>
      <Route exact path="/chapter/" component={BookTitle}/>
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
                  pathname: "/chapter/" + chapter.number + "/" + chapter.slug
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
