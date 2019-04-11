import p5 from "p5";
import ParticleSystem from "./ParticleSystem";
import { getRandomInt } from "./util";

export default function sketch(s) {
  let particleSys;

  s.setup = function() {
    s.createCanvas(window.innerWidth, window.innerHeight);

    s.background(255);
    s.noStroke();

    particleSys = new ParticleSystem({ sketch: s });

    // start with 3 particles
    for (let i = 0; i < 3; i++) {
      particleSys.add({
        position: new p5.Vector(
          getRandomInt(0, window.innerWidth),
          getRandomInt(0, window.innerHeight)
        ),
        color: [
          getRandomInt(220, 255),
          getRandomInt(220, 255),
          getRandomInt(220, 255)
        ]
      });
    }
  };

  s.draw = function() {
    // s.background(255);
    particleSys.update().render();

    // s.push();
    // s.fill(100);
    // s.ellipse(s.mouseX, s.mouseY, 10, 10);
    // s.pop();
  };

  s.mousePressed = function() {
    particleSys.add({
      position: new p5.Vector(s.mouseX, s.mouseY),
      color: [
        getRandomInt(100, 255),
        getRandomInt(100, 255),
        getRandomInt(100, 255)
      ]
    });

    // prevent default
    // return false;
  };

  s.keyPressed = function() {
    if (s.key === " ") {
      particleSys.removeAll();
    }
  };

  s.windowResized = function() {
    s.resizeCanvas(window.innerWidth, window.innerHeight);
    s.setup();
  };
}
