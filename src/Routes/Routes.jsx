import { Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import Back from "./Back.jsx";
import Hello from "../Components/Hello/Hello.jsx";
import WindowData from "../Components/WindowData/WindowData.jsx";
import ProductPreviewCard from "../Components/ProductPreviewCard/ProductPreviewCard.jsx";
import QRCard from "../Components/QRCard/QRCard.jsx";

function Public() {
  return (
    <>
      <>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route
            path="/ProductPreviewCard"
            element={<ProductPreviewCard></ProductPreviewCard>}
          />
          <Route path="/WindowData" element={<WindowData></WindowData>} />
          <Route path="/Hello" element={<Hello></Hello>} />
          <Route
            path="/QRCard"
            element={
              <QRCard
                url={"https://reboot.academy/"}
                desc={str}
                bgColor={"#eee"}
                color1={"rgba(2,0,36,1)"}
                color2={"rgba(0,212,255,1)"}
              ></QRCard>
            }
          />
          <Route path="/*" element={<Hello str={"ERROR DE RUTA"}></Hello>} />
        </Routes>
      </>
      <Back></Back>
    </>
  );
}

export default Public;

const str = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis,
praesentium atque. Illo blanditiis eligendi voluptatem cupiditate.
Aperiam pariatur assumenda dolor fugiat laudantium commodi deserunt!
Expedita neque quia odio a porro!`;
