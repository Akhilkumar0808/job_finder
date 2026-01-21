import JobData from "../JobDummydata";

export const initJobs = () => {
  const jobs = localStorage.getItem("jobs");
  if (!jobs) {
    localStorage.setItem("jobs", JSON.stringify(JobData));
  }
};
export default initJobs