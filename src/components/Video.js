import React from "react";

import "./Video.scss";

export default ({ title, src, children }) => (
  <div className="video">
    <iframe
      title={title}
      src={src}
      // width="640"
      // height="401"
      frameborder="0"
      webkitallowfullscreen
      mozallowfullscreen
      allowfullscreen
    />
    {children}
  </div>
);
