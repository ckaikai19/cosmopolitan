import React from 'react';
import Brokerage from './Brokerage/main';
import "./App.css";
import Login from './login';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import
import { Outlet } from "react-router-dom";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


function App() {

  //  const location = useLocation();

  return (
    <div className="outer-most-container">
      <Brokerage />
      <ToastContainer
        position="top-right"
        autoClose={4581}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
