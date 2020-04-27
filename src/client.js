import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './pages/App';

ReactDOM.hydrate(
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>,
  document.querySelector('#root')
);
