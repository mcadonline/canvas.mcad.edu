import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import "./App.css";

export default props => (
  <Router>
    <Switch>
      <Route {...props} exact path="/" component={HomePage} />
    </Switch>
  </Router>
);
