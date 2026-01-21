import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./register.css"

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const navigate = useNavigate();

  const handleRegister = () => {
    if (!email || !password) {
      alert("All fields required");
      return;
    }

    const userData = { email, password, role };
   //Save User login
    localStorage.setItem("jobfinder_user", JSON.stringify(userData));

    alert("Registration successful");
    navigate("/login");
  };

  return (
    <div className="register-container">
      <h2>Register</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <select onChange={(e) => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

      <button onClick={handleRegister}>Register</button>

      <p>
        Already have account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Register;
