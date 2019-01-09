import React from "react";

import "./Video.scss";

export default ({ title, src, children }) => (
  <div className="video">
    <iframe
      title={title}
      src={src}
      // width="640"
      // height="401"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen={true}
    />
    {children}
  </div>
);
