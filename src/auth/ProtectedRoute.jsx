
import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, role }) {
  const auth = JSON.parse(localStorage.getItem("auth"));

  if (!auth || !auth.loggedIn) {
    return <Navigate to="/login" />;
  }

  if (role && auth.role !== role) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;


