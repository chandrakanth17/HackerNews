import React from "react";
import { Switch, Route } from "react-router";
import Home from "./homePageComponent";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}

export default App;
