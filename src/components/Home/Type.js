import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Telegram & Discord Bot Development",
          "Android App Development",
          "Front-end & Back-end Developer",
          "Cryptocurrency Smart Contract Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
