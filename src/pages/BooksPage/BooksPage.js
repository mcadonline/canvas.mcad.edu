import React, { useState, useEffect } from "react";
import fetchCoursesBySemester from "./fetchCoursesBySemester";
import DefaultLayout from "../DefaultLayout";
import CourseList from "../../components/CourseList/CourseList";
import InputGroup from "../../components/InputGroup";
import bookLoverSvg from "../../img/undraw_book_lover_mkck.svg";
import prettifyTerm from "../../lib/prettifyTerm";

import "./BooksPage.scss";

export default () => {
  const [coursesByTermYear, setCoursesByTermYear] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [searchFilter, setSearchFilter] = useState("");

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

  function handleSearchFilterChange(e) {
    e.preventDefault();
    setSearchFilter(e.target.value);
  }

  const bySearchTerm = searchTerm => ({
    courseCode,
    courseName,
    instructor
  }) => {
    const lowercaseSearchTerm = searchTerm.toLowerCase();
    const instructorFirstName =
      instructor.preferredName || instructor.firstName;
    return (
      courseCode.toLowerCase().includes(lowercaseSearchTerm) ||
      courseName.toLowerCase().includes(lowercaseSearchTerm) ||
      instructorFirstName.toLowerCase().includes(lowercaseSearchTerm) ||
      instructor.lastName.toLowerCase().includes(lowercaseSearchTerm)
    );
  };

  const filteredCoursesByTermYear = coursesByTermYear.map(
    ({ term, year, courses }) => ({
      term,
      year,
      courses: courses.filter(bySearchTerm(searchFilter))
    })
  );

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

      <div className="search-bar">
        <div className="container">
          <InputGroup
            onChange={handleSearchFilterChange}
            label="Course Filter"
            placeholder="Filter by Course Name"
            icon="search"
          />
        </div>
      </div>

      {errorMessage && (
        <div className="error-message">
          <div className="container">
            <h2>Oopsies!</h2>
            <pre>Error: {errorMessage}</pre>
            <p>
              Something went wrong. Try clicking the Refresh Button. If you get
              this message repeatedly, please contact{" "}
              <a href="mailto:online@mcad.edu">online@mcad.edu</a>
            </p>
          </div>
        </div>
      )}

      <section className="page-section">
        {filteredCoursesByTermYear.map(({ term, year, courses }) => (
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
