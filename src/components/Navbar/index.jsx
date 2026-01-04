
import React from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css"

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth"); // or user info
    navigate("/login");
  };

  return (
    <div className="navbar">
      <h2>JobFinder</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Navbar;
