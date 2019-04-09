import React, { useEffect } from "react";
import p5 from "p5";

const sketch = root => p => {
  p.setup = function setup() {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.parent = root;
    p.noStroke();
    p.rectMode(p.CENTER);
  };

  p.draw = function draw() {
    const inverseX = p.width - p.mouseX;
    const inverseY = p.height - p.mouseY;

    p.background(255);
    p.fill("hsla(100,100%,50%,0.5)");
    p.ellipse(p.mouseX, p.height / 2, p.mouseY / 2 + 10, p.mouseY / 2 + 10);
    p.fill("hsla(200,100%,50%,0.5)");
    p.rect(inverseX, p.height / 2, inverseY / 2 + 10, inverseY / 2 + 10);
  };

  p.windowResized = function windowResized() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

const Sketch = ({ root }) => {
  useEffect(() => {
    new p5(sketch(root), document.getElementById("p5-sketch-root"));
  }, []);

  return <div id="p5-sketch-root" />;
};

export default Sketch;
