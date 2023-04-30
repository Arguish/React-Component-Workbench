import React from "react";
import CB from "./CB";

function Home() {
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>Menú</h1>
        <div>
          <div className="flex flex-col items-center">
            <CB comp={"CasseteCard"}></CB>
            <CB comp={"GameBoy"}></CB>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
