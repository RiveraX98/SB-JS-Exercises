import React, { useContext } from "react";
// import { Navbar, NavbarBrand, NavItem, Nav, NavLink } from "reactstrap";
import { Navbar, Nav } from "react-bootstrap";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

export const JoblyNavbar = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <Navbar className="shadow bg-body-tertiary">
        <LinkContainer className="ms-3" to="/">
          <Navbar.Brand>Jobly</Navbar.Brand>
        </LinkContainer>
        {user ? (
          <Nav className="ms-auto">
            <LinkContainer to="/companies">
              <Nav.Link>Companies</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/jobs">
              <Nav.Link>Jobs</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/profile">
              <Nav.Link>Profile</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/logout">
              <Nav.Link>Logout</Nav.Link>
            </LinkContainer>
          </Nav>
        ) : (
          <Nav className="ms-auto">
            <LinkContainer to="/signup">
              <Nav.Link>Sign Up</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          </Nav>
        )}
      </Navbar>
    </div>
  );
};
