import React from "react";
import "./Book.scss";

function withLink(Component, { url }) {
  // const bestGuessUrl = `https://www.amazon.com/s?k=${isbn13}&language=en_US&tag=minneapcolleg-20`;

  if (!url) return <Component />;

  return (
    <a href={url} rel="noopener noreferrer" target="_blank">
      <Component />
    </a>
  );
}

const Book = ({ book }) => {
  const { isbn13, title, storeUrl } = book;
  const BookName = () => (
    <>
      <i className="book__title">{title}</i>.{" "}
      <span className="book__isbn">{isbn13}</span>
    </>
  );

  return <li className="book">{withLink(BookName, { url: storeUrl })}</li>;
};

export default Book;
