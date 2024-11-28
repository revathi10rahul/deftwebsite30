import React, { useState ,useEffect} from "react";
import CircleLinks from "./Circlelinks";
import MobCirclelink from "./MobCirclelink";
import Commonnavbar from "../CommonNavbar/Commonnavbar";
import { Col, Container, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Aos from 'aos'
import "aos/dist/aos.css"
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";


function ITConsulting() {
    useEffect(() => {
    Aos.init({duration:2000})
    }, [])
  
  const [hoveredSide, setHoveredSide] = useState(null);

  const handleMouseEnter = (side) => {
    setHoveredSide(side);
  };

  const handleMouseLeave = () => {
    setHoveredSide(null);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showsecond, setShowsecond] = useState(false);

  const handleClosesecond = () => setShowsecond(false);
  const handleShowsecond = () => setShowsecond(true);
  const [showthird, setShowthird] = useState(false);

  const handleClosethird = () => setShowthird(false);
  const handleShowthird = () => setShowthird(true);
  const [showfourth, setShowfourth] = useState(false);

  const handleClosefourth = () => setShowfourth(false);
  const handleShowfourth = () => setShowfourth(true);

  const [showfifth, setShowfifth] = useState(false);

  const handleClosefifth = () => setShowfifth(false);
  const handleShowfifth = () => setShowfifth(true);

  return (
    <div>
      <Commonnavbar />
      <div style={{ height: "15vh" }}></div>
      {/* <div class="twelve" >
  <h1 class='it-consulting-heading' data-aos="zoom-in-down">AI SOLUTIONS</h1>
</div> */}
      {/* <div class="box">
	<h2 class="ribbon expand"><span>IT CONSULTING</span></h2>
</div> */}
      
   
      <div className="deft-aisolution-maindiv">
      <div class="circle-1" data-aos="zoom-in-down">
        <h2>AI - IOT</h2>
        <h6>( Artificial Intelligence & Internet of Things )</h6>
  {/* <p>By leveraging AI-powered language processing, we streamline the analysis and summarization of legal documents, enabling faster, more accurate decision-making. Whether it’s contract review or case law research, our SLM with AI boosts productivity, reduces manual effort, and enhances legal accuracy for your business.</p> */}
</div>

<div class="circle-2" data-aos="zoom-in">
  {/* <p>Suspendisse eros augue, </p> */}
  <h1>
  Cognitive Computing Solutions
</h1>

  {/* <div class="twelve">
        <h1 class="it-consulting-heading" data-aos="zoom-in-down">AI SOLUTIONS</h1>
      </div> */}
</div>

<div class="circle-3" data-aos="zoom-in-down">
  <h2> M2M</h2>

  <h6>(Machine To Machine)</h6>
  {/* <p>Combine the power of Robotic Process Automation (RPA) and AI to streamline workflows and enhance decision-making. Our AI-driven RPA solutions automate repetitive tasks while continuously learning and adapting to improve accuracy and efficiency.</p> */}
</div>
      </div>
      
      <div 
      // class="custom-root" 
   >
        <div class="it-consulting-landing-div" >
          <div class="grid-it-consulting-landing-div" >
            <div style={{ height: "10vh" }}></div>
            <div   class="figure-1"  >
              <img  
                src="../../Assets/supplysolutions.png"
                alt="Picture of Picasso"
              />
            </div>

            <article class="picasso-1"  >
              {/* <h1>IT CONSULTING</h1> */}
              <p className="fs-5">
                <b> At Deft lab,</b> we specialize in IT consulting services that integrate cutting-edge technologies like Artificial Intelligence (AI) and Small Language Models (SLMs) to revolutionize your business operations. Our expert team works closely with you to understand your goals and challenges, developing tailored strategies that improve efficiency, foster innovation, and drive growth. With our deep understanding of AI, we help businesses harness the potential of intelligent systems to optimize processes, enhance decision-making, and stay ahead of the competition.{" "}
              </p>
            </article>
          </div>
        </div>

<Container>
<Row>
  <Col lg={6}>
  <div   class="figure-1"  >
              <img  
                src="../../Assets/supplysolutions.png"
                alt="Picture of Picasso"
              />
            </div>
  </Col>
  <Col lg={6}>
  <article class="picasso-1"  >
              {/* <h1>IT CONSULTING</h1> */}
              <p className="fs-5">
                <b> At Deft lab,</b> we specialize in IT consulting services that integrate cutting-edge technologies like Artificial Intelligence (AI) and Small Language Models (SLMs) to revolutionize your business operations. Our expert team works closely with you to understand your goals and challenges, developing tailored strategies that improve efficiency, foster innovation, and drive growth. With our deep understanding of AI, we help businesses harness the potential of intelligent systems to optimize processes, enhance decision-making, and stay ahead of the competition.{" "}
              </p>
            </article>
  </Col>
</Row>
</Container>
        {/* <div class="it-consulting-landing-div" >
          <div class="grid-it-consulting-landing-div" >
           
          

            
          </div>
        </div> */}
      </div>

      <Container fluid>
        <Row >
          <Col  lg={6} style={{ background: "#550000" }}>
            <img
              src="../../Assets/problem solving.png"
              alt="Your description"
              className="homepage-img-seconddiv"
            />
          </Col>
          <Col  lg={6} className="bg-light">
            <div style={{ padding: "20px", margin: "20px 40px" }}>
              <h2 className="itconsulting-heading ">
                AI Solutions for Smarter Business Decisions and Efficiency
              </h2>
              <p className="fs-4">
                {" "}
                At Deft lab, we offer IT consulting services that integrate
                Artificial Intelligence (AI) to streamline your business
                operations. Our AI-powered solutions help businesses enhance
                decision-making, automate processes, and optimize workflows.
                Whether it’s improving customer experience, predictive
                analytics, or data-driven insights, we help you leverage AI to
                stay competitive and drive innovation across industries{" "}
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <div style={{ height: "8vh" }}></div>
   
    </div>
  );
}

export default ITConsulting;
