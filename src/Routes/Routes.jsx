import { Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import HomeButton from "./back.jsx";
import Hello from "../Components/Hello/Hello.jsx";

function Public() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Hello" element={<Hello></Hello>}></Route>
      </Routes>
      <HomeButton></HomeButton>
    </div>
  );
}

export default Public;
