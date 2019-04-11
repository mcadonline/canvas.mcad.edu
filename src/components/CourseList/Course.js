import React from "react";
import { partition } from "ramda";
import Accordion from "../Accordion/Accordion";
import Book from "./Book";
import prettifyDate from "../../lib/prettifyDate";

function getFullName(instructor) {
  const { firstName, lastName, preferredName } = instructor;
  return `${preferredName || firstName} ${lastName}`;
}

const BookList = ({ books, title }) => {
  if (!books) return "";
  return (
    <section className="book-list">
      <h2>{title}</h2>
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

  const [requiredBooks, optionalBooks] = partition(
    // if isRequired field doesn't exist on book, assume it is required
    book => book.isRequired === undefined || book.isRequired,
    books
  );

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
        {requiredBooks.length ? (
          <BookList books={requiredBooks} title="Required" />
        ) : (
          ""
        )}
        {optionalBooks.length ? (
          <BookList books={optionalBooks} title="Optional" />
        ) : (
          ""
        )}
        {!books.length ? <p>No Required Textbooks</p> : ""}
      </Accordion.Content>
    </Accordion>
  );
};
