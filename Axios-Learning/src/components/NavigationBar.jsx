import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { ImUser } from "react-icons/im";

function NavigationBar() {
  return (
    <Navbar bg="secondary"  expand="md" data-bs-theme='dark'>
      <Container>
        <Navbar.Brand href="#home">Social Media</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Posts</Nav.Link>
            {/* <Nav.Item><ImUser /></Nav.Item> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
