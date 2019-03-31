import React, { useState, useEffect } from "react";
import fetchCoursesBySemester from "./fetchCoursesBySemester";
import DefaultLayout from "../DefaultLayout";
import CourseList from "../../components/CourseList/CourseList";
import bookLoverSvg from "../../img/undraw_book_lover_mkck.svg";

export default () => {
  const [coursesByTermYear, setCoursesByTermYear] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCoursesBySemester();
      console.log(data);
      setCoursesByTermYear(data);
    }
    fetchData();
  }, []);

  return (
    <DefaultLayout className="books-page">
      <header className="page-title">
        <h1 className="container">
          Textbooks <span className="subtitle">for Online Courses</span>
        </h1>
        <img
          src={bookLoverSvg}
          alt="Book Lover. Illustration of woman sitting on books reading with legs crossed."
        />
      </header>

      <section className="page-section">
        <div className="container">
          {coursesByTermYear.map(({ term, year, courses }) => (
            <CourseList
              key={`${term}-${year}`}
              term={term}
              year={year}
              courses={courses}
            />
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
};
