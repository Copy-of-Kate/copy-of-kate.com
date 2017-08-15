import React from 'react';
import { render } from 'react-snapshot';
import Book from './Book';
import * as firebase from 'firebase';
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css';
import './index.css';

const config = {
  apiKey: 'AIzaSyDT1NDmgJkHkm5lxm5pZLukI1IjLUO49xU',
  authDomain: 'copy-of-kate.firebaseapp.com',
  databaseURL: 'https://copy-of-kate.firebaseio.com',
  projectId: 'copy-of-kate',
  storageBucket: 'copy-of-kate.appspot.com',
  messagingSenderId: '1077024914310',
};
firebase.initializeApp(config);

render(<Book firebase={firebase} />, document.getElementById('root'));
registerServiceWorker();
