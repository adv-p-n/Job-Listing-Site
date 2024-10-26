import React, { useEffect, useState } from "react";
import JobList from "./JobList";
import Spinner from "./Spinner";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl= isHome ? "/api/jobs?_limit=3" :"/api/jobs";

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error Occoured", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <>
            <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
              {isHome ? "Recent Jobs" : "Browse Jobs"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job) => {
                return <JobList key={job.id} job={job} />;
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default JobListings;
