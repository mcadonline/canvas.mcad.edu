import React from "react";
import "./Book.scss";

function withLink(Component, { url, isbn13 }) {
  const bestGuessUrl = `https://www.amazon.com/s?k=${isbn13}&language=en_US&tag=minneapcolleg-20`;

  return (
    <a href={url || bestGuessUrl} rel="noopener noreferrer" target="_blank">
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
    <li className="book">{withLink(BookName, { url: storeUrl, isbn13 })}</li>
  );
};
