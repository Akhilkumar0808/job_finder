
import React, { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar";
import JobData from "../../JobDummydata";
import JobCard from "../JobCard";
import "./Header.css"

function Header() {
    const navigate =useNavigate();
  const [filters, setFilters] = useState({
    title: "",
    type: "",
    location: "",
    experience: "",
  });

  const [filteredJobs, setFilteredJobs] = useState([]);
   useEffect(()=>{
    setFilteredJobs(JobData);
   },[])
  const handleSearch = () => {
    const results = JobData.filter((job) => {
      return (
        (!filters.title || job.title === filters.title) &&
        (!filters.type || job.type === filters.type) &&
        (!filters.location || job.location === filters.location) &&
        (!filters.experience || job.experience === filters.experience)
      );
    });

    setFilteredJobs(results);
     // 👉 IF NO JOBS FOUND → REDIRECT TO LOGIN
    if (results.length === 0) {
      setTimeout(() => {
        navigate("/login");
      }, 1500); // optional delay for user to see message
    }
  };
  const jobsFromStorage =
  JSON.parse(localStorage.getItem("jobs")) || [];

const results = jobsFromStorage.filter((job) => {
  return (
    (!filters.title || job.title.includes(filters.title)) &&
    (!filters.type || job.type === filters.type) &&
    (!filters.location || job.location === filters.location) &&
    (!filters.experience || job.experience === filters.experience)
  );
});

  return (
    <>
      <div className="hero">
        <h1>Your ideal job awaits, start the search</h1>
        <p>Get latest job openings that best suits you</p>

        <SearchBar
          filters={filters}
          setFilters={setFilters}
          onSearch={handleSearch}
        />
      </div>

      <div className="jobs-list">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <JobCard key={job.id} JobData={job} />
          ))
        ) : (
          <p style={{ textAlign: "center" }}>No jobs found</p>
        )}
      </div>
    </>
  );
}

export default Header;