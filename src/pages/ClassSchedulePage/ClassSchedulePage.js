import React, { useState, useEffect } from "react";
import fetchCoursesBySemester from "./fetchCoursesBySemester";
import DefaultLayout from "../DefaultLayout";
import CourseList from "../../components/CourseList/CourseList";
import InputGroup from "../../components/InputGroup";
import heroImg from "../../img/undraw_designer_life_w96d.svg";
import prettifyTerm from "../../lib/prettifyTerm";

import "./ClassSchedulePage.scss";

const withTextForSearching = course => {
  const textForSearching = [
    course.courseCode,
    course.name,
    course.instructor.firstName || "",
    course.instructor.lastName || "",
    course.isOnlineCourse ? "online" : ""
  ]
    .join("|")
    .toLowerCase();
  return {
    ...course,
    textForSearching
  };
};

const bySearchTerm = searchTerm => ({ textForSearching }) => {
  const lowercaseSearchTerm = searchTerm.toLowerCase();
  return textForSearching.includes(lowercaseSearchTerm);
};

export default () => {
  const [coursesByTermYear, setCoursesByTermYear] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [searchFilter, setSearchFilter] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchCoursesBySemester();
        const coursesWithTextForSearching = data.map(termYear => ({
          ...termYear,
          courses: termYear.courses.map(withTextForSearching)
        }));

        setCoursesByTermYear(coursesWithTextForSearching);
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

  return (
    <DefaultLayout className="class-list-page">
      <header className="page-title">
        <h1 className="container">
          Class Schedule <span className="subtitle">and Book List</span>
        </h1>
        <figure>
          <img src={heroImg} alt="Life of a Digital Learner" />
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
            className="search-bar__input"
            onChange={handleSearchFilterChange}
            label="Course Filter"
            placeholder="Filter by Course Name"
            icon="search"
            value={searchFilter}
          />
          <button
            className="search-bar__clear"
            onClick={() => setSearchFilter("")}
            aria-label="Clear Search Filter"
          >
            &times;
          </button>
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
        {coursesByTermYear.map(({ term, year, courses }) => (
          <CourseList
            key={`${term}-${year}`}
            term={term}
            year={year}
            courses={courses.filter(bySearchTerm(searchFilter))}
          />
        ))}
      </section>
    </DefaultLayout>
  );
};
