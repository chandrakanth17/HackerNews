import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import Home from './pages/Home';

ReactDOM.hydrate(<Home />, document.querySelector('#root'));
