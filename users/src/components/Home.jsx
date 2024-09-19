import React from "react";
import Layout from "./Layout";
import "./Product.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import GetCategory from "./GetCategory";
import Cookies from "universal-cookie";
import Slider from "./Slider";
import ShowProducts from "./ShowProducts";
import Footer from "./Footer";

function Home() {
  return (
    <Layout>
     <Slider/>
      <ShowProducts/>
      <Footer/> 
    </Layout>
  );
}

export default Home;
