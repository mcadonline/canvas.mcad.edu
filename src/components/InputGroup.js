import React, { useState } from "react";

import "./InputGroup.scss";

export default ({ label, id, className, icon, ...rest }) => {
  const [hasFocus, setHasFocus] = useState(false);

  function handleFocus(e) {
    e.preventDefault();
    setHasFocus(true);
  }

  function handleBlur(e) {
    e.preventDefault();
    setHasFocus(false);
  }

  const classNames = [
    "input-group",
    className || "",
    hasFocus ? "is-active" : ""
  ].join(" ");

  return (
    <div className={classNames}>
      <label htmlFor={id} className="visually-hidden">
        {label}
      </label>
      {icon ? <i className={`fas fa-${icon}`} /> : ""}
      <input onFocus={handleFocus} onBlur={handleBlur} {...rest} />
    </div>
  );
};
