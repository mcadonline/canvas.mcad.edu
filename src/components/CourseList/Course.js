import React from "react";
import Accordion from "../Accordion/Accordion";
import Book from "./Book";

function getFullName(instructor) {
  const { firstName, lastName, preferredName } = instructor;
  return `${preferredName || firstName} ${lastName}`;
}

function prettifyDate(dateStr) {
  const d = new Date(dateStr);
  // eslint-disable-next-line no-unused-vars
  const [day, month, date, year] = d.toString().split(" ");
  return `${month} ${date}, ${year}`;
}

export default ({ course }) => {
  const {
    courseName,
    courseCode,
    // term,
    // year,
    startDate,
    endDate,
    instructor,
    books
  } = course;
  return (
    <Accordion className="course" isOpenByDefault={true}>
      <Accordion.Header>
        <h1 className="course__title">{courseName}</h1>
      </Accordion.Header>
      <Accordion.Content>
        <section className="course__details">
          <p>
            {courseCode} • {getFullName(instructor)}
          </p>
          <p>
            {prettifyDate(startDate)} – {prettifyDate(endDate)}
          </p>
        </section>
        <section className="course__book-list">
          <h2 className="course__section-title">REQUIRED</h2>
          {books.map(book => (
            <Book key={book.isbn13} book={book} />
          ))}
        </section>
      </Accordion.Content>
    </Accordion>
  );
};
