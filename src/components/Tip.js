import React from "react";

import "./Tip.css";

const Tip = ({ children }) => (
  <aside className="tip">
    <p>
      <b>
        <span role="img" aria-label="pointer-finger">
          ☝
        </span>
        Tip:
      </b>{" "}
      {children}
    </p>
  </aside>
);

export default Tip;
