import React from "react";
import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ResultVisualisation from "../result-visualisation/ResultVisualisation";
import Results from "../results/Results";
import Search from "../search/Search";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/page/:id" component={ResultVisualisation} />
          {/* <Route path="/translator" component={Translator} />
            <Route exact path="/exercises" component={ExercisesList} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}
export default Router;
