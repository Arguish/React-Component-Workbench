import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";

function CB({ comp }) {
  return (
    <NavLink to={`/${comp}`}>
      <button
        style={{
          width: "200px",
          height: "75px",
          fontSize: "20px",
          margin: "3px",
          borderRadius: "300px",
        }}
      >
        {comp}
      </button>
      <Routes></Routes>
    </NavLink>
  );
}

export default CB;
