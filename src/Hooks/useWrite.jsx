import React, { useState, useEffect } from "react";

const useWrite = (input, time = 25) => {
  const [end, setend] = useState(false);
  const [text, settext] = useState("");
  const [letter, setletter] = useState(0);

  const lenshow = () => {
    if (letter <= input.length) {
      setletter(letter + 1);
    } else {
      setend(true);
    }
  };

  const textChop = () => {
    settext(input.slice(0, letter) + (letter >= input.length ? "" : " |"));
  };

  useEffect(() => {
    const timerID = setInterval(() => {
      if (!end) {
        lenshow();
        textChop();
      }
    }, time);

    return () => {
      clearInterval(timerID);
    };
  });

  return [text];
};

export default useWrite;
