import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

function Addproduct() {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const path = window.location.pathname;
  const [choose,setChoose]=useState(false);
  useEffect(() => {
    if (cookies.get("admin") === undefined) {
      navigate("/");
    } else {
      navigate(path);
    }
  }, []);
  const [showCategory, setShowCategrory] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [image, setImage] = useState("");
  const [discount, setDiscount] = useState("");
  const [color, setColor] = useState("");
  const [weigth, setWeigth] = useState(0);
  const [size, setSize] = useState("");

  useEffect(() => {
    category();
  }, []);
  const category = async () => {
    const result = await axios.get("http://localhost:8080/api/category/get");
    //  console.log(result.data.data)
    if (result.status === 200) setShowCategrory(result.data.data);
  };

  async function addProduct(e) {
    e.preventDefault();
    const result = await axios.post("http://localhost:8080/api/product", {
      name,
      price,
      description,
      categoryId,
      image,
      discount,
      color,
      weigth,
      size,
    });
    //  console.log(result.data.data)
    if (result.status === 201) alert("Product Added Successfully");
    else alert("Product Not Added");
  }
  
  async function imageUpload(e) {
    // setImage(URL.createObjectURL(e.target.files[0]))
    const formData = new FormData();
    console.log(e.target.files[0]);
    formData.append("image",e.target.files[0]);

    let result = await fetch("http://localhost:8080/api/product/upload", {
      method:'post',
      body:formData,
      dataType:"jsonp"
    });
    setChoose(true)
    result=await result.json();
    console.log(result);
    setImage(result.data.path);
  }
  return (
    <Layout>
      <form method="post" encType="multipart/form-data" onSubmit={addProduct}>
        <div className="row text">
          <div className="text-center ">
            <h1>
              <u>Add Product</u>
            </h1>
          </div>
          <hr />
          <div className="col-sm-6">
            Product Name
        <input onChange={(e)=>{setName(e.target.value)}} className='form-control' type='text' name='name' required/>
        Discription
        <input onChange={(e)=>{setDescription((e.target.value))}} className='form-control' type='text' name='name' required/>
            price
        <input onChange={(e)=>{setPrice((e.target.value))}} className='form-control' type='number' name='price' required/>
        category
        <select onChange={(e)=>{setCategoryId((e.target.value))}} className='form-control' required >
        <option>select Category</option>
          {showCategory.map((item)=>(
            <option value={item._id}>{item.name}</option>
            ))}
        </select>
        Color
        <input onChange={(e)=>{setColor((e.target.value))}} className='form-control w-25' type='color' name='color'/>
          </div>
          <div className='col-sm-6'>
        Discount
        <input onChange={(e)=>{setDiscount((e.target.value))}} className='form-control' type='text' name='discount' required/>
        weight
        <input onChange={(e)=>{setWeigth((e.target.value))}} className='form-control' type='number' name='weight'/>
        Size
        <input onChange={(e)=>{setSize((e.target.value))}} className='form-control' type='text' name='size  '/>
      
        image
            <input onChange={imageUpload} className="form-control" type="file" name="image" required/> <br />  
      {
          choose?<img src={`http://localhost:8080/`+image} alt="image not found" className="w-25 h-25"  />:
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHh3xq0QcYk0CxXUpm2cjhPGVF_9DYPGDcy4M1yXAi2FKyuxu2FHcgEHr_Og&s' alt="image not found" className="w-25 h-25"  />
       } 
    </div>
          <div className="text-center my-4">
            <hr />
            <button className="btn btn-primary w-25" type="submit">
              Add Product
            </button>
          </div>
        </div>
      </form>
    </Layout>
  );
}

export default Addproduct;
