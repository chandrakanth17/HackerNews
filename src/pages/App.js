import React from 'react';
import { Switch, Route, Router } from 'react-router';
import 'babel-polyfill';
import Home from './Home';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
