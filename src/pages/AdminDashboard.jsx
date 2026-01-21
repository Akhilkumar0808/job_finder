import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import JobCard from "../components/JobCard";
import JobData from "../JobDummydata";
import "./Admin.css"

const AdminDashboard = () => {
  const navigate = useNavigate(); 

  const [jobs, setJobs] = useState(() => {
    return JSON.parse(localStorage.getItem("jobs")) || [];
  });

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    skills:"",
    type: "",
    experience: "",
    joblink:"",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleAddJob = (e) => {
  //   e.preventDefault();

  //   const newJob = {
  //     id: Date.now(),
  //     postedOn: new Date().toISOString().split("T")[0],
  //     ...formData,
    

  //   };

  //   const updatedJobs = [...jobs, newJob];

  //   setJobs(updatedJobs);
  //   localStorage.setItem("jobs", JSON.stringify(updatedJobs));

  //   alert("Job added successfully!");

  //   setFormData({
  //     title: "",
  //     company: "",
  //     location: "",
  //     type: "",
  //     experience: "",
  //   });
  // };
  const handleAddJob = (e) => {
  e.preventDefault();

  const newJob = {
    id: Date.now(),
    postedOn: new Date().toISOString().split("T")[0],
    title: formData.title,
    company: formData.company,
    location: formData.location,
    skills:formData.skills,
    type: formData.type,
    experience: formData.experience,
    joblink: formData.joblink,
    skills: formData.skills
      ? formData.skills.split(",").map(skill => skill.trim())
      : []
  };

  const updatedJobs = [...jobs, newJob];

  setJobs(updatedJobs);
  localStorage.setItem("jobs", JSON.stringify(updatedJobs));

  alert("Job added successfully!");

  setFormData({
    title: "",
    company: "",
    location: "",
    skills: "",
    type: "",
    experience: "",
    joblink: ""
  });
};


  // Logout function
  const handleLogout = () => {
  
    localStorage.removeItem("isAdminLoggedIn"); 
    navigate("/login"); // redirect to User Login page
  };

  return (
    <div className="admin-page">
      <h2 className="admin-title">Admin Dashboard - Add Job</h2>
      
      <button className="logout-btn"
        onClick={handleLogout}
        > Logout
      </button>

      <form className="job-form" onSubmit={handleAddJob} style={{ marginBottom: "20px" }}>
        <input
          name="title"
          placeholder="Job Title"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
        />
        <input
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
        />
        <input
          name="skills"
          placeholder="Skills (comma separated)"
          value={formData.skills}
          onChange={handleChange}
          />

        <input
          name="type"
          placeholder="Job Type"
          value={formData.type}
          onChange={handleChange}
        />
        <input
          name="experience"
          placeholder="Experience"
          value={formData.experience}
          onChange={handleChange}
        />
        <input
          name="joblink"
          placeholder="Job_link"
          value={formData.joblink}
          onChange={handleChange}
        />
        <button type="submit" className="add-job-btn">Add Job</button>
      </form>

      <h3 className="jobs-title">All Jobs</h3>
      <div className="jobs-grid">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
