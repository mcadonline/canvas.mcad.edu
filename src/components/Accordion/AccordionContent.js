import React from "react";

export default ({ children, className = "", ...rest }) => {
  return (
    <div className={`${className} accordion__content`} {...rest}>
      {children}
    </div>
  );
};
