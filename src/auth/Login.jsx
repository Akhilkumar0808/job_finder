import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css"

function Login() {
  const navigate =useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("jobfinder_user"));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      // localStorage.setItem(
      //   "isLoggedIn", "true");
      // localStorage.setItem("role",storedUser.role);
       localStorage.setItem(
      "auth",
      JSON.stringify({
        isLoggedIn: true,
        role: storedUser.role,
        email: storedUser.email,
      })
    );
    

      if (storedUser.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/user");
      }
    } else {
      alert("Invalid credentials");
    }
  
  };
 
   return (
    <div className="login-container">
      <h2>Login</h2>

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

      <button onClick={handleLogin}>Login</button>

      <p>
        New user? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;
