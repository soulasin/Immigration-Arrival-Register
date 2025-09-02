import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./page/Home";
import About from "./page/About";
import Register from "./page/Register";
import Legis from "./page/Legis";
import "./index.css";
import Contact from "./page/Contact";
import VisaTracking from "./page/VisaTracking";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
       <Route path="/legislation" element={<Legis />} />
       <Route path="/referenceID" element={<VisaTracking />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
