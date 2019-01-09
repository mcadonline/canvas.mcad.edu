import React from "react";

import "./Tip.css";

export default ({ children }) => (
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
