/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import "./ShowUsers.css";
import axios from "axios";
function ShowUsers() {
  const [showList, setShowList] = useState([]);
  const [status, setStatus] = useState('');

  useEffect(() => {
    getUser();
  }, []);

  async function updateByIdUser(e,id) { 
    const response = await axios.patch(`http://localhost:8080/api/users/update/${id}`,{
      status:e.target.value
    });
    if(response.status===200){
      getUser();
    }
  }

  async function getUser() {
    const response = await axios.get("http://localhost:8080/api/users/show");
    setShowList(response.data.data);
  }
  return (
    <div>
      <Layout>
        <div>
          <hr />
          <div className="container bootstrap snippets bootdey">
            <div className="row w-100">
              <div className="col-lg-12">
                <div className="main-box no-header clearfix">
                  <div className="main-box-body clearfix">
                    <div className="table-responsive">
                      <table className="table user-list">
                        <thead>
                          <tr>
                            <th>
                              <center><span>User</span></center>
                            </th>
                            <th>
                              <span>Created</span>
                            </th>
                            <th className="text-center">
                              <span>Status</span>
                            </th>
                            <th>
                              <span>Email</span>
                            </th>
                            <th>
                              <span>Address</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {showList.map((user, index) => {
                            return (
                              <tr>
                                <td>
                                  <img
                                    src="https://bootdey.com/img/Content/user_1.jpg"
                                    alt
                                  />
                                  <a style={{textDecoration:'none'}} className="user-link">
                                   {user.name}
                                  </a>
                                  <span className="user-subhead">Member</span>
                                </td>
                                <td>{user.createdAt.split('T')[0]}</td>
                                <td className="text-center">
                                  <span className="label label-default">
                                  <select name="status" value={user.status} className="form-control" onChange={(e)=>updateByIdUser(e,user._id)}>
                                    <option  className="text-success" value={"Active"}> Active</option>
                                    <option className="text-danger" value={"Dactive"}> Dactive</option>
                                  </select>
                                   
                                  </span>
                                </td>
                                <td>
                                  <a href="#">{user.email}</a>
                                </td>
                                <td>{user.address}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default ShowUsers;
