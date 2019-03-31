import React from "react";
import Course from "./Course";
import prettifyTerm from "../../lib/prettifyTerm";

export default ({ term, year, courses }) => (
  <div className="course-list">
    <div className="container">
      <h1 className="course-list__title" id={`${term}-${year}`}>
        {prettifyTerm(term)} {year}
      </h1>
      <div className="course-list__contents">
        {courses.map(course => (
          <Course key={course.courseId} course={course} />
        ))}
      </div>
    </div>
  </div>
);
