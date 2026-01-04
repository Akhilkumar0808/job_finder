
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./auth/Login";
import ProtectedRoute from "./auth/ProtectedRoute";
import AdminDashboard from "./pages/AdminDashboard";
import UserHome from "./pages/UserHome";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Register from "./pages/Register"


function App() {
  return (
    <BrowserRouter>
    {/* <Navbar/> */}
   <Routes>
    <Route path="/" element={<Header/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
         <Route
          path="/user"
          element={
            <ProtectedRoute>
              <UserHome />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* <Route
          path="/home"
          element={
            <ProtectedRoute role="user">
              <UserHome />
            </ProtectedRoute>
          }
        /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
