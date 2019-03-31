import React, { useState } from "react";
import AccordionContext from "./AccordionContext";
import AccordionHeader from "./AccordionHeader";
import AccordionContent from "./AccordionContent";

import "./Accordion.scss";

const Accordion = ({ isOpenByDefault = false, children, className }) => {
  const [isOpen, setIsOpen] = useState(isOpenByDefault);

  return (
    <AccordionContext.Provider value={{ isOpen, setIsOpen }}>
      <article className={`${className} accordion ${isOpen ? "is-open" : ""}`}>
        {children}
      </article>
    </AccordionContext.Provider>
  );
};

Accordion.Header = AccordionHeader;
Accordion.Content = AccordionContent;

export default Accordion;
