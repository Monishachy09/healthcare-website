import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import NavLogo from '../../../images/navlogo.png';
import './Header.css';


const Header = () => {
  const {user, logOut} = useAuth();
    return (
        <div className="pb-3">
            <Navbar bg="info" variant="light" fixed="top" collapseOnSelect expand="lg">
    <Container>
    <img src={NavLogo} alt="" />
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end ">
    <Nav.Link as={HashLink} className="text-dark" to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink} className="text-dark" to="/home#services">Services</Nav.Link>
      <Nav.Link as={HashLink} className="text-dark" to="/home#conditions">Conditions</Nav.Link>
      <Nav.Link as={HashLink} className="text-dark" to="/home#about">About Us</Nav.Link>
      {user?.email ?
      <Button onClick={logOut} variant="primary">Logout</Button> :
        <Nav.Link className="text-dark" as={Link} to="/login">Login</Nav.Link>}
      <Navbar.Text className=" ps-3">
        Signed in as: <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>
   
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;