import React, { useState, useEffect } from "react";

const WindowData = () => {
  const [counter, setcounter] = useState(0);
  const [SL, setSL] = useState(0);
  const [ST, setST] = useState(0);
  const [IW, setIW] = useState(0);
  const [IH, setIH] = useState(0);
  const [SY, setSY] = useState(0);
  const [CX, setCX] = useState(0);
  const [CY, setCY] = useState(0);
  const [MX, setMX] = useState(0);
  const [MY, setMY] = useState(0);
  const [BT, setBT] = useState(0);
  const [CTRLKey, setCTRLKey] = useState(0);
  const [ALTKey, setALTKey] = useState(0);
  const [SHIFTKey, setSHIFTKey] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => handleRefresh(), 0);
    return () => clearTimeout(timer);
  }, [counter]);

  const handleMovement = (e) => {
    console.log(e);
    setCX(e.clientX);
    setCY(e.clientY);
    setMX(e.movementX);
    setMY(e.movementY);
    setBT(e.buttons);
    setCTRLKey(e.ctrlKey);
    setALTKey(e.altKey);
    setSHIFTKey(e.shiftKey);
  };

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
    <div style={{ textAlign: "center" }}>
      <div
        onMouseMove={handleMovement}
        style={{
          position: "fixed",
          width: `${IW - 19}px`,
          height: `${IH - 2}px`,
          top: 0,
          left: 0,
          border: "0.1px solid red",
          overflow: "hidden",
        }}
      ></div>
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
      <div
        style={{
          position: "fixed",
          right: "0px",
          top: "0px",
          margin: "10px",
          backgroundColor: "#555",
          padding: "5px",
          borderRadius: "5px",
        }}
      >
        <h4 style={{ color: "antiquewhite" }}>Event.ClientX: {CX}</h4>
        <h4 style={{ color: "antiquewhite" }}>Event.ClientY: {CY}</h4>
        <h4 style={{ color: "antiquewhite" }}>Event.MovementX: {MX}</h4>
        <h4 style={{ color: "antiquewhite" }}>Event.MovementY: {MY}</h4>
        <h4 style={{ color: "antiquewhite" }}>Event.Button: {BT}</h4>
        <h4 style={{ color: "antiquewhite" }}>
          CTRL Key: {CTRLKey ? "🌝" : "🌚"}
        </h4>
        <h4 style={{ color: "antiquewhite" }}>
          ALT Key : {ALTKey ? "🌝" : "🌚"}
        </h4>
        <h4 style={{ color: "antiquewhite" }}>
          SHIFT Key: {SHIFTKey ? "🌝" : "🌚"}
        </h4>
      </div>
      <div
        style={{
          backgroundImage: "url(https://picsum.photos/200)",
          backgroundPosition: `${-1 * SL}px  ${-1 * ST + SY}px`,
          width: "300px",
          height: "300px",
          border: "0.1px solid red",
        }}
      ></div>
      <div
        style={{
          backgroundImage: "url(https://picsum.photos/200)",
          backgroundPosition: `${CX * 0.2}px  ${CY * 0.2}px`,
          width: "300px",
          height: "300px",
          border: "0.1px solid red",
        }}
      ></div>
    </div>
  );
};

export default WindowData;
