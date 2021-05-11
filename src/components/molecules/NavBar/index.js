import React, {useState} from "react";
import { Link } from "react-router-dom";
import Menu from "../../../assets/image/menu.png";
import App from '../../../App.css';

const Navbar = () => {
  
  return (
    <div className="container">
      <div class="head my-3">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand d-flex align-items-center">
          <span>To Do List App</span>
        </a>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <div className="navbar-nav">
            <a className="link1">
            <Link className="nav-link1" to="/">
              Dashboard
            </Link>
            </a>
            <Link className="nav-link2" to="/login">
              Login
            </Link>
            <Link className="nav-link3" to="/register">
              Register
            </Link>
            {/* <Link className="nav-link4" to="/main">
              Main
            </Link> */}
            <Link className="nav-link4" to="/about">
              About
            </Link>
            <div className="animation start-home"></div>
          </div>
        </div>
    </nav>
    </div>
    </div>
  );
};

export default Navbar;