import React from "react";

function Hello({ str = "Placeholder" }) {
  return <h1 style={{ color: "antiquewhite" }}>{str}</h1>;
}

export default Hello;
