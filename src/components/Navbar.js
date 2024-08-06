import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import styled from 'styled-components';

const Header = styled(Navbar)`
  background-color: #2c3e50;
  padding: 0.75rem 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease-in-out;
  
  &:hover {
    background-color: #34495e;
  }
`;

const NavLink = styled(Nav.Link)`
  color: #ecf0f1 !important;
  font-size: 1.1rem;
  font-weight: 500;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #f39c12 !important;
    transform: scale(1.1);
  }
`;

const Brand = styled(Navbar.Brand)`
  color: #ecf0f1 !important;
  font-size: 1.6rem;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #f39c12 !important;
  }
`;

const CustomNavbar = () => {
  return (
    <Header expand="lg">
      <Container>
        <Brand href="#home">My Portfolio</Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#project">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Header>
  );
};

export default CustomNavbar;
