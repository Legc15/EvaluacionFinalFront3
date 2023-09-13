import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Navbar from "./Components/Navbar";
import { ContextProvider } from "./Components/utils/global.context";


ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        <App />

    </React.StrictMode>,

);
