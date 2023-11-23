import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/home";
import Calander from "../pages/Calander/calander";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/calender" exact element={<Calander />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default AppRouter;
