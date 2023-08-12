import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Sign from "../pages/Sign";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import EditUser from "../pages/EditUser";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Sign />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/editUser/:id" element={<EditUser />} />
    </Routes>
  );
};

export default CustomRoutes;
