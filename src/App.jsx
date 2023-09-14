import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextProvider } from "./Components/utils/global.context";
import "./index.css";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import Contacto from "./pages/Contacto";
import NoPage from "./pages/NoPage";
import Detail from './pages/Detail';




function App() {

  return (

    <ContextProvider  >

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="favoritos" element={<Favoritos />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="odontologo/:id" element={<Detail />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>

      </BrowserRouter>

    </ContextProvider>
  );
}


export default App;
