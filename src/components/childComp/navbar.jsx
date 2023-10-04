import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const NavLogo = () => {
  return (
    <div>
      <Navbar data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/public/notess.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top logo-note"
            />{" "}
            Notes App 2023
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavLogo;
