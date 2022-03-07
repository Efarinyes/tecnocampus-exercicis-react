import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Acordio from "./pages/acordions/Acordio";
import SegonAcordio from "./pages/acordions/SegonAcordio";
import Comptador from "./pages/comptador/Comptador";
import Galeria from "./pages/galeria/Galeria";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/Acordio" element={<Acordio />} />
          <Route path="/SegonAcordio" element={<SegonAcordio />}></Route>
          <Route path="/Comptador" element={<Comptador />}></Route>
          <Route path="/Galeria" element={<Galeria />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
