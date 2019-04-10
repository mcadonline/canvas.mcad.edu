import React from "react";
import { Link } from "react-router-dom";
import DefaultLayout from "../DefaultLayout";
import Sketch from "../../components/Sketch/Sketch";

import "./HomePage.scss";

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
          <p>
            <Link to="/orientation">Watch the Canvas Orientation</Link>
          </p>
          <p>
            <Link to="/books">Get Books for Your Online Course</Link>
          </p>
        </article>
      </div>
    </section>
    <Sketch className="bg-sketch" />
  </DefaultLayout>
);
