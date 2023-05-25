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
          <div className="flex flex-col items-center">
            <CB comp={"CasseteCard"}></CB>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
