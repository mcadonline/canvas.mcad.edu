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
            <Link to="/class-schedule">MCAD Class Schedule and Book List</Link>
          </p>
        </article>
        <article className="card">
          <h2>Faculty</h2>
          <ul>
            <li>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdio_botAdY-4GTfMrhqXVDX2HbphZCnEy-PTsDm9Hr-B6EcQ/viewform">
                Course Copy Request
              </a>
            </li>
            <li>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeS4NHKVcuzCnsqJ-0_IhzmTS35EkEWxlu1YWBpGR5wJ62h7g/viewform">
                Workshop: Priming the Canvas
              </a>
            </li>
          </ul>
        </article>
      </div>
    </section>
    <Sketch className="bg-sketch" />
  </DefaultLayout>
);
