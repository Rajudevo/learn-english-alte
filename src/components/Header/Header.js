import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import img from "../../Images/logo.png";
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
      <div>
      <Navbar className="header" variant='dark'>
      <Container>
        {/* Here Logo and Header Navbar */}
        <Navbar.Brand href='#home'><Link to="/"><img src={img} alt="" /></Link></Navbar.Brand>
        <Nav className='me-50'>
          <Nav.Link><Link to='/home'> Home</Link></Nav.Link>
          <Nav.Link><Link to='/aboutus'>About Us</Link></Nav.Link>
          <Nav.Link><Link to='/service'>Service</Link></Nav.Link>
          <Nav.Link><Link to='/courses'>Explore Courses</Link></Nav.Link>
          
        </Nav>
      </Container>
    </Navbar>
    </div>
    );
};

export default Header;