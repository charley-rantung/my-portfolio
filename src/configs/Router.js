import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Projects,
  Skills,
  About,
  CovidTrackerWeb,
  HireMe,
} from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route
          path="/projects/covid-tracker-web"
          element={<CovidTrackerWeb />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/hire" element={<HireMe />} />
        <Route path="*" element={<>Nothings here</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
