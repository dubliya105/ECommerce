/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useEffect, useState } from "react";
import Layout from "./Layout";
import Cookies from "universal-cookie";
import axios from "axios";
import "./ShowCart.css";
import QuantityBtn from "./QuantityBtn";
import PlaceOrderBtn from "./PlaceOrderBtn";
import { counterContext } from "./context/CartContext";
function ShowCart() {
  const value=useContext(counterContext);

  const [cart, setCart] = useState([]);
  const [allPrice, setAllPrice] = useState(0);
  const cookies = new Cookies();
  const users = cookies.get("user");
  const [count, setCount] = useState(-1);

  useEffect(() => {
    handleGetCart();
  }, [count]);


  
  const handleGetCart = async () => {
    if (users !== undefined) {
      let result = await axios.get(
        `http://localhost:8080/api/cart/cartAndProduct/${users._id}`
      );
      if (result.status === 200) {
        setCart(result.data.data);
        const totalPrice = result.data.data.reduce((acc, item) => {
          return acc + Math.floor(item.price - (item.price * item.productData[0].discount) / 100) * item.quantity;
        }, 0);
        
        setAllPrice(totalPrice);
        value.setCartCount(result.data.data);
      }
    }
  };

 async function addToOrder() {
   cart.map(async(item)=>{

    let result = await axios.post(`http://localhost:8080/api/order/add`,
      {
        userId:item.userId, 
        productId:item. productId,
        quantity:item.quantity
      }
    );
    if (result.status === 201) {
      let result = await axios.delete("http://localhost:8080/api/cart/"+item._id)
     if(result.status===200) 
     setCount(count+1)
    }
   })
   handleGetCart();
  }

  return (
    <Layout>
      <div className="container mt-5 p-3 rounded cart">
        <div className="row no-gutters w-100">
          <div className="col-md-8">
            <div className="product-details mr-2">
              <div className="d-flex flex-row align-items-center">
                <i class="fa fa-long-arrow-left"></i>
                <span class="ml-2">Continue Shopping</span>
              </div>
              <hr />

              <h2 className="mb-0 ">Shopping cart</h2>
              <div className="d-flex justify-content-between">
                <span>You have {cart.length} items in your cart</span>
                <div className="d-flex flex-row align-items-center">
                  <span class="text-black-50">Sort by:</span>
                  <div className="price ml-2">
                    <span class="mr-1 m-3">price</span>
                    <i class="fa fa-angle-down"></i>
                  </div>
                </div>
              </div>
              {cart.length !== 0 ? (
                cart.map((item, index) => {
                  return (
                    <div key={index}>
                      <div className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                        <div class="d-flex flex-row">
                     
                          <img
                            class="rounded"
                            src={
                              "http://localhost:8080/" +
                              item.productData[0].image
                            }
                            width="40"
                            style={{ height: "12%" }}
                          />
                          <div style={{ margin: "20px" }} className="m-9">
                            <span className="font-weight-bold d-block">
                              <h3>{item.productData[0].name}</h3>
                            </span>
                            <span className="spec">
                              <b>
                                <QuantityBtn
                                  productId={item.productId}
                                  count={count}
                                  setCount={setCount}
                                />
                              </b>
                            </span>
                          </div>
                          {/* <div>
                            <span className="font-weight-bold d-block">
                              <h3>₹{item.productData[0].discription }</h3>
                            </span>
                          </div> */}
                        </div>
                        
                        <div className="d-flex flex-row align-items-center">
                          <span class="d-block m-3">{item.quantity}</span>
                          <p className="small text-danger">
                           <span className="position-sticky" disabled> MRP <s>{' ₹ '+item.totalPrice}</s></span><span className='text-danger'>{" ("+item.productData[0].discount+'%'+" OFF)"}</span>
                            </p>
                          <span class="d-block ml-5 font-weight-bold m-2 w-25">
                            <h5>{' ₹ '+Math.floor(item.totalPrice - ( item.totalPrice * item.productData[0].discount) / 100) }</h5>
                          </span> 
                          <i class="fa fa-trash-o ml-3 text-black-50 m-3"></i>
                        </div>
                        <br />
                       
                      </div>
                     
                    </div>
                  );
                })
              ) : (
                <i>
                  <h1 className="m-5"> cart is empty </h1>
                </i>
              )}
            </div>
            <PlaceOrderBtn addToOrder={addToOrder} cart={cart} allPrice={allPrice}/>
          </div>
            
          <div className="col-md-4 pt-4" style={{alignSelf: 'flex-start',position:'sticky',top:"64px"}}>
            <div className="payment-info">
              <div class="d-flex justify-content-between align-items-center">
                <span>Card details</span>
              </div>
              <hr />

              <div>
                <label id="label">Name on card</label>
                <input
                  type="text"
                  className="form-control credit-inputs"
                  placeHolder="Name"
                />
              </div>
              <div>
                <label id="label">Card number</label>
                <input
                  type="text"
                  class="form-control credit-inputs"
                  placeHolder="0000 0000 0000 0000"
                />
              </div>
              <div className="row">
                <div class="col-md-6">
                  <label id="label">Date</label>
                  <input
                    type="text"
                    class="form-control credit-inputs"
                    placeHolder="12/24"
                  />
                </div>
                <div class="col-md-6">
                  <label id="label">CVV</label>
                  <input
                    type="text"
                    class="form-control credit-inputs"
                    placeHolder="342"
                  />
                </div>
              </div>
              <hr className="line" />

              <div
                className="d-flex justify-content-between information"
                style={{ padding: "8px" }}
              >
                <span>Subtotal</span>
                <span>{" ₹ "+allPrice}</span>
              </div>

              <div
                className="d-flex justify-content-between information"
                style={{ padding: "8px" }}
              >
                <span>Shipping</span>
                <span> ₹ 20.00</span>
              </div>

              <div
                className="d-flex justify-content-between information"
                style={{ padding: "8px" }}
              >
                <span>Total(Incl. taxes)</span>
                <span>{' ₹ '+(allPrice+20)}</span>
              </div>

              <button
                className="btn btn-primary btn-block d-flex justify-content-between mt-3"
                type="button"
                style={{ padding: "8px" }}
              >
                <span>{' ₹ '+(allPrice+20)}</span>  
                <span>
                  Checkout<i cla ss="fa fa-long-arrow-right ml-1"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ShowCart;
