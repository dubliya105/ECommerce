import React, {  useContext, useEffect, useState } from 'react'
import GetCategory from './GetCategory';
import "./Product.css";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import QuantityBtn from './QuantityBtn';
import { counterContext } from "./context/CartContext";


export default function  ShowProducts() {
  const value=useContext(counterContext);

    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState([]);
    const cookies = new Cookies();
    const navigate = new useNavigate();
    const users = cookies.get("user");
    //  const cartLength= createContext(cart.length); 
   
    useEffect(() => { 
      handleGetCart();
      handleGetProduct(); 
    
    }, [count]);
  
    const handleGetProduct = async () => {
      let result = await axios.get("http://localhost:8080/api/product");
      if (result.status === 200) {
        setProducts(result.data.data);
      }
    };
  
    const handleGetCart = async () => {
      if (users !== undefined) {
        let result = await axios.get(
          `http://localhost:8080/api/cart/get/${users._id}`
        );
        if (result.status === 200) {
          setCart(result.data.data);
          value.setCartCount(result.data.data);
          console.log(result.data.data);
        }
      }
    };
  
    const addToCart = async (id) => {
      if (users === undefined) {
        navigate("/");
      } else {  
        let result = await axios.post("http://localhost:8080/api/cart/add", {
          userId: users._id,
          productId: id,
          quantity: 1,
        });
        if (result.status === 201) {
          
          setCount(count + 1);
        }
      }
    };
  
    function checkCart(product_id){
      for(let i=0;i<cart.length;i++){
          if(cart[i].productId===product_id)
            return true;
      }     
      return false;
    }
  
    
  
  return (
    <div>
        <div className=" main">
        <ul className="cards justify-content-between">
          {products.map((product, index) => {
            return (
              <li class="cards_item m-2" key={index}>
                {/* <Link target="_bla  nk"
                  to={"/cart/" + product._id}
                  style={{ textDecoration: "none" }}
                > */}
                <div className="bg-transparent">
                  <div>
                    <div>
                      <div className="card">
                        <img
                          src={"http://localhost:8080/" + product.image}
                          className="card-img-top"
                          alt="Laptop"
                          style={{
                            height: "170px",
                            width: "100%",
                            padding: "12px",
                          }}
                        />
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <p className="small">
                              <a href="#!" className="text-muted">
                                {product.category[0].name}
                              </a>
                            </p>
                            <p className="small text-danger">
                           <span className="" disabled> MRP <s>{' ₹ '+product.price}</s></span><span className='text-danger'>{" ("+product.discount+'%'+" OFF)"}</span>
                            </p>
                          </div>  
                          <div className="d-flex justify-content-between mb-3">
                            <h5 className="mb-0">{product.name}</h5>
                            <span className="fs-6">{' ₹ '+Math.floor(product.price - ( product.price * product.discount) / 100) } </span>

                          </div>
                          <div className="row">
                            <div className="col-sm-6">

                            {
                              checkCart(product._id)? 
                             <QuantityBtn productId={product._id} count={count} setCount={setCount} discount={product.discount}/>
                              :
                              <button className="btn btn-primary" onClick={()=>addToCart(product._id)}>Add to cart</button>
                            }

                              {/* <AddToCart count={count} productId={p 1roduct._id} cartlist={cart} addToCart={addToCart}/> */}
                            </div>
                            <div className="d-flex justify-content-between mb-2 col-sm-6">
                              <p className="text-muted mb-0"></p>
                              <div className="ms-auto text-warning">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                              </div>
                            </div>
                          </div>
                          {/* <Link className='btn btn-primary' to={'/cart/'+product._id} >Add to cart</Link> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* </Link> */}
              </li>
            );
          })}
        </ul>
        <GetCategory/>
      </div>
    </div>
  )
}

