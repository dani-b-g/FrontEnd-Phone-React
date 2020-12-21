import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import Button from "react-bootstrap/Button";
// import FormControl from "react-bootstrap/FormControl";
// import Form from "react-bootstrap/Form";

const header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Phone-App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default header;
