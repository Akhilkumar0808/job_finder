import React from "react";
import JobData from "../../JobDummydata";
import "./JobCard.css"

const JobCard = ({ job }) => {
  return (
    <div className="job-card" style={styles.card}>
      <div className="job-header">
      <h2 className="job-title">{job.title}</h2>
      <span className="job-type">{job.type}</span>
      </div>

      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Type:</strong> {job.type}</p>
      <p><strong>Experience:</strong> {job.experience}</p>
      <p><strong>Posted On:</strong> {job.postedOn}</p>

      <div className="skills-section">
        <strong>Skills:</strong>
 <div className="skills-container">
             {Array.isArray(job.skills) &&  job.skills.length>0?(
  job.skills.map((skill, index) => (
    <span className="skill-badge" key={index}>
      {skill}
    </span>
  ))
   ):( 
    <span className="no-skills">Not Specified</span>      
  )}
      </div>

        
      </div>

      <a
        href={job.job_link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button style={styles.button}>Apply Now</button>
      </a>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "6px",
    backgroundColor: "#fff",
  },
  button: {
    marginTop: "10px",
    padding: "10px 15px",
    backgroundColor: "#007bff",
    color: "#fff",
  },
};

export default JobCard;
