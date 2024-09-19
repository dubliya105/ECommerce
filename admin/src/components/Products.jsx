import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import "./Product.css";
import axios from "axios";
import { Link } from "react-router-dom";
function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    handleGetProduct();
  }, []);
  const handleGetProduct = async () => {
    let result = await axios.get("http://localhost:8080/api/product");
    if (result.status === 200) {
      // result = await result.json();
      setProducts(result.data.data);
      console.log(result.data.data);
    }
  };
  return (
    <Layout>
      <div className=" main">
        <table className="table user-list" style={{overflow:'scroll',height:'20vh'}}>
          <thead>
            <tr>
              <th>
                <span>Image</span>  
              </th>
              <th>
                <span>Name</span>
              </th>
              <th>
                <span>Price</span>
              </th>
              <th>
                <span>Category Names</span>
              </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((val, index) => {
              return (
                <tr>
                  <td>
                    <span className="list-icon">
                      <img
                        style={{ width: "100px", height: "80px" }}
                        src={`http://localhost:8080/${val.image}`}
                        alt=""
                      />
                    </span>
                  </td>

                  <td>{val.name}</td>
                  <td>{val.price}</td>
                  <td>{val.category[0].name}</td>
                  <td style={{ width: "20%" }}>
                    <a href="#" className="table-link">
                      <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x"></i>
                        <i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                    <Link to={'/edit/'+val._id} className="table-link" >
												<span className="fa-stack">
													<i className="fa fa-square fa-stack-2x"></i>
													<i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
												</span>
											</Link>
                    <a className="table-link danger">
                      <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x"></i>
                        <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default Products;
