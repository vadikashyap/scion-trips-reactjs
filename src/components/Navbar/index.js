/** @format */

import React from "react";
import { Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import Logo from "../../asset/img/logo.png";
import "./styles.scss";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand='lg' className='navbar py-5' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>
          <img src={Logo} className='logo' alt='Logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'></Nav>
          <Nav>
            <Form className='d-flex'>
              <FormControl
                type='search'
                placeholder='Search'
                className='me-2 searchBar'
                aria-label='Search'
              />
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
