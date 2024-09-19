import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import Layout from './Layout'

function Order() {
  const [order,setOrder]=useState([])
  
  const getOrder=async()=>  
  {
    const response=await axios.get("http://localhost:8080/api/order/get")
       
       if(response.status===200)
       {
        setOrder(response.data.data);
       }
  }

  function cancelOrder()
  {
    alert("The Product Was Cancelled");
  }

 async function updateOrder(id,e) {

  const response=await axios.patch("http://localhost:8080/api/order/"+id,{
    status:e.target.value
  })
  if(response.status===200)
  {
  //  setOrder(response.data.data);
  alert(response.data.msg);
  getOrder();
  }
 }
  useEffect(()=>{
    getOrder();
  },[])
  return (
    <Layout>
    <div style={{marginTop:"9%", marginBottom:"10%"}}>
      <div className="mt-5 h-100">
      <br/>
      <h2><b>Product Order Table </b></h2><br />
      <table className="table table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Order ID</th>
            {/* <th scope="col">User Name</th> */}
            <th scope="col">Image</th>
            <th scope="col">Product Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Total Price</th>
            <th scope="col">Order Date</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
        {
        order.map((val,index)=>{
       return <tr>
            <td>{index+1}</td>
            {/* <td>{val.userData[0].name}</td> */}
            <td><img style={{height:"60px"}} src={"http://localhost:8080/"+val.productData[0].image} alt="image"/></td>
            <td>{val.productData[0].name}</td>
            <td>{val.quantity}</td>
            <td>{val.price}</td>
            <td>{val.totalPrice*val.quantity}</td>
            <td>{val.OrderDate}</td>
            <td>
                <span className="badge-success text-success">
                    <select value={val.status} className='form-control' onChange={(e)=>updateOrder(val._id,e)} >
                        <option value="placed">  placed</option>
                        <option value="shifted"> shifted</option>
                        <option value="deliverd">deliverd</option>
                    </select>
                </span>
            </td>
            <td>
              {/* <button className="btn btn-info btn-sm ">View</button> */}
              {/* <button className="btn btn-warning btn-sm w-50 ">Edit</button> */}
              <button className="btn btn-danger btn-sm mt-2" onClick={()=>{cancelOrder()}}>Cancel</button>
            </td>
          </tr>
        })
        }
        </tbody>
      </table>
    </div>
    </div>
    </Layout>
  )
}

export default Order