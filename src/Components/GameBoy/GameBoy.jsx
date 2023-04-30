import React from "react";

function GameBoy() {
  const contorno = {
    width: "25em",
    height: "43em",
    borderRadius: "10px 10px 15% 10px",
    backgroundColor: "antiquewhite",
    padding: "2em",
    boxSizing: "content-box",
  };
  const altavoz = {
    border: "0.01px solid #212121",
    backgroundColor: "#212121",
    height: "80px",
    width: "10px",
    borderRadius: "10PX",
    boxShadow: "-2px -2px 2px",
  };
  const altavozGroup = {
    gridColumn: "5/7",
    gridRow: "7",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    transform: "rotate(-30deg) translateX(10px) translateY(-5px)",
  };
  const pauseBtnTxt = {
    margin: "0px",
    fontFamily: "monospace",
    color: "#494786",
  };
  const pauseBtn = {
    width: "55px",
    height: "15px",
    borderRadius: "10PX",
    backgroundColor: "#c4bebb",
    boxShadow: "3px 3px 2px",
  };
  const ABtnTxt = {
    margin: "0px",
    fontFamily: "monospace",
    color: "#494786",
  };
  const Abtn = {
    width: "55px",
    height: "55px",
    borderRadius: "100%",
    backgroundColor: "#9a2257",
    boxShadow: "3px 3px 2px",
  };
  return (
    <>
      <div style={contorno}>
        <div
          style={{
            border: "0.01px solid red",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr ",
            gridTemplateRows: "0.3fr 4.2fr 0.6fr 0.8fr 2fr 0.8fr 1fr ",
            height: "43em",
            gap: "0.2em",
          }}
          className="grid"
        >
          <div
            style={{
              border: "0.01px solid red",
              gridColumn: "1/7",
              gridRow: "2",
              borderRadius: "10px 10px 60px 10px ",
              backgroundColor: "#272929",
            }}
          >
            1
          </div>
          <div
            style={{
              fontFamily: "monospace",
              border: "0.01px solid red",
              gridColumn: "1/7",
              gridRow: "3",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <h2 style={{ margin: "0px 3px", color: "#494786" }}>Marina </h2>
            <h1
              style={{
                margin: "0px 3px",
                color: "#494786",
                fontStyle: "italic",
                fontSize: "35px",
              }}
            >
              DEV GIRL
            </h1>
            <h6 style={{ margin: "0px 3px", color: "#494786" }}>tm</h6>
          </div>
          <div
            style={{
              border: "0.01px solid red",
              gridColumn: "6/7",
              gridRow: "5",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transform: "rotate(-25deg) translateX(15px) translateY(0px) ",
            }}
          >
            <div style={Abtn}></div>
            <h1 style={ABtnTxt}>A</h1>
          </div>
          <div
            style={{
              border: "0.01px solid red",
              gridColumn: "5/6",
              gridRow: "5",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              transform: "rotate(-25deg) translateX(-5px) translateY(5px) ",
            }}
          >
            <div style={Abtn}></div>
            <h1 style={ABtnTxt}>B</h1>
          </div>
          <div
            style={{
              border: "0.01px solid red",
              gridColumn: "1/3",
              gridRow: "5",
            }}
          >
            5
          </div>
          <div
            style={{
              border: "0.01px solid red",
              gridColumn: "3/4",
              gridRow: "6",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              transform: "rotate(-25deg) translateX(-25px) translateY(-5px)",
            }}
          >
            <div style={pauseBtn}></div>
            <h3 style={pauseBtnTxt}>REBOOT</h3>
          </div>
          <div
            style={{
              border: "0.01px solid red",
              gridColumn: "4/5",
              gridRow: "6",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              transform: "rotate(-25deg) translateX(-15px) translateY(-5px)",
            }}
          >
            <div style={pauseBtn}></div>
            <h3 style={pauseBtnTxt}>ACADEMY</h3>
          </div>
          <div style={altavozGroup}>
            <div style={altavoz}></div>
            <div style={altavoz}></div>
            <div style={altavoz}></div>
            <div style={altavoz}></div>
            <div style={altavoz}></div>
            <div style={altavoz}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GameBoy;
