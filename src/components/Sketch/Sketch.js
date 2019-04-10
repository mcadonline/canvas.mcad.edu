import React, { useEffect } from "react";
import p5 from "p5";
import gravitySketch from "./gravitySketch";

const Sketch = ({ root }) => {
  useEffect(() => {
    new p5(gravitySketch, document.getElementById("p5-sketch-root"));
  }, []);

  return <div id="p5-sketch-root" />;
};

export default Sketch;
