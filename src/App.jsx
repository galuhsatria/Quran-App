import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailSurah from "./pages/DetailSurah/DetailSurah";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="surah/:nomor" element={<DetailSurah />} />
      </Routes>
    </Router>
  );
}

export default App;
