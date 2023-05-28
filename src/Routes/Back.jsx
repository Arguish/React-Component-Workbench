import React from "react";
import { NavLink } from "react-router-dom";

function Back() {
  return (
    <div style={{ position: "fixed", bottom: "10px", left: "20px" }}>
      <div>
        <NavLink to="/">
          <button className="bg-gradient-to-br from-gray-400 via-gray-200 to-gray-900 rounded-full p-2 hover:ring-4 hover:ring-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="25"
              viewBox="0 -960 960 960"
              width="25"
            >
              <path d="M220-180h150v-250h220v250h150v-390L480-765 220-570v390Zm-60 60v-480l320-240 320 240v480H530v-250H430v250H160Zm320-353Z" />
            </svg>
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Back;
