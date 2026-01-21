import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const auth = JSON.parse(localStorage.getItem("auth"));

  // Not logged in
  if (!auth || !auth.isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // Role mismatch (admin trying to access user or vice versa)
  if (role && auth.role !== role) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;


