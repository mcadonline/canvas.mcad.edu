import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import OrientationPage from "./pages/OrientationPage/OrientationPage";
import ClassSchedulePage from "./pages/ClassSchedulePage/ClassSchedulePage";
import "./App.css";

export default props => (
  <Router>
    <Switch>
      <Route {...props} exact path="/" component={HomePage} />
      <Route {...props} path="/orientation*" component={OrientationPage} />
      <Route {...props} path="/books" component={ClassSchedulePage} />
      <Route {...props} path="/class-schedule" component={ClassSchedulePage} />
    </Switch>
  </Router>
);
