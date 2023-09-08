import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';


import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import NoPage from "./pages/NoPage";
import DetalleDentista from "./pages/DetalleDentista";
import Contacto from "./pages/Contacto";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="favoritos" element={<Favoritos/>}/>
          <Route path="detalle-dentista" element={<DetalleDentista/>}/>
          <Route path="contacto" element={<Contacto/>}/>
          <Route path="*" element={<NoPage/>}/> 
        </Route>     
      </Routes>
    </BrowserRouter>

  );
}

export default App;
