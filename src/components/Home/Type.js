import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Data Science Engineer",
          "Machine Learning Specialist",
          "Deep Learning Engineer",
          "LLM & RAG Engineer",
          "Multi-Agent Architect",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
