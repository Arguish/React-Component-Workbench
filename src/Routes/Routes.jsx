import { Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import Back from "./Back.jsx";
import Hello from "../Components/Hello/Hello.jsx";

function Public() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/*" element={<Hello></Hello>}></Route>
      </Routes>
      <Back></Back>
    </div>
  );
}

export default Public;
