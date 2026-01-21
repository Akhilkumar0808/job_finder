import React, { useState } from "react";
import "./SerchBar.css"

const SearchBar = ({ jobs, setFilteredJobs }) => {
  const [keyword, setKeyword] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setKeyword(value);

    const filtered = jobs.filter((job) =>
      job.title.toLowerCase().includes(value.toLowerCase()) ||
      job.location.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredJobs(filtered);
  };

  return (
    <div className="search-container"
     style={{ padding: "15px", background: "#f4f6f8" }}>
      <input
        type="text"
        className="search-input"
        placeholder="Search jobs by title or location..."
        value={keyword}
        onChange={handleSearch}
        style={{ width: "100%", padding: "10px" }}
      />
    </div>
  );
};

export default SearchBar;


