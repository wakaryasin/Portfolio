import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: ["Android App Developer", "Softaware Engineer", "Problem Solver"],
        autoStart: true,
        loop: true,
        deleteSpeed: 80
      }}
    />
  );
}

export default Type;
