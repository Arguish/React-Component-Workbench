import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";

function CB({ comp }) {
  return (
    <NavLink to={`/${comp}`}>
      <button className=" inline-block m-4 py-2 px-4 bg-gradient-to-br from-gray-400 via-gray-200 to-gray-900 shadow rounded-full text-black text-2xl hover:ring-4 hover:ring-yellow-500">
        {comp}
      </button>
    </NavLink>
  );
}

export default CB;
