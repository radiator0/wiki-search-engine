import React, { Component } from "react";
import Navigation from "../common/navigation/Navigation";
import LoadingBar from "react-redux-loading-bar";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Search from "../search/Search";

class App extends Component {
  render() {
    return (
      <div id="main">
        <Navigation />
        <div id="loadingBar">
          <LoadingBar showFastActions className="loadingBar" />
          <LoadingBar
            showFastActions
            className="longLoadingBar"
            scope="longTask"
            updateTime={1000}
            maxProgress={95}
            progressIncrease={10}
          />
        </div>
        <div id="content">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Search} />
              {/* <Route path="/translator" component={Translator} />
            <Route exact path="/exercises" component={ExercisesList} /> */}
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
