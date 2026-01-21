const removeOutdatedJobs = (days = 30) => {
  const jobs = JSON.parse(localStorage.getItem("jobs")) || [];

  const today = new Date();

  const validJobs = jobs.filter((job) => {
    const postedDate = new Date(job.postedOn);
    const diffTime = today - postedDate;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);

    return diffDays <= days;
  });

  localStorage.setItem("jobs", JSON.stringify(validJobs));
  

};

export default removeOutdatedJobs;
