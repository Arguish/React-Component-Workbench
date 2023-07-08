import React, { useState, useEffect } from "react";

const useWrite = (msg, Go = true, time = 25) => {
  const [input, setinput] = useState(msg);
  const [end, setend] = useState(false);
  const [text, settext] = useState("");
  const [letter, setletter] = useState(0);
  const [canGo, setcanGo] = useState(Go);

  const newMsg = (str) => {
    reset();
    setinput(str);
  };

  const playPause = () => {
    setcanGo(!canGo);
  };

  const reset = () => {
    setletter(0);
  };

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
      if (!end && canGo) {
        lenshow();
        textChop();
      }
    }, time);

    return () => {
      clearInterval(timerID);
    };
  });

  return [text, playPause, reset, newMsg];
};

export default useWrite;
