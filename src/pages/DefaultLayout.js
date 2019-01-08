import React from "react";
import PropTypes from "prop-types";
import AppHeader from "../components/AppHeader";

import "./DefaultLayout.css";

const DefaultLayout = ({ children, className }) => (
  <div className={`default-layout ${className}`}>
    <AppHeader />
    <main className="main">{children}</main>
    <footer className="app-footer">
      <div className="container">© Minneapolis College of Art and Design</div>
    </footer>
  </div>
);

DefaultLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

DefaultLayout.defaultProps = {
  children: null,
  className: ""
};

export default DefaultLayout;
