import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import icon from "../../../images/blog.png"

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg  navbar-light sticky-top t-0 nav-bg">
      <div class="container-fluid">
        <h3><img style={{ width: '30px' }} src={icon} alt="" /><span className="text-white">BlogNet</span></h3>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">
          <ul class="navbar-nav ml-auto ">

            <li class="nav-item mr-5 fw-bold nav-hover">
              <Link class="nav-link text-white" to="/home">Home</Link>
            </li>
            <li class="nav-item mr-5 fw-bold nav-hover">
              <Link class="nav-link text-white" to="/about">About</Link>
            </li>
            <li class="nav-item mr-5 fw-bold nav-hover">
              <a class="nav-link text-white" href="#blog">Blogs</a>
              {/* <Link class="nav-link text-white">Blogs</Link> */}
            </li>
            <li class="nav-item mr-5 fw-bold nav-hover">
              <Link class="nav-link text-white" to="/admin">Admin</Link>
            </li>

            <li class="nav-item mr-5 fw-bold nav-hover">
              <Link class="nav-link text-white" to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;