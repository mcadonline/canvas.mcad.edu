import React from "react";
import "./Book.scss";

function withLinkIfExists(Component, url) {
  if (!url) return <Component />;
  return (
    <a href={url}>
      <Component />
    </a>
  );
}

export default ({ book }) => {
  const { isbn13, title, storeUrl } = book;
  const BookName = () => (
    <>
      <i className="book__title">{title}</i>.{" "}
      <span className="book__isbn">{isbn13}</span>
    </>
  );

  return (
    <li className="course-list__course-book">
      {withLinkIfExists(BookName, storeUrl)}
    </li>
  );
};
