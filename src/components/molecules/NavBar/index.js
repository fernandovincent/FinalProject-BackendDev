import React, {useState} from "react";
import { Link } from "react-router-dom";
import Menu from "../../../assets/image/menu.png";
import App from '../../../App.css';

const Navbar = () => {
  
  return (
    <div className="container">
      <div class="head my-3">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <span>Contact App</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">
              Dashboard
            </Link>
            <Link className="nav-link" to="/login">
              Login
            </Link>
            <Link className="nav-link" to="/register">
              Register
            </Link>
            <Link className="nav-link" to="/main">
              Main
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </div>
        </div>
    </nav>
    </div>
    </div>
  );
};

export default Navbar;