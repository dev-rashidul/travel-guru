import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import logo from "../../images/logo.png";
import './DashboardLayout.css';

const DashboardLyout = () => {

  // Mobile Menu State
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      <div className="dashboard-layout">
        <div className="mobile-menu d-flex justify-content-between">
          <Link><Image src={logo}></Image>Travel<span>Guru</span></Link>
          <span onClick={()=> setIsOpen(!isOpen)}><HiBars3CenterLeft></HiBars3CenterLeft></span>
        </div>
        <div className="dashboard-wrapper">
          <div id="Sidebar">
            <Sidebar isOpen={isOpen}></Sidebar>
          </div>
          <div id="Content">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLyout;
