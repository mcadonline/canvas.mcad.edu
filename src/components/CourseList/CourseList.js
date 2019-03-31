import React from "react";
import Course from "./Course";

function prettifyTerm(term) {
  if (term === "FA") return "Fall";
  if (term === "SP") return "Spring";
  if (term === "SU") return "Summer";
  return term;
}

export default ({ term, year, courses }) => (
  <div className="course-list">
    <h1 className="course-list__title">
      {prettifyTerm(term)} {year}
    </h1>
    {courses.map(course => (
      <Course key={course.courseId} course={course} />
    ))}
  </div>
);
