import React, { useEffect } from "react";
import "./Side.css";
import { FaFacebook, FaFacebookMessenger, FaLinkedin } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const SideBar = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const name =window.location.pathname;
  useEffect(()=>{
    if (cookies.get('admin')===undefined) {
      navigate('/')
    }
    else{
      navigate(name)
    }
  },[])
  return (
    <div className="Side">
      <br />
      <div> 
        <span className="Nam"> E-COMMERCE</span>
      </div>
      <br />
      <br />
      {/* <span style={{ padding: "5px" }}>
        <FaFacebook size={30} color="#1111d2" />
      </span>
      <span style={{ padding: "5px" }}>
        <FaFacebookMessenger size={30} color="#1111d2" />
      </span>
      <span style={{ padding: "5px" }}>
        <FaLinkedin size={30} color="#1111d2" />
      </span> */}
      <br />
      <br />

      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={{ background: "transparent" }}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed "
              style={{ background: "transparent", color: "#0B138A" }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              PRODUCT
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body ">
              <Link className="LinkDesign" to="/addProduct">
                Add Product
              </Link>
              <hr />
              <Link className="LinkDesign" to="/getProduct">
                Show Product
              </Link>
              <hr />
              <hr />
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={{ background: "transparent", marginTop: "10px" }}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={{ background: "transparent", color: "#0B138A" }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              CATEGORY
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <Link className="LinkDesign" to="/addCategory">
                Add Category
              </Link>
              <hr />
              <Link className="LinkDesign" to="/showCategory">
                Show Category
              </Link>
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={{ background: "transparent", marginTop: "10px" }}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={{ background: "transparent", color: "#0B138A" }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Users
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <Link className="LinkDesign" to="/showusers">
                Show 
              </Link>
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={{ background: "transparent", marginTop: "10px" }}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={{ background: "transparent", color: "#0B138A" }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Orders
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <Link className="LinkDesign" to="/showorders">
                Show 
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
