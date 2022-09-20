import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand, Button } from 'reactstrap';

function header() {
  return (
    <div>
      <Navbar color="dark" className="navbar">
        <NavbarBrand className="navbarbrand">
          <div>
            <img
              className="logo"
              src="https://avatars.githubusercontent.com/u/54360620?v=4"
            />
          </div>
        </NavbarBrand>
        <Button color="dark">
          <NavLink to="/home" className="navlink">
            Home
          </NavLink>
        </Button>
        <Button color="dark">
          <NavLink to="/blog" className="navlink">
            Blog
          </NavLink>
        </Button>
        <Button color="dark">
          <NavLink to="/about" className="navlink">
            About
          </NavLink>
        </Button>
        <Button color="dark">
          <NavLink to="/contact" className="navlink">
            Contact
          </NavLink>
        </Button>
      </Navbar>
    </div>
  );
}

export default header;
