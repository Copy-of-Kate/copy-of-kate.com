import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import BookTitle from './BookTitle';
import ProgressLabel from '../ProgressLabel';
import './TableOfContents.css';

const TableOfContents = props => {
  return (
    <section>
      <Route exact path="/chapter/" component={BookTitle} />
      {!props.chapters.length && <p>Loading...</p>}
      {props.chapters.length &&
        <ol className="Table-of-contents">
          {props.chapters.map(chapter => {
            return (
              <li key={chapter.slug}>
                <NavLink
                  to={{
                    pathname:
                      '/chapter/' + chapter.number + '/' + chapter.slug + '/',
                  }}
                  activeClassName="is-active"
                >
                  {chapter.title}
                </NavLink>{' '}
                <ProgressLabel chapterData={chapter} />
              </li>
            );
          })}
          <li>More someday...</li>
        </ol>}
    </section>
  );
};

export default TableOfContents;
