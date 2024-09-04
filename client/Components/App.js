import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home/Home";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<div>Test page</div>} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </div>
  );
};
