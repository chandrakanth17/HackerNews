import React from 'react';
import { Switch, Route, Router } from 'react-router';
import 'babel-polyfill';
import Home from './Home';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
