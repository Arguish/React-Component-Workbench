import React, { useState, useEffect } from "react";

const WindowData = () => {
  const [counter, setcounter] = useState(0);
  const [SL, setSL] = useState(0);
  const [ST, setST] = useState(0);
  const [IW, setIW] = useState(0);
  const [IH, setIH] = useState(0);
  const [SY, setSY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => handleRefresh(), 10);
    return () => clearTimeout(timer);
  }, [counter]);

  const handleRefresh = () => {
    //console.log(window);
    setSL(window.screenLeft);
    setST(window.screenTop);
    setIW(window.innerWidth);
    setIH(window.innerHeight);
    setSY(window.scrollY);
    setcounter(counter + 1);
  };

  return (
    <div>
      <div
        style={{
          position: "fixed",
          left: "0px",
          top: "0px",
          margin: "10px",
          backgroundColor: "#555",
          padding: "5px",
          borderRadius: "5px",
        }}
      >
        <h4 style={{ color: "antiquewhite" }}>
          SO: {window.navigator.platform}
        </h4>
        <h4 style={{ color: "antiquewhite" }}>window.screenLeft: {SL}</h4>
        <h4 style={{ color: "antiquewhite" }}>window.screenTop: {ST}</h4>
        <h4 style={{ color: "antiquewhite" }}>window.innerWidth: {IW}</h4>
        <h4 style={{ color: "antiquewhite" }}>window.innerHeight: {IH}</h4>
        <h4 style={{ color: "antiquewhite" }}>window.scrollY: {SY}</h4>
        <button
          onClick={() => {
            window.scrollTo(0, SY + 100);
          }}
        >
          Scroll + 100
        </button>
      </div>
      <h1>...</h1>
      <h1>...</h1>
      <h1>...</h1>
      <h1>...</h1>
      <h1>...</h1>
      <h1>...</h1>
      <h1>...</h1>
      <h1>...</h1>
      <h1>...</h1>
      <h1>...</h1>
      <h1>...</h1>
      <h1>...</h1>
      <h1>...</h1>
      <h1>...</h1>
      <h1>...</h1>
      <h1>...</h1>
      <h1>...</h1>
      <h1>...</h1>
      <h1>...</h1>
      <h1>...</h1>
      <h1>...</h1>
      <h1>...</h1>
      <h1>...</h1>
      <h1>...</h1>
      <h1>...</h1>
      <h1>...</h1>
      <h1>...</h1>
      <h1>...</h1>
      <h1>...</h1>
      <h1>...</h1>
      <h1>...</h1>
      <h1>...</h1>
      <h1>...</h1>
      <h1>...</h1>
      <h1>...</h1>
      <h1>...</h1>
      <h1>...</h1>
      <h1>...</h1>
      <h1>...</h1>
      <h1>...</h1>
      <h1>...</h1>
      <h1>...</h1>
      <h1>...</h1>
      <h1>...</h1>
      <h1>...</h1>
    </div>
  );
};

export default WindowData;
