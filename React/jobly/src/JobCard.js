import React from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import JoblyApi from "./api";

export const JobCard = ({ title, salary, equity, company }) => {
  // async function apply() {
  //   const res = await JoblyApi.apply(username, jobId);
  // }

  return (
    <div className="mb-3">
      <Card>
        <CardBody>
          <CardTitle tag="h6">{title}</CardTitle>
          <CardText>{company}</CardText>

          <div>
            <small>Salary: {salary}</small>
          </div>
          <div>
            <small>Equity: {equity}</small>
          </div>

          <div className="float-end">
            <Button className="fw-bold" color="danger">
              APPLY
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
