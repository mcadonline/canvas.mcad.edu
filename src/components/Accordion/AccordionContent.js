import React from "react";

const AccordionContent = ({ children, className = "", ...rest }) => {
  return (
    <div className={`${className} accordion__content`} {...rest}>
      {children}
    </div>
  );
};

export default AccordionContent;
