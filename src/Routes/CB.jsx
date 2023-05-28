import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";

function CB({ comp }) {
  return (
    <NavLink to={`/${comp}`}>
      <button className=" inline-block m-4 py-2 px-4 bg-gray-400 rounded-full text-white text-2xl hover:ring-4 hover:ring-yellow-500">
        {comp}
      </button>
    </NavLink>
  );
}

export default CB;
