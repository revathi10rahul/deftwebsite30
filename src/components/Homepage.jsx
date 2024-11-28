import "./Common.css";
import { Col, Row, Container } from "react-bootstrap";
import "./Responsive.css";
import Mobhomepage from "./Mobhomepage";
import Aos from 'aos'
import "aos/dist/aos.css"
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

import Carousel from "react-bootstrap/Carousel";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { useRef ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
function Homepage() {
  const itSolutionsRef = useRef(null);
  const aiSolutionsRef = useRef(null);
  const microservicesSolutionsRef = useRef(null);
  const fintechSolutionsRef = useRef(null);
  const supplychainSolutionsRef = useRef(null);
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSectionsecond = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSectionthird = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSectionfourth = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSectionfifth = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const navigate = useNavigate();
  const handleITConsulting = () => {
    navigate("/itconsulting");
  };
  const handleAisolutions = () => {
    navigate("/aisolutions");
  };
  useEffect(() => {
    Aos.init({duration:2000})
   }, [])
  // const slides = [
  //   {
  //     image: "../../public/Assets/consultant1.png",
  //     title: "Slide 1",
  //     description: "This is the description for slide 1.",
  //   },
  //   {
  //     image: "../../public/Assets/problem\ solving.png",
  //     title: "Slide 2",
  //     description: "This is the description for slide 2.",
  //   },
  //   {
  //     image: "../../Assets/artificial-intelligence.webp",
  //     title: "Slide 3",
  //     description: "This is the description for slide 3.",
  //   },
  // ];


  const handleAboutus=()=>{
    navigate('/aboutus')
  }
  const handleContactus=()=>{
    navigate('/contactus')
  }
  return (
    <div >
      <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
        <Container>
          <Navbar.Brand href="/">
            {" "}
            <img
              src="../../Assets/deft-3.png"
              style={{
                height: "30px",
                width: "auto",
              }}
              alt="DEFT LOGO"
            />
            Deft Lab
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="custom-navbar-toggle me-1"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/"     className="navs-hover text-black">Home</Nav.Link>

              <NavDropdown className="text-black"
               title={<span style={{ color: 'black' }}>Digital Transformation</span>}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item
                  onClick={() => scrollToSection(itSolutionsRef)}
                  className="navs-hover text-black"
                >
                  IT Consulting
                </NavDropdown.Item>
                <NavDropdown.Item
                    className="navs-hover text-black"
                  onClick={() => scrollToSectionsecond(aiSolutionsRef)}
                >
                  Ai Solutions
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() =>
                    scrollToSectionthird(microservicesSolutionsRef)
                  }
                      className="navs-hover text-black"
                >
                  Micro Services
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown   title={<span style={{ color: 'black' }}>Solutions</span>} id="basic-nav-dropdown">
                <NavDropdown.Item
                  onClick={() => scrollToSectionfourth(fintechSolutionsRef)}
                      className="navs-hover text-black"
                >
                  {" "}
                  Fintech
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => scrollToSectionfifth(supplychainSolutionsRef)}    className="navs-hover text-black"
                >
                  Supply Chain
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link onClick={handleAboutus} className="navs-hover text-black">About Us</Nav.Link>
              <Nav.Link onClick={handleContactus} className="navs-hover text-black">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div data-aos="zoom-out-left">
        {/* <Container fluid>
      <Carousel>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <Row className="align-items-center">
              <Col md={6} >
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="d-block w-100"
                />
              </Col>
              <Col md={6}>
                <div>
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                </div>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container> */}
        <Carousel
          indicators={false}
          nextIcon={
            <span
              aria-hidden="true"
              className="carousel-control-next-icon"
              style={{
                filter:
                  "invert(27%) sepia(92%) saturate(7206%) hue-rotate(359deg) brightness(101%) contrast(106%)",
              }}
            />
          }
          prevIcon={
            <span
              aria-hidden="true"
              className="carousel-control-prev-icon"
              style={{
                filter:
                  "invert(27%) sepia(92%) saturate(7206%) hue-rotate(359deg) brightness(101%) contrast(106%)",
              }}
            />
          }
          className="deft-carousel-homepage"
        >
          {/* First Slide */}
          <Carousel.Item style={{ height: "70vh", width: "100%" }}>
            <Row className="align-items-center">
              {/* Content on the Left */}
              <Col lg={6}>
                <Carousel.Caption
                  className="carousel-caption"
                  style={{
                    textAlign: "left",
                    marginBottom: "20vh",
                    marginLeft: "-90px",
                  }}
                >
                  <h3 className="heading-caro1">
                    Tailored IT Strategies and AI Solutions for Smarter,
                    <br /> More Efficient Businesses
                  </h3>
                  <p className="carousel-caption-content">
                    Leverage our tailored IT strategies and AI solutions to
                    drive smarter <br /> decision-making and enhance operational
                    efficiency.
                  </p>
                </Carousel.Caption>
              </Col>
              {/* Image on the Right */}
              {/* <Col lg={6} className="first-img-homepage"></Col> */}
              <Col lg={6} className="first-img-homepage">
                <img
                  src="../../Assets/consultant1.png"
                  alt="FIRST IMAGE"
                  className="homepage-img-seconddiv"
                />
              </Col>
            </Row>
          </Carousel.Item>

          {/* Second Slide */}
          <Carousel.Item style={{ height: "70vh", width: "100%" }}>
            <Row className="align-items-center">
              {/* Content on the Left */}
              <Col lg={6}>
                <Carousel.Caption
                  style={{
                    textAlign: "left",
                    marginBottom: "10vh",
                    marginLeft: "-90px",
                  }}
                >
                  <h3 className="heading-caro1">
                    Revolutionize your operations with cutting-edge AI and IOT{" "}
                    <br /> Technologies.
                  </h3>
                  <p className="carousel-caption-content">
                    Harness AI and IoT to transform operations, optimize
                    processes, improve decisions, <br /> and boost efficiency to
                    stay ahead of competition.
                  </p>
                  {/* <p className="carousel-caption-content">
    
              Our advanced technologies optimize processes, <br /> improve decision-making, and boost overall efficiency.
              </p> */}
                </Carousel.Caption>
              </Col>
              {/* Image on the Right */}
              {/* <Col lg={6} className="second-div-homepage-img"></Col> */}
              <Col lg={6} className="first-img-homepage">
                <img
                  src="../../Assets/aiiot.png"
                  alt="FIRST IMAGE"
                  className="homepage-img-seconddiv"
                />
              </Col>
            </Row>
          </Carousel.Item>

          {/* Third Slide */}
          <Carousel.Item style={{ height: "70vh", width: "100%" }}>
            <Row className="align-items-center">
              {/* Content on the Left */}
              <Col lg={6}>
                <Carousel.Caption
                  style={{
                    textAlign: "left",
                    marginBottom: "10vh",
                    marginLeft: "-90px",
                  }}
                >
                  <h3 className="heading-caro1">
                    Unlock innovative IT solutions and streamline your <br />{" "}
                    operations with our expert consulting services.
                  </h3>
                  <p className="carousel-caption-content-third">
                    Partner with us to unlock the full potential of your
                    technology <br /> and achieve sustainable growth.
                  </p>
                </Carousel.Caption>
              </Col>
              {/* Image on the Right */}
              <Col lg={6} className="first-img-homepage">
                <img
                  src="../../Assets/homepageimg3.png"
                  alt="FIRST IMAGE"
                  className="homepage-img-seconddiv2"
                />
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </div>
      <div ref={itSolutionsRef} className="deft-it-consulting-div"  >
        <Row className="mx-1">
          <Col lg={6} className="second-div2-homepage-img"  >
            {/* <img
              src="../../Assets/problem solving.png"
              alt="Your description"
              className="homepage-img-seconddiv"
            /> */}
          </Col>
          <Col lg={6} className="text-center py-5" data-aos="zoom-in-down">
            {/* Heading */}
            <div className="number">
              <div class="seven">
                <h1>IT CONSULTING</h1>
              </div>
            </div>
            {/* Paragraph */}
            <p className="deft-it-consulting-div-content">
              Our IT consulting services help businesses optimize their
              technology strategies, enhance operational efficiency, and drive
              growth. With tailored solutions, we empower you to navigate
              complex IT challenges, adopt innovative technologies, and stay
              ahead of the competition. Partner with us to unlock the full
              potential of your IT infrastructure and achieve long-term success.
            </p>
            <div class="button-box">
              <button class="deft-twelve" onClick={handleITConsulting}>
                Read More
              </button>
            </div>
          </Col>
        </Row>
      </div>
      <div  
        style={{ height: "70vh", width: "100%", background: "#17193e" }}
        ref={aiSolutionsRef}  
      >
        <Row className="mx-1">
          <Col lg={6} className="py-5" data-aos="zoom-in-down">
            <div className="number">
              <div class="seven">
                <h1>AI SOLUTIONS </h1>
              </div>
            </div>
            {/* Paragraph */}
            <p className="deft-it-consulting-div-content"
              // style={{
              //   color: "white",
              //   fontSize: "1.2rem",
              //   textAlign: "justify",
              //   margin: "20px",
              // }}
            >
              Revolutionize your business with cutting-edge AI solutions. From
              automation to analytics, we deliver tools that boost efficiency,
              improve accuracy, and unlock new opportunities.
            </p>
            <div class="button-box d-flex justify-content-center">
              <button class="deft-twelve" onClick={handleAisolutions}>
                Read More
              </button>
            </div>
          </Col>
          <Col lg={6} className="third-div-homepage-img" data-aos="zoom-in-down">
            <img
              src="../../Assets/artificial-intelligence.webp"
              alt="ARTIFICIAL INTELLIGENCE IMAGE"
              className="homepage-img"
            />
          </Col>
        </Row>
      </div>
      <div  
        ref={microservicesSolutionsRef}
        style={{
          height: "70vh",
          width: "100%",
          background: " #c70039",
        }}
       
      >
        <Row className="mx-1">
          <Col lg={6} className="second-div3-homepage-img" data-aos="zoom-in-down">
            {/* <img
              src="../../Assets/problem solving.png"
              alt="Your description"
              className="homepage-img-seconddiv"
            /> */}
          </Col>
          <Col lg={6} className="text-center py-5" data-aos="zoom-in-down">
            {/* Heading */}
            <div className="number">
              <div class="seven">
                <h1>MICRO SERVICES</h1>
              </div>
            </div>
            {/* Paragraph */}
            <p className="deft-it-consulting-div-content"
              // style={{
              //   color: "white",
              //   fontSize: "1.2rem",
              //   textAlign: "justify",
              //   margin: "20px",
              // }}
            >
              Stay ahead in the digital era with microservices that enhance
              scalability, performance, and operational efficiency. Our expert
              solutions enable seamless integration and innovation, empowering
              your business to evolve and thrive
            </p>
            <div class="button-box d-flex justify-content-center">
              <button class="deft-twelve">Read More</button>
            </div>
          </Col>
        </Row>
      </div>

      <div  
        ref={fintechSolutionsRef}
        style={{ height: "70vh", width: "100%", background: "#0271b1" }}
       
      >
        <Row className="mx-1">
          <Col lg={6} className="text-center py-5" data-aos="zoom-in-down">
            {/* Heading */}
            {/* <h1 className="fs-3" style={{ color: "white" }}>
         Cyber Security
        </h1> */}
            <div className="number">
              <div class="seven">
                <h1>FINTECH</h1>
              </div>
            </div>
            {/* Paragraph */}
            <p 
            className="deft-it-consulting-div-content"
            // className="deft-homepage-sub-div-content"
            >
              Modernize your financial operations with our advanced fintech
              solutions that deliver speed, security, and scalability.By
              integrating innovative tools into your financial ecosystem, you
              can drive efficiency, foster customer trust, and scale your
              operations to meet growing demands.
            </p>
            <div class="button-box d-flex justify-content-center">
              <button class="deft-twelve">Read More</button>
            </div>
          </Col>
          <Col lg={6} className="third-div-homepage-img" data-aos="zoom-in-down">
            <img
              src="../../Assets/fintech.png"
              alt="ARTIFICIAL INTELLIGENCE IMAGE"
              className="homepage-img"
            />
          </Col>
        </Row>
      </div>

      <div   
        ref={supplychainSolutionsRef}
        style={{ height: "70vh", width: "100%", background: "#660066" }}
      >
        <Row className="mx-1">
          <Col lg={6} className="second-div4-homepage-img" data-aos="zoom-in-down">
            {/* <img
              src="../../Assets/problem solving.png"
              alt="Your description"
              className="homepage-img-seconddiv"
            /> */}
          </Col>
          <Col lg={6} className="text-center py-5" data-aos="zoom-in-down">
            {/* Heading */}
            <div className="number">
              <div class="seven">
                <h1>SUPPLY CHAIN </h1>
              </div>
            </div>
            {/* Paragraph */}
            <p 
            className="deft-it-consulting-div-content"
            // className="deft-homepage-sub-div-content"
            >
              Enhance your supply chain with innovative technologies designed
              for agility and precision. Our solutions provide real-time
              insights, seamless integration, and predictive analytics to
              optimize processes and reduce disruptions. Stay competitive with a
              supply chain built for the future.
            </p>
            <div class="button-box d-flex justify-content-center">
              <button class="deft-twelve">Read More</button>
            </div>
          </Col>
        </Row>
      </div>

      {/* <div className="background-container">
        <div className="overlay-image">
          <div className="main-div">
            <div className="left-side">
              <h2>
              Tailored IT Strategies and AI Solutions for Smarter, 
              <br />
              More Efficient Businesses <br />
              </h2>
            </div>
            <div>
              <h4>
                Constantly, we welcome change and generate value for all our
                stakeholders
              </h4>
              <p className="para-homepage fs-5"  style={{ textAlign: "justify",color:'black' }}>
                We fuse technology with human ingenuity to tackle the world's
                most significant challenges. Partnering with us opens up
                limitless possibilities.
              </p>
            </div>

            <div className="click-here">
              <p>Click here</p>
            </div>
          </div>
        </div>
      </div> */}

      {/* -----------sec div homepage--------------- */}

      {/* <div className="sec-div-homepage">
        <Row className="no-scroll-row">
          <Col lg={6}>
            <div className="image-container">
              <div className="img-wrapper hover-zoom">
                <img src="../../Assets/multi.jpg" alt="Yard 1" />
              </div>
              <div className="image-overlay">
                <h1 className="image-overlay-content">IT CONSULTING</h1>
                <p className="image-overlay-content-paragraph">
                Transform your business with expert IT consulting services tailored to meet your unique needs. From strategic planning to seamless implementation, we deliver cutting-edge technology solutions to optimize operations, enhance efficiency, and drive growth. Partner with us to unlock the full potential of your business with reliable, scalable, and future-ready IT strategies. Let’s build the future together!

                </p>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="image-container">
              <div className="img-wrapper hover-zoom">
                <img src="../../Assets/yard.jpeg" alt="Yard 1" />
              </div>
              <div className="image-overlay">
                <h1 className="image-overlay-content">MICRO SERVICES</h1>
                <p className="image-overlay-content-paragraph">
                We deliver and implement containerized, migration-focused architectures that are flexible and fault-tolerant. Our expert team works closely with you to break down large, complex monolithic applications into multiple microservices, enabling seamless daily integration and deployment. Adopting microservices improves system performance, reduces downtime, and accelerates time to market, helping your business adapt more quickly to changes in the digital landscape.

                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div> */}

      {/* =================THIRD DIV===================== */}

      {/* <div className="sec-div-homepage">
        <Row className="no-scroll-row">
          <Col lg={6}>
            <div className="image-container">
              <div className="img-wrapper hover-zoom">
                <img src="../../Assets/multi.jpg" alt="Yard 1" />
              </div>
              <div className="image-overlay">
                <h1 className="image-overlay-content">CYBER SECURITY</h1>
                <p className="image-overlay-content-paragraph">
                Our cybersecurity strategy is proactive, comprehensive, and adaptable. We begin by thoroughly assessing the company's security posture, identifying vulnerabilities and potential threats. Based on the findings, we develop a tailored solution that includes proactive, investigative, and reactive measures to mitigate risks and enhance resilience.

                </p>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="image-container">
              <div className="img-wrapper hover-zoom">
                <img src="../../Assets/yard.jpeg" alt="Yard 1" />
              </div>
              <div className="image-overlay">
                <h1 className="image-overlay-content">AI SOLUTIONS</h1>
                <p className="image-overlay-content-paragraph">
                At Deft lab, we specialize in delivering innovative IT consulting solutions that empower businesses to thrive in the digital age. Whether you’re looking to streamline operations, enhance security, or embrace cutting-edge technologies, we are here to guide you every step of the way.

                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div> */}
    </div>
  );
}

export default Homepage;
