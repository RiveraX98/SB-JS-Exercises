import React, { useContext } from "react";
import { Card, CardBody, Button } from "reactstrap";
import { Form } from "react-router-dom";
import { UserContext } from "./UserContext";

export const ProfileCard = ({ user }) => {
  // const user = useContext(UserContext);

  return (
    <Card>
      <CardBody>
        <Form method="post" action="/profile">
          <div className="mb-3">
            <label htmlFor="username">Username </label>
            <input
              id="username"
              name="username"
              type="text"
              className="form-control"
              placeholder={user.username}
              disabled
            />
          </div>

          <div className="mb-3">
            <label htmlFor="firstName">First Name </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              className="form-control"
              placeholder={user.firstName}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              className="form-control"
              placeholder={user.lastName}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="text"
              className="form-control"
              placeholder={user.email}
            />
          </div>
          <div className="d-grid">
            <Button className="fw-bold" color="primary">
              Save Changes
            </Button>
          </div>
        </Form>
      </CardBody>
    </Card>
  );
};

// export const EditProfileAction = async ({ request }) => {
//   const data = await request.formData();
//   const submission = {
//     firstName: data.get("firstName"),
//     lastName: data.get("lastName"),
//     email: data.get("email"),
//   };

//   return submission;
// };
