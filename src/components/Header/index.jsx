
import React from "react";

const Header = () => {
  return (
    <header
      style={{
        padding: "15px",
        background: "#441ef0",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h2>Job Portal</h2>

      <button
        onClick={() => {
          localStorage.removeItem("user");
          window.location.href = "/#/login";
        }}
        style={{ background: "white", color: "#007bff", padding: "5px 10px" }}
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
