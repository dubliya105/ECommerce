import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import "./Nav.css";
import logo from "./image/logo.png";
import CartQuant from "./CartQuant";

function Navbar() {
  const cookies = new Cookies();
  const users = cookies.get("user");
  // const [count,setCount]=useState(-1)
 
  
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-l  ight fixed-top  ">
        <img
          src={logo}
          alt="logo"
          width="80px"
          height="50px"
          className="rounded-5 ml-5"
        />
        <div className="row w-50 pl-4">
          <div className="col-sm-8">
            <input
              class="form-control me-2 w-100"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
          <div className="col-sm-3">
            <button class="btn btn-outline-success w-100" type="submit">
              Search
            </button>
          </div>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto p-2">
            <li class="nav-item active">
              <Link class="nav-link" to="/Home">
                Home <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/About">
                About us
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Contact">
                Contact
              </Link>
            </li>
            <li class="nav-item">
              {/* <Link class="nav-link" to="/">Login </Link> */}
              {users === undefined ? (
                <Link class="nav-link" to="/">
                  Login
                </Link>
              ) : (
                <Link
                  to="/"
                  class="nav-link"
                  onClick={() => cookies.remove("user")}
                >
                  Logout
                </Link>
              )}
            </li>
            <li class="nav-item">
               {users === undefined?
                 <Link class="nav-link" to="/signup">
                      SignUp
                 </Link>:""
                }
            </li>
            <li class="nav-item" >
              <Link class="nav-link " to="/cartshow">
                <CartQuant/>
              </Link> 
            </li> 
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
