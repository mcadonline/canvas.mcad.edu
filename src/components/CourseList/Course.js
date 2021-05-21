import React from "react";
import { partition } from "ramda";
import Accordion from "../Accordion";
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
        {books.map((book) => (
          <Book key={book.isbn13} book={book} />
        ))}
      </ul>
    </section>
  );
};

function getLongDay(shortDayCodes) {
  const lookup = {
    M: "Monday",
    T: "Tuesday",
    W: "Wednesday",
    R: "Thursday",
    F: "Friday",
    S: "Saturday",
    U: "Sunday",
  };
  if (!shortDayCodes) return "Asynchronous";

  return shortDayCodes
    .split("")
    .map((char) => lookup[char])
    .join(", ");
}

const Meeting = ({ location, days, startTime, endTime, isOnlineCourse }) => (
  <li>
    {getLongDay(days)}
    {startTime && endTime ? ` ${startTime}–${endTime}, ` : " "}
    {location === "WEB OL" ? "Online Course" : location}
  </li>
);

const MeetingList = ({ meetings }) => (
  <ul className="meeting-list">
    {meetings.map((m) => (
      <Meeting key={[m.location, m.days, m.startTime].join("-")} {...m} />
    ))}
  </ul>
);

const Course = ({ course }) => {
  const {
    name,
    courseCode,
    startDate,
    endDate,
    description,
    instructor,
    books,
    meetings,
    isOnlineCourse,
  } = course;

  const [requiredBooks, optionalBooks] = partition(
    // if isRequired field doesn't exist on book, assume it is required
    (book) => book.isRequired === undefined || book.isRequired,
    books
  );

  return (
    <Accordion className="course">
      <Accordion.Header>
        <h1 className="course__title">
          {name} {isOnlineCourse && "(Online)"}
        </h1>
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
        {description ? <p>{description}</p> : ""}

        <h2>Class Meetings</h2>

        <MeetingList meetings={meetings} />

        {requiredBooks.length ? (
          <BookList books={requiredBooks} title="Required Textbooks" />
        ) : (
          ""
        )}
        {optionalBooks.length ? (
          <BookList books={optionalBooks} title="Optional Textbooks" />
        ) : (
          ""
        )}
        {!books.length ? (
          <>
            <h2>Required Textbooks</h2>
            <ul>
              <li>None</li>
            </ul>
          </>
        ) : (
          ""
        )}
      </Accordion.Content>
    </Accordion>
  );
};

export default Course;
