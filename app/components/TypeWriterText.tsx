"use client";

import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterText = ({ text }: { text: string }) => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString(text).pauseFor(4000).deleteAll().start();
      }}
      options={{
        loop: true,
        delay: 75,
      }}
    />
  );
};

export default TypewriterText;
