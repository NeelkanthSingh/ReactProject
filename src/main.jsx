import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Work from "./components/layouts/Work.jsx";
import Clients from "./components/layouts/Clients.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="home" element={<Work />} />
        <Route path="clients" element={<Clients />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
