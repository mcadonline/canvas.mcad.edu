import React from "react";
import { Link } from "react-router-dom";

import "./AppHeader.scss";

const AppHeader = ({ name = "Online Learning" }) => (
  <header className="app-header">
    <div className="container">
      <Link to="/">MCAD</Link>
    </div>
  </header>
);

export default AppHeader;
