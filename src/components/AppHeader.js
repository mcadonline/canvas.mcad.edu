import React from "react";
import logo from "../img/MCAD_X.svg";

import "./AppHeader.css";

export default ({ name }) => (
  <header className="app-header">
    MCAD <img className="logo" src={logo} alt="X" /> {name}
  </header>
);
