import { Route, Routes, useNavigate } from "react-router-dom";
import CountryData from "./CountryData";
import Home from "./Home";

function App() {
  return (
    <div>
      <Routes>
        {" "}
        <Route path="/" element={<Home />} />
        <Route path="*" element={<CountryData />} />
      </Routes>
    </div>
  );
}

export default App;
