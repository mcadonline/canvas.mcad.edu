import React from "react";
import { Link } from "react-router-dom";
import DefaultLayout from "../DefaultLayout";
import Sketch from "../../components/Sketch/Sketch";

import "./HomePage.scss";

const HomePage = () => (
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
              <Link to="/orientation">Watch the Canvas Orientation</Link>
            </li>
            <li>
              <Link to="/class-schedule">
                MCAD Class Schedule and Book List
              </Link>
            </li>
          </ul>
        </article>
        <article className="card">
          <h2>Faculty</h2>
          <ul>
            <li>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdaNs9FkNpQo4Sb0O6ILojlil4IMQPFt91YX_BBu-rcntIhww/viewform">
                Sign-up for Workshops
              </a>
            </li>
            <li>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdio_botAdY-4GTfMrhqXVDX2HbphZCnEy-PTsDm9Hr-B6EcQ/viewform">
                Import Course Content
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/playlist?list=PLmMnwPxjH_hKJ4K5qzfoIZNSRrvGVzXyX">
                Google Meet Tutorials
              </a>
            </li>
          </ul>
        </article>
      </div>
    </section>
    <Sketch className="bg-sketch" />
  </DefaultLayout>
);

export default HomePage;
