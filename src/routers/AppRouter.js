import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomeScreen } from "../components/screens/home/HomeScreen";
import { ResultScreen } from "../components/screens/results/ResultScreen";
import { TestScreen } from "../components/screens/test/TestScreen";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/test" component={TestScreen} />
          <Route exact path="/results" component={ResultScreen} />
        </Switch>
      </div>
    </Router>
  );
};
