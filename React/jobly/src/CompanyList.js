import React, { useEffect, useState } from "react";
import { CompanyCard } from "./CompanyCard";
import { Button } from "reactstrap";
import axios from "axios";
import { v4 as uuid } from "uuid";
import JoblyApi from "./api";

export const CompanyList = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function getCompanies() {
      const res = await JoblyApi.getCompanies();
      setCompanies(res);
    }
    getCompanies();
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
        {companies.map((c) => (
          <CompanyCard name={c.name} desc={c.description} handle={c.handle} />
        ))}
      </div>
    </div>
  );
};
