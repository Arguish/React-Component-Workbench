import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes/Routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
