
import React from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

import Login from "./auth/Login";
import ProtectedRoute from "./auth/ProtectedRoute";
import AdminDashboard from "./pages/AdminDashboard";
import UserHome from "./pages/UserHome";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Register from "./pages/Register"
import JobCard from "./components/JobCard";
import SearchBar from "./components/SearchBar";
import { initJobs } from "./utils/initjobs";
import removeOutdatedJobs from "./utils/RemoveOutDatedJobs";


function App() {
  return (
    <HashRouter>
     {/* { <Navbar/> } */}
   <Routes>
    <Route path ="/" element={<Login/>}/>
    {/* <Route path="/" element={<Header/>} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
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
    </HashRouter>
  );
}

export default App;
