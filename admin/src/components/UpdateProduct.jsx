import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "universal-cookie";

function UpdateProduct() {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const path = window.location.pathname;
  const {id}=useParams();
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
    handleGetById();
    category();
  }, []);

  const category = async () => {
    const result = await axios.get("http://localhost:8080/api/category/get");
    //  console.log(result.data.data)
    if (result.status === 200) setShowCategrory(result.data.data);
  };

  async function handleGetById() {
    const result = await axios.get(`http://localhost:8080/api/product/${id}`);
    if(result.status===200){
    setName(result.data.data.name);
    setPrice(result.data.data.price);
    setDescription(result.data.data.description);
    setCategoryId(result.data.data.categoryId);
    setImage(result.data.data.image);
    setDiscount(result.data.data.discount);
    setColor(result.data.data.color);
    setWeigth(result.data.data.weigth);
    setSize(result.data.data.size);
    setChoose(true);
    }
  }


const handleUpdate=async(e)=>{
  e.preventDefault();
  const result=await axios.patch(`http://localhost:8080/api/product/${id}`,{
    name:name,
    price:price,
    description:description,
    categoryId:categoryId,
    image:image,  
    discount:discount,
    color:color,
    weigth:weigth,
    size:size

    })
    if(result.status===201){
      alert("update success")
    } 
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
      <form method="post" encType="multipart/form-data" onSubmit={handleUpdate} >
        <div className="row text">
          <div className="text-center ">
            <h1>
              <u>Update Product</u>
            </h1>
          </div>
          <hr />
          <div className="col-sm-6">
            Product Name
        <input value={name} onChange={(e)=>{setName(e.target.value)}} className='form-control' type='text' name='name' required/>
        Discription
        <input value={description} onChange={(e)=>{setDescription((e.target.value))}} className='form-control' type='text' name='name' required/>
            price
        <input value={price} onChange={(e)=>{setPrice((e.target.value))}} className='form-control' type='number' name='price' required/>
        category
        <select value={categoryId} onChange={(e)=>{setCategoryId((e.target.value))}} className='form-control' required >
        <option>select Category</option>
          {showCategory.map((item)=>(
            <option value={item._id}>{item.name}</option>
            ))}
        </select>
        Color
        <input value={color} onChange={(e)=>{setColor((e.target.value))}} className='form-control w-25' type='color' name='color'/>
          </div>
          <div className='col-sm-6'>
        Discount
        <input value={discount} onChange={(e)=>{setDiscount((e.target.value))}} className='form-control' type='text' name='discount' required/>
        weight
        <input value={weigth} onChange={(e)=>{setWeigth((e.target.value))}} className='form-control' type='number' name='weight'/>
        Size
        <input value={size} onChange={(e)=>{setSize((e.target.value))}} className='form-control' type='text' name='size  '/>
      
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
            Update Product
            </button>
          </div>
        </div>
      </form>
    </Layout>
  );
}

export default UpdateProduct;
