import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Shelf from "./pages/Shelf";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/shelf" element={<Shelf />}></Route>
    </Routes>
  );
}
