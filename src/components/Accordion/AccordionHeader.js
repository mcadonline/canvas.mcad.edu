import React, { useContext } from "react";
import AccordionContext from "./AccordionContext";

const AccordionHeader = ({ children, className = "", ...rest }) => {
  const { isOpen, setIsOpen } = useContext(AccordionContext);

  function handleClick(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  return (
    <header
      className={`${className} accordion__header`}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </header>
  );
};

export default AccordionHeader;
