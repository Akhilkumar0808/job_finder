import React from "react";
import "./SerchBar.css";

function SearchBar({ filters, setFilters, onSearch }) {
  return (
    <div className="search-bar">
      <select
        value={filters.title}
        onChange={(e) =>
          setFilters({ ...filters, title: e.target.value })
        }
      >
        <option value="">Job Role</option>
        <option>Frontend Developer</option>
        <option>Backend Developer</option>
        <option>Data Analytics</option>
        <option>Software Engineer</option>
        <option>IT Support</option>
      </select>

      <select
        value={filters.type}
        onChange={(e) =>
          setFilters({ ...filters, type: e.target.value })
        }
      >
        <option value="">Job Type</option>
        <option>Full Time</option>
        <option>Part Time</option>
        <option>Contract</option>
      </select>

      <select
        value={filters.location}
        onChange={(e) =>
          setFilters({ ...filters, location: e.target.value })
        }
      >
        <option value="">Location</option>
        <option>Remote</option>
        <option>In-Office</option>
        <option>Hybrid</option>
      </select>

      <select
        value={filters.experience}
        onChange={(e) =>
          setFilters({ ...filters, experience: e.target.value })
        }
      >
        <option value="">Experience</option>
        <option>Fresher</option>
        <option>Junior Level</option>
        <option>Mid Level</option>
        <option>Senior Level</option>
      </select>

      <button onClick={onSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
