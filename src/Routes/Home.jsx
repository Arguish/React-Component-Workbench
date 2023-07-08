import React from "react";
import CB from "./CB";

function Home() {
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center", color: "antiquewhite" }}>
          Componentes
        </h1>
        <div className="flex flex-col flex-wrap items-center">
          <CB comp={"Hello"}></CB>
          <CB comp={"ResultSummary"}></CB>
          <CB comp={"ProductPreviewCard"}></CB>
          <CB comp={"Game"}></CB>
          <CB comp={"Combate"}></CB>
          <CB comp={"WindowData"}></CB>
          <CB comp={"QRCard"}></CB>
        </div>
      </div>
    </>
  );
}

export default Home;
