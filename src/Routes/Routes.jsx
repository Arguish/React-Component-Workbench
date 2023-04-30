import { Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import HomeButton from "./back.jsx";
import Hello from "../Components/Hello/Hello.jsx";
import CasseteCard from "../Components/MediaCard/CasseteCard.jsx";
import GameBoy from "../Components/GameBoy/GameBoy.jsx";

function Public() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/GameBoy" element={<GameBoy></GameBoy>}></Route>
        <Route
          path="/CasseteCard"
          element={<CasseteCard></CasseteCard>}
        ></Route>
        <Route path="/*" element={<Hello></Hello>}></Route>
      </Routes>
      <HomeButton></HomeButton>
    </div>
  );
}

export default Public;
