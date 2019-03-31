import React, { useContext } from "react";
import AccordionContext from "./AccordionContext";

export default ({ children }) => {
  const { isOpen, setIsOpen } = useContext(AccordionContext);

  function handleClick(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  return (
    <header className="accordion__header" onClick={handleClick}>
      {children}
    </header>
  );
};
