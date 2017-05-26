import React from 'react';
import ReactDOM from 'react-dom';
import Book from './Book';
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css';
import './index.css';

ReactDOM.render(<Book />, document.getElementById('root'));
registerServiceWorker();
