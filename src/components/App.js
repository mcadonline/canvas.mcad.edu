import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import OrientationPage from "../pages/OrientationPage/OrientationPage";
import BooksPage from "../pages/BooksPage/BooksPage";
import "./App.css";

export default props => (
  <Router>
    <Switch>
      <Route {...props} exact path="/" component={HomePage} />
      <Route {...props} path="/orientation*" component={OrientationPage} />
      <Route {...props} path="/books" component={BooksPage} />
    </Switch>
  </Router>
);
