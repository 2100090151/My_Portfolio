import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "AI/ML Engineer",
          "Python Full Stack Developer",
          "Open Source Contributor",
          "AI/ML and Deep Learning enthusiast",
          "Machine Learning Engineer",
          "Computer Vision Learner"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
