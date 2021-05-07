import React, {useState} from "react";
import { Link } from "react-router-dom";
import Menu from "../../../assets/image/menu.png";
import '../../../css/style.css';

const Navbar = () => {
  
  return (
    <div className="container">
      <div class="head my-3">
      <nav className="navbar navbar-expand-lg navbar-light head__custom-nav">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <span>Contact App</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          alt="Toggle Icon"
        >
        <span><img src={Menu}></img></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <div className="navbar-nav">
            <Link className="nav-link active" to="/">
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