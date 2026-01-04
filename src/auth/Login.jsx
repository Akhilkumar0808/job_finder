import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("jobfinder_user"));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      localStorage.setItem("isLoggedIn", "true");

      if (storedUser.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/user");
      }
    } else {
      alert("Invalid credentials");
    }
  };
//   localStorage.setItem(
//   "auth",
//   JSON.stringify({ role: "admin", loggedIn: true })
// );


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
