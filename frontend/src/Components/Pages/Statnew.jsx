import {React, useEffect, useState} from 'react'

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';

import MyBarChart from "../Layout/MyBarChart";


export default function Statnew() {

  const [fdsuser, setFdsuser] = useState([]);
  const [ngo, setNgo] = useState([]);
  const [foodreq, setFoodreq] = useState([]);

  useEffect(() => {
      loadFdsusers();
      loadNgos();
      loadFoodreqs();
  }, []);

  const loadFdsusers = async () => {
      const result = await axios.get("http://localhost:8080/getallfdsusers");
      //   console.log(result);
      setFdsuser(result.data);
  };

  const loadNgos = async () => {
      const result = await axios.get("http://localhost:8080/getallngos");
      //   console.log(result);
      setNgo(result.data);
  };

  const loadFoodreqs = async () => {
      const result = await axios.get("http://localhost:8080/getallfoodreqs");
      console.log(result);
      setFoodreq(result.data);
  }




  return (
      <div classNameName="container">
          <div classNameName="py-4">
              <h1>FDS members</h1>
              <table className="table">
                  <thead className="thead-dark">
                      <tr>
                          <th scope="col">#</th>
                          <th scope="col">Username</th>
                          <th scope="col">Name</th>
                          <th scope="col">FDS-ID</th>
                      </tr>
                  </thead>
                  <tbody>
                      {/* {
                          fdsuser.map((fdsuser, index) => (
                              <tr>
                                  <th scope="row" key={index}>{index + 1}</th>
                                  <td>{fdsuser.fdsusername}</td>
                                  <td>{fdsuser.fdsname}</td>
                                  <td>{fdsuser.fdsid}</td>
                              </tr>
                          ))
                      } */}
                            {
                              fdsuser.map((fdsuser, index) => (
                                <tr key={index}>
                                  <th scope="row">{index + 1}</th>
                                  <td>{fdsuser.fdsusername}</td>
                                  <td>{fdsuser.fdsname}</td>
                                  <td>{fdsuser.fdsid}</td>
                                </tr>
                              ))
                            }
                  </tbody>
              </table>
              <h1>NGO's members</h1>
              <table className="table">
                  <thead className="thead-dark">
                      <tr>
                          <th scope="col">#</th>
                          <th scope="col">Username</th>
                          <th scope="col">Name</th>
                          <th scope="col">NGO-ID</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                          ngo.map((ngo, index) => (
                              <tr>
                                  <th scope="row" key={index}>{index + 1}</th>
                                  <td>{ngo.ngousername}</td>
                                  <td>{ngo.ngoname}</td>
                                  <td>{ngo.ngoid}</td>
                              </tr>
                          ))
                      }
                  </tbody>
              </table>

              <h1>Food Requests</h1>
              {/* <pre>{JSON.stringify(foodreq, null, 2)}</pre> */}
              <table className="table">
                  <thead className="thead-dark">
                      <tr>
                          <th scope="col">#</th>
                          <th scope="col">Request ID</th>
                          <th scope="col">FDS-ID</th>
                          <th scope="col">NGO-ID</th>
                          <th scope="col">Date of request</th>
                          <th scope="col">Date of collection</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Days perishable</th>
                          <th scope="col">Type of food</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                          foodreq.map((foodreq, index) => (
                              <tr>
                                  <th scope="row" key={index}>{index + 1}</th>
                                  <td>{foodreq.foodreqid}</td>
                                  <td>{foodreq.fdsuserid}</td>
                                  <td>{foodreq.ngoid}</td>
                                  {/* <td>{foodreq.date_of_req}</td> */}
                                  <td>{new Date(foodreq.date_of_req).toLocaleDateString('en-GB').replace(/\//g, '-')}</td>
                                  <td>{new Date(foodreq.date_of_collection).toLocaleDateString('en-GB').replace(/\//g, '-')}</td>
                                  <td>{foodreq.quantity}</td>
                                  <td>{foodreq.days_perishable}</td>
                                  <td>{foodreq.type_of_food}</td>
                              </tr>
                          ))
                      }

                  </tbody>
              </table>

              <div>
                    <MyBarChart/>
                </div>


          </div>
      </div>
  );
}

