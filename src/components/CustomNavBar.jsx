import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../utils/styles/CustomNavBar.css'; // Importar el archivo CSS

export const CustomNavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/#">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
            />
          </svg>{' '}
          Martinez Lopez Gael Ricardo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/#" className={window.location.hash === '/' ? 'active' : ''}>Inicio</Nav.Link>
            <Nav.Link href="#section1" className={window.location.hash === '/section1' ? 'active' : ''}>Seccion 1</Nav.Link>
            <Nav.Link href="#section2" className={window.location.hash === '/section2' ? 'active' : ''}>Seccion 2</Nav.Link>
            <Nav.Link href="#section3" className={window.location.hash === '/section3' ? 'active' : ''}>Seccion 3</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
