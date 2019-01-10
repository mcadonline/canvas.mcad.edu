import React, { useState } from "react";
import "./Accordion.scss";

export default ({ isOpenByDefault = false, title, children }) => {
  const [isOpen, setIsOpen] = useState(isOpenByDefault);

  function handleTitleClick() {
    console.log("click");
    setIsOpen(!isOpen);
  }

  return (
    <article className={`accordion ${isOpen ? "is-open" : ""}`}>
      <h1 className="accordion__title" onClick={handleTitleClick}>
        {title}
      </h1>
      <div className="accordion__contents">{children}</div>
    </article>
  );
};
