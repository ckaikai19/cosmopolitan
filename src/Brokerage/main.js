import React from "react";
import "./styles/sidebar.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Project from "./project";
import ProjectDetails from "./projectDetails";
import Client from "./client";
import NewProject from "./newproject";
import NewUser from "./newuser";
import AllUser from "./alluser";
import Login from "../login";
import { AuthContextProvider } from "./AuthContextProvider";
import ProtectedRoute from "./ProtectedRoutes";
import { AnimatePresence } from "framer-motion";

function Brokerage() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <AuthContextProvider>
        <Routes location={location} key={location.key}>
            <Route path="/" element={<Login />} />
            <Route path="/project" element={<ProtectedRoute><Project /></ProtectedRoute>} />
            <Route path="/project/:id" element={<ProtectedRoute><ProjectDetails /></ProtectedRoute>} />
            <Route path="/project/:pid/client/:id" element={<ProtectedRoute><Client /></ProtectedRoute>} />
            <Route path="/newproject" element={<ProtectedRoute><NewProject /></ProtectedRoute>} />
            <Route path="/newuser" element={<ProtectedRoute><NewUser /></ProtectedRoute>} />
            <Route path="/allusers" element={<ProtectedRoute><AllUser /></ProtectedRoute>} />
        </Routes>
      </AuthContextProvider>
    </AnimatePresence>
  );
}

export default Brokerage;
