import React,{useState,useEffect} from "react";
import Navbar from '../components/Navbar'
import { isAuthenticated } from '../auth/helper';
import { getUser } from "./helper.js/userapicalls";
import { Link } from "react-router-dom";
import "../assets/styles/Dashboard.css";

const UserDashboard=()=> {
  const userId = isAuthenticated && isAuthenticated().user.id;
  const [user ,setUser]=useState([]);
  const [error,setError]=useState(false);

  const loadUser=()=>{
    getUser(userId)
    .then((data)=>{
      if(data.error){
        setError(data.error);
        console.log(error);
      } else{
        setUser(data);
      }
    });
  };

  useEffect(()=>{
    loadUser();
  },[]);
  return (
    <>
    <Navbar />
    <div className="dashboard-body d-flex justify-content-center">
    <div className=" my-5 " >
        <div className="" style={{paddingLeft:"180px"}}>
          <h1 className=" mb-4 text-light fw-bold " >User Dashboard</h1>
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Welcome, {user.name}</h5>
              <Link to="/edit"><i className="fa fa-edit edit">Edit</i></Link>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Account Information</h5>
              <ul className="">
                <li className="list-group-item">
                  <strong>Name:</strong> {user.name}
                </li>
                <li className="list-group-item">
                  <strong>Email:</strong> {user.email}
                </li>
                <li className="list-group-item">
                  <strong>Phone:</strong> {user.phone}
                </li>
                <li className="list-group-item">
                  <strong>Gender:</strong> {user.gender}
                </li>
                <li className="list-group-item">
                  <strong>Address:</strong> {user.address}
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
    </div>
  </>
  )
}

export default UserDashboard