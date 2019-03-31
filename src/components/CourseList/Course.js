import React from "react";
import Accordion from "../Accordion/Accordion";
import Book from "./Book";
import prettifyDate from "../../lib/prettifyDate";

function getFullName(instructor) {
  const { firstName, lastName, preferredName } = instructor;
  return `${preferredName || firstName} ${lastName}`;
}

const BookList = ({ books }) => {
  if (!books) return "";
  return (
    <section className="book-list">
      <h2>Required Textbooks</h2>
      <ul>
        {books.map(book => (
          <Book key={book.isbn13} book={book} />
        ))}
      </ul>
    </section>
  );
};

export default ({ course }) => {
  const {
    courseName,
    courseCode,
    startDate,
    endDate,
    instructor,
    books
  } = course;
  return (
    <Accordion className="course">
      <Accordion.Header>
        <h1 className="course__title">{courseName}</h1>
        <section className="course__details">
          <p>
            {courseCode} • {getFullName(instructor)}
          </p>
          <p>
            {prettifyDate(startDate)} – {prettifyDate(endDate)}
          </p>
        </section>
      </Accordion.Header>
      <Accordion.Content>
        <BookList books={books} />
      </Accordion.Content>
    </Accordion>
  );
};
