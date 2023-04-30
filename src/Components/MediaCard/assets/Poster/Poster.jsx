import React from "react";
import "./Poster.css";

function Poster({ url }) {
  return (
    <>
      <div className="celo_1"></div>
      <div className="celo_2"></div>
      <div style={{ overflow: "hidden" }} className="mediacard_border">
        <img src={url} alt="" />
      </div>
    </>
  );
}

export default Poster;
