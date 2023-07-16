import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Web Developer",
          "Cyber Security Enthusiast",
          "Freelancer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 25,
      }}
    />
  );
}

export default Type;
