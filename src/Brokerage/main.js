import React, {useState} from 'react';
import './styles/sidebar.css';
import Logo from './img/logo.png';
import { BsHouseDoorFill } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { GoSettings } from "react-icons/go";

import Project from './project';
import ProjectDetails from './projectDetails';
import Client from './client';
import NewProject from './newproject';
import NewUser from './newuser';
import AllUser from "./alluser";
import Login from "../login";




function Brokerage() {
  const [products, setProjects] = useState(true);
  const [users, setUsers] =  useState(true);

  const location = useLocation();


  return (


      <Routes location={location} key={location.key}>
        <Route path="/project" element={<Project />} />

        <Route path="/project/:id" element={<ProjectDetails />} />

        <Route path="/client/:id" element={<Client />} />

        <Route path="/newproject" element={<NewProject />} />

        <Route path="/newuser" element={<NewUser />} />

        <Route path="/allusers" element={<AllUser />} />
        
        <Route path="/" element={<Login />} />
      </Routes>



  );
}

export default Brokerage;
