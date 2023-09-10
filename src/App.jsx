import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import Contacto from "./pages/Contacto";
import NoPage from "./pages/NoPage";
import DetalleOdontologo from './pages/DetalleOdontologo';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="favoritos" element={<Favoritos />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="odontologo/:id" element={<DetalleOdontologo />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
