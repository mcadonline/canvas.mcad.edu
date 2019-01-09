import React from "react";
import { Link } from "react-router-dom";
import DefaultLayout from "./DefaultLayout";

import "./HomePage.css";

export default () => (
  <DefaultLayout className="home-page">
    <section className="section hero">
      <div className="container">
        <div className="hero__header-group">
          <h1>Canvas</h1>
          <h2>Minneapolis College of Art and Design</h2>
        </div>
        <a className="btn hero__btn" href="http://mcad.instructure.com">
          Log In
        </a>
      </div>
    </section>
    <section>
      <div className="container grid">
        <article className="card">
          <h2>Students</h2>
          <ul>
            <li>
              <Link to="/orientation">Canvas Orientation</Link>
            </li>
            <li>
              <a href="https://learn.mcad.edu">Blackboard</a>
            </li>
          </ul>
        </article>
      </div>
    </section>
  </DefaultLayout>
);
