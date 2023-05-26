import React from "react";
import CB from "./CB";

function Home() {
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center", color: "antiquewhite" }}>
          Componentes
        </h1>
        <div>
          <CB comp={"Hello"}></CB>
          <CB comp={"ProductPreviewCard"}></CB>
          <CB comp={"WindowData"}></CB>
          <CB comp={"QRCard"}></CB>
        </div>
      </div>
    </>
  );
}

export default Home;
