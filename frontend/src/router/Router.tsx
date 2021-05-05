import React from "react";
import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Search from "../search/Search";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Search} />
          {/* <Route path="/translator" component={Translator} />
            <Route exact path="/exercises" component={ExercisesList} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}
export default Router;
