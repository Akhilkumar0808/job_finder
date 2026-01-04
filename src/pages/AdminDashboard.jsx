import React, { useState } from "react";
import "./Admin.css"

function AdminDashboard() {
  const [job, setJob] = useState({
    title: "",
    company: "",
    type: "",
    location: "",
    experience: "",
    skills: "",
    job_link: "",
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleAddJob = () => {
    const existingJobs =
      JSON.parse(localStorage.getItem("jobs")) || [];

    const newJob = {
      ...job,
      id: Date.now(),
      postedOn: new Date().toISOString().split("T")[0],
      skills: job.skills.split(","),
    };

    localStorage.setItem(
      "jobs",
      JSON.stringify([...existingJobs, newJob])
    );

    alert("Job added successfully ✅");

    setJob({
      title: "",
      company: "",
      type: "",
      location: "",
      experience: "",
      skills: "",
      job_link: "",
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Dashboard - Add Job</h2>

      <input name="title" placeholder="Job Title" value={job.title} onChange={handleChange} />
      <input name="company" placeholder="Company" value={job.company} onChange={handleChange} />

      <select name="type" value={job.type} onChange={handleChange}>
        <option value="">Job Type</option>
        <option>Full Time</option>
        <option>Part Time</option>
        <option>Contract</option>
      </select>

      <select name="location" value={job.location} onChange={handleChange}>
        <option value="">Location</option>
        <option>Remote</option>
        <option>In-Office</option>
        <option>Hybrid</option>
      </select>

      <select name="experience" value={job.experience} onChange={handleChange}>
        <option value="">Experience</option>
        <option>Fresher</option>
        <option>Junior Level</option>
        <option>Mid Level</option>
        <option>Senior Level</option>
      </select>

      <input
        name="skills"
        placeholder="Skills (comma separated)"
        value={job.skills}
        onChange={handleChange}
      />

      <input
        name="job_link"
        placeholder="Job Apply Link"
        value={job.job_link}
        onChange={handleChange}
      />

      <button onClick={handleAddJob}>Add Job</button>
    </div>
  );
}

export default AdminDashboard;
