import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import axios from "axios";

function ShowList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    showCategory();
  }, []);

  const showCategory = async () => {
    let result = await axios.get("http://localhost:8080/api/category/get");
    if (result.status === 200) {
      // result=await result.json();
      setData(result.data.data);
    }
  };

  const deleteCategory = async (id) => {
    if (window.confirm("are you sure delete")) {
      let result = await axios.delete(
        "http://localhost:8080/api/category/delete/" + id
      );
      if (result.status === 200) {
        showCategory();
      }
    }
  };

  return (
    <Layout>
      <div>
        <table className="table user-list">
          <thead>
            <tr>
              <th>
                <span>Category Image</span>
              </th>
              <th>
                <span>Category Name</span>
              </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((val, index) => {
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
                  <td style={{ width: "20%" }}>
                    <a href="#" className="table-link">
                      <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x"></i>
                        <i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                    <a className="table-link">
                      <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x"></i>
                        <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                    <a
                      className="table-link danger"
                      onClick={() => deleteCategory(val._id)}
                    >
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

export default ShowList;
