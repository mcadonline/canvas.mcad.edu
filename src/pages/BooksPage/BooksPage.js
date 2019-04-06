import React, { useState, useEffect } from "react";
import fetchCoursesBySemester from "./fetchCoursesBySemester";
import DefaultLayout from "../DefaultLayout";
import CourseList from "../../components/CourseList/CourseList";
import bookLoverSvg from "../../img/undraw_book_lover_mkck.svg";
import prettifyTerm from "../../lib/prettifyTerm";

import "./BooksPage.scss";

export default () => {
  const [coursesByTermYear, setCoursesByTermYear] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchCoursesBySemester();
        setCoursesByTermYear(data);
      } catch (err) {
        setErrorMessage(err.message);
      }
    }
    fetchData();
  }, []);

  return (
    <DefaultLayout className="books-page">
      <header className="page-title">
        <h1 className="container">
          Textbooks <span className="subtitle">for Online Courses</span>
        </h1>
        <figure>
          <img
            src={bookLoverSvg}
            alt="Book Lover. Illustration of woman sitting on books reading with legs crossed."
          />
          <figcaption>
            Illustration by{" "}
            <a
              href="https://undraw.co/illustrations"
              target="_blank"
              rel="noopener noreferrer"
            >
              Katerina Limpitsouni
            </a>
          </figcaption>
        </figure>
      </header>

      <nav className="page-nav">
        <div className="container">
          <h2 className="page-nav__title">Semester</h2>
          <ul>
            {coursesByTermYear.map(({ term, year }) => (
              <li key={`${term}${year}`}>
                <a href={`#${term}-${year}`}>
                  {prettifyTerm(term)} {year}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {errorMessage && (
        <div className="error-message">
          <container>
            <h2>Oopsies!</h2>
            <pre>Error: {errorMessage}</pre>
            <p>
              Something went wrong. Try clicking the Refresh Button. If you get
              this message repeatedly, please contact{" "}
              <a href="mailto:online@mcad.edu">online@mcad.edu</a>
            </p>
          </container>
        </div>
      )}

      <section className="page-section">
        {coursesByTermYear.map(({ term, year, courses }) => (
          <CourseList
            key={`${term}-${year}`}
            term={term}
            year={year}
            courses={courses}
          />
        ))}
      </section>
    </DefaultLayout>
  );
};
