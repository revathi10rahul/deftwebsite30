import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function BasicExample() {
  const itSolutionsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const navigate=useNavigate()
  const handlleITCosulting=()=>{
    navigate('/itconsulting')

  }
  const handleAISolutions=()=>{
    navigate('/aisolutions')
  }
  const handleMicroservices=()=>{
    navigate('/microservices')
  }
  const handleAboutus=()=>{
    navigate('/aboutus')
  }
  const handleContactus=()=>{
    navigate('/contactus')
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top" >
      <Container>
        <Navbar.Brand href="/"> <img src="../../Assets/deft-3.png"  style={{
      height: '30px',
      width: 'auto', 
    }}  alt="DEFT LOGO" />Deft Lab</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-navbar-toggle" />
    <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="navs-hover text-black">Home</Nav.Link>

            <NavDropdown   title={<span style={{ color: 'black' }} className="navs-hover text-black">Digital Transformation</span>} id="basic-nav-dropdown">
              <NavDropdown.Item  onClick={handlleITCosulting} className="navs-hover text-black">IT Consulting</NavDropdown.Item>
              <NavDropdown.Item  onClick={handleAISolutions} className="navs-hover text-black">AI Solutions</NavDropdown.Item>
              <NavDropdown.Item  onClick={handleMicroservices} className="navs-hover text-black">Micro Services</NavDropdown.Item>

            </NavDropdown>
            <NavDropdown   title={<span style={{ color: 'black' }} className="navs-hover text-black">Solutions</span>} id="basic-nav-dropdown">
              <NavDropdown.Item href="/supplychain" className="navs-hover text-black">Supply Chain </NavDropdown.Item>
              <NavDropdown.Item href="/fintech" className="navs-hover text-black">Fintech</NavDropdown.Item>
            </NavDropdown>
         
            <Nav.Link  onClick={handleAboutus} className="navs-hover text-black">About Us</Nav.Link>
            <Nav.Link  onClick={handleContactus} className="navs-hover text-black">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
