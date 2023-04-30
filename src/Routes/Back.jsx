import React from "react";
import { NavLink } from "react-router-dom";

function HomeButton() {
  return (
    <div style={{ position: "fixed", bottom: "10px", left: "20px" }}>
      <div onClick={() => play()}>
        <NavLink to="/">
          <button
            style={{ height: "40px", width: "40px", borderRadius: "100%" }}
          >
            ◀
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default HomeButton;
