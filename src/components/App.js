import React from "react";
import AppHeader from "./AppHeader";
import "./App.css";

export default () => (
  <div className="app">
    <AppHeader name="Online Learning" />
    <main>
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
            <h2>Faculty</h2>
            <ul>
              <li>
                <a href="#!">🚀 Learn about Teaching with Canvas</a>
              </li>
              <li>
                <a href="#!">🏖 Request a Sandbox Course</a>
              </li>
              <li>
                <a href="#!">
                  ⏰ Schedule a one-on-one session with Online Learning
                </a>
              </li>
              <li>
                <a href="#!">🙋 Get Help from Online Learning</a>
              </li>
            </ul>
          </article>
          <article className="card">
            <h2>Students</h2>
            <ul>
              <li>
                <a href="#!">💡 Learn about Canvas</a>
              </li>
              <li>
                <a href="#!">🙋‍♂️ Get Help from Online Learning</a>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </main>
    <footer className="app-footer">
      <div className="container">© Minneapolis College of Art and Design</div>
    </footer>
  </div>
);
