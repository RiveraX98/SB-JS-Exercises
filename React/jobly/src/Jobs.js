import React, { useEffect, useState } from "react";
import { JobCard } from "./JobCard";
import { Button } from "reactstrap";
import JoblyApi from "./api";
export const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    async function getJobs() {
      const res = await JoblyApi.getJobs();
      setJobs(res);
    }
    getJobs();
  }, []);

  return (
    <div className="mt-5">
      <div className="col-8 offset-md-2">
        <div className="mb-4">
          <form>
            <div className="row justify-content-start gx-0">
              <div className="col-8">
                <input
                  className="form-control form-control-lg"
                  name="searchTerm"
                  placeholder="Enter search term.."
                />
              </div>
              <div className="col-auto">
                <Button color="primary" size="lg">
                  Search
                </Button>
              </div>
            </div>
          </form>
        </div>
        {jobs.map((job) => (
          <JobCard
            salary={job.salary}
            equity={job.equity}
            title={job.title}
            company={job.companyName}
          />
        ))}
      </div>
    </div>
  );
};
