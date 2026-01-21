import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import JobCard from "../components/JobCard";
import removeOutdatedJobs from "../utils/RemoveOutDatedJobs";
import "./Userhome.css"
const UserHome = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    setJobs(storedJobs);
    setFilteredJobs(storedJobs);
  }, []);
  
useEffect(() => {
  removeOutdatedJobs(30); // remove jobs older than 30 days

  const storedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
  setJobs(storedJobs);
  setFilteredJobs(storedJobs);
}, []);


  return (
    <div className="user-home">
      {/* HEADER */}
      <Header />

      {/* SEARCH BAR */}
      <SearchBar jobs={jobs} setFilteredJobs={setFilteredJobs} />

      {/* JOB PORTAL */}
      <div className="job-section" style={{ padding: "20px" }}>
        <h2 className="job-heading">Available Jobs</h2>

        {filteredJobs.length === 0 ? (
          <p className="no-jobs">No jobs found</p>
        ) : (
         <div className="job-grid">

           {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
         </div> 
          )}
      </div>
    </div>
  );
};

export default UserHome;

