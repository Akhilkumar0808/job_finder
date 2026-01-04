import React from "react";
import dayjs from "dayjs";
import "./JobCard.css";

function JobCard({JobData}) {


  const today = dayjs();
  const diffInDays = today.diff(dayjs(JobData.postedOn), "day");

  return (
    <div className="job-card">
      
      {/* LEFT SIDE */}
      <div className="job-left">
        <h3>{JobData.title} - {JobData.company}</h3>
        <p className="job-info">
          {JobData.type} . {JobData.experience} . {JobData.location}
        </p>

        <div className="skills">
          {JobData.skills.map((skill,index) => (
            <span className="skill" key={index}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="job-right">
        <p className="posted">
          Posted {diffInDays} days ago
        </p>
        <a href={JobData.job_link}>

        <button className="apply-btn">Apply</button>
        </a>
      </div>
      

    </div>
  );
}

export default JobCard;

