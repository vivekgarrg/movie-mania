import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./app.css";

import Banner from "./Components/Banner";
import Error from "./Components/Error";
import Favourites from "./Components/Favourites";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
