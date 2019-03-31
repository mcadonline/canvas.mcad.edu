import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/MCAD_X.svg";

import "./AppHeader.scss";

export default ({ name = "Online Learning" }) => (
  <header className="app-header">
    <Link to="/">
      MCAD <img className="logo" src={logo} alt="X" /> {name}
    </Link>
  </header>
);
