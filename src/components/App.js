import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import OrientationPage from "../pages/OrientationPage";
import "./App.css";

export default props => (
  <Router>
    <Switch>
      <Route {...props} exact path="/" component={HomePage} />
      <Route {...props} path="/orientation" component={OrientationPage} />
    </Switch>
  </Router>
);
