import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { JobCard } from "./JobCard";
import JoblyApi from "./api";

export const CompanyDetails = () => {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    async function getCompany() {
      const res = await JoblyApi.getCompany(handle);
      setCompany(res);
    }
    getCompany();
  }, []);

  return (
    <div>
      {company ? (
        <div className="mt-5">
          <div className="col-8 offset-md-2">
            <div>
              <h4 className="title">{company.name}</h4>
              <p className="title">{company.description}</p>
            </div>

            {company.jobs.map((job) => (
              <JobCard
                salary={job.salary}
                equity={job.equity}
                title={job.title}
              />
            ))}
          </div>
        </div>
      ) : (
        <h1>"Loading..."</h1>
      )}
    </div>
  );
};
