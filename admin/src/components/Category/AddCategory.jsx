import React, { useState,useEffect } from "react";
import "./AddCategory.css";
import Layout from "../Layout";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

function AddCategory() {
  const [name,setName]=useState('')
  const [image,setImage]=useState('')
  const [change,setChange]=useState(false)
  const navigate=useNavigate();
  const cookies=new Cookies();
  useEffect(()=>{
    if (cookies.get('admin')===undefined) {
      navigate('/')
    }
    else{
      // navigate(name)
    }
  },[])

  const addCategory=async(e)=>{
    e.preventDefault();
   console.log (image)
    // console.log(e);  
    // console.log(e.target[1].files);
    const response=await axios.post('http://localhost:8080/api/category/add',{
        name,
        image
    })
    if(response.status===201){
        toast.success('Success'); 
        // cookies.set('admin',response.data.data);
        // navigate('/product')
        setChange(false)
    }
    navigate('/showCategory')
  }
  async function imageUpload(e) {
    // setImage(URL.createObjectURL(e.target.files[0]))
    const formData = new FormData();
    console.log(e.target.files[0]);
    formData.append("image",e.target.files[0]);

    let result = await fetch("http://localhost:8080/api/category/upload", {   
      method:'post',
      body:formData,
    });
    setChange(true);
    result=await result.json();
    console.log(result,result.path);
    setImage(result.path);
  }
  return (
    <Layout>  
          <div className="container">
            <div className="text">Add Category </div>
            <form onSubmit={addCategory} >
              <div className="form-row">
                <div className="input-data">
                  <input type="text"  onChange={(e)=>setName(e.target.value)} required />
                  <div className="underline" />
                  <label htmlFor> Category Name</label>
                  image
                  <input onChange={imageUpload} className="form-control" type="file" name="image" required/>
                {change?<img src={'http://localhost:8080/'+image} className="w-25 " alt=" Not Found" />:

                <img  className="w-25"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHh3xq0QcYk0CxXUpm2cjhPGVF_9DYPGDcy4M1yXAi2FKyuxu2FHcgEHr_Og&s" alt="" />
              }
                  <div className="underline" />
                  {/* <label htmlFor> image</label> */}
                </div>
                <div className="submit-btn">
                    <div className="input-data">
                      <div className="inner" />
                      <input type="submit"  />
                      <Toaster/>
                    </div>
                  </div>
              </div>
                  
            </form>
        
      </div>
    </Layout>
  );
}

export default AddCategory;
