
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages

import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import NasaPhoto from "views/examples/NasaPhoto";
import MarsRoverPhotos from "views/examples/MarsRoverPhotos";

// othersa

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      
      <Route path="/nucleo-icons" element={<NucleoIcons />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/nasaphoto" element={<NasaPhoto/>} />
      <Route path="/marsrover" element={<MarsRoverPhotos/>} />
      <Route path="/register-page" element={<RegisterPage />} />
      <Route path="*" element={<Navigate to="/register-page" replace />} />
    </Routes>
  </BrowserRouter>
);
