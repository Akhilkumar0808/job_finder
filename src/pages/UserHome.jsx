import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "./Userhome.css"

function UserHome() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
   <div>
<div className="user-home">
      <h2>User Dashboard</h2>
      <p>Welcome! You can search and apply for jobs here.</p>
    </div>
    <div className="user-top">
      <h1>User Job Finder</h1>
      <p>Search and apply for jobs</p>
      <button onClick={logout}>Logout</button>
      <Header/>
    </div>
    <div>

    </div>
   </div>
  );
}

export default UserHome;

