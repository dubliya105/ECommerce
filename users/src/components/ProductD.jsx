import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import { useParams } from 'react-router-dom'

function ProductD() {
    const [product,setProduct]=useState([]);
    const {id}=useParams();
    useEffect(()=>{
        handleGetById();
        //  console.log(product)
    },[])
    const handleGetById=async()=>{
        let result = await fetch(`http://localhost:8080/api/product/${id}`,{
            method:'GET',
            headers: {'Content-Type': 'application/json'} 
        });
        if (result.status===200) {
            result=await result.json();
            console.log(result.data);   
            setProduct([result.data]);
        }
    }
  return (
    <div>
    <Layout>
    {
        product.map((item,index)=>{
           
            return(
                <div key={index} className="text-center ">
                    <div className="row">
                        <div className="col-md-6 border-end ">
                            <img src={"http://localhost:8080/"+item.image} alt={item.name} className="img-fluid rounded m-2 border border-3 border-dark" style={{width:"60%"}}/>
                            <div className='row'>   
                                <div className='col-sm-6 pt-5'>
                                    <button className="btn btn-success "><i class="bi bi-cart4"></i> Add to Cart</button>
                                </div>
                                <div className='col-sm-6 pt-5'>
                                    <button className="btn" style={{backgroundColor:'#fb641b'}} > <span class="OGrnIL"></span>Buy Now</button>
                                </div>
                            </div>
                        </div>  
                        <div className="col-md-6 text-left">
                        <h6>Name:</h6><h5>{item.name}</h5> <hr />   
                           <h6>Description:</h6><p>{item.description}</p><hr />
                           <h6> price:</h6>
                           <span className="fs-4">{' ₹ '+(item.price - ( item.price * item.discount) / 100)} </span>
                           <span className="fs-5" disabled> MRP <s>{' ₹ '+item.price}</s></span><span className='fs-3 text-danger'>{" ("+item.discount+'%'+" OFF)"}</span>
                           {/* <h6> price:</h6><h3 className="">{' ₹ '+item.price}</h3> */}
                            
                        </div>
                    </div>
                </div>
            )
        })
    }
    </Layout>
    </div>
  )
}

export default ProductD