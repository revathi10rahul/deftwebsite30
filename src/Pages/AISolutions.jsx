import React, {  useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
function ITConsulting() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

 

  return (
    <div>
      {/* <Commonnavbar /> */}
      <div style={{ height: "15vh" }}></div>
      <div class="twelve">
        <h1 class="it-consulting-heading" data-aos="zoom-in-down">AI SOLUTIONS</h1>
      </div>
      {/* <div class="box">
	<h2 class="ribbon expand"><span>IT CONSULTING</span></h2>
</div> */}

      <Container>
        <div className="deft-aisolution-maindiv">
          <div class="circle-1 d-flex" data-aos="zoom-in-down">
            <img src="../../Assets/aiiiot.png" alt="AI IoT pic" />
          </div>

          <div class="circle-2" data-aos="zoom-in-down">
            <h1>Cognitive Computing Solutions</h1>
          </div>

          <div class="circle-3" data-aos="zoom-in-down">
            <img src="../../Assets/m2m.webp" alt="AI IoT pic" />
          </div>
        </div>
      </Container>

      <div>
        <div class="it-consulting-landing-div">
          <div class="grid-it-consulting-landing-div">
            <div style={{ height: "10vh" }}></div>
            <div class="figure-1">
              <img src="../../Assets/aiiiot.png" alt="pic of Picasso" />
            </div>

            <article class="picasso-1">
              {/* <h1>IT CONSULTING</h1> */}
              <p className="fs-5">
                <b> At Deft lab,</b> we specialize in IT consulting services
                that integrate cutting-edge technologies like Artificial
                Intelligence (AI) and Small Language Models (SLMs) to
                revolutionize your business operations. Our expert team works
                closely with you to understand your goals and challenges,
                developing tailored strategies that improve efficiency, foster
                innovation, and drive growth. With our deep understanding of AI,
                we help businesses harness the potential of intelligent systems
                to optimize processes, enhance decision-making, and stay ahead
                of the competition.{" "}
              </p>
            </article>
          </div>
        </div>

        {/* <div class="it-consulting-landing-div" >
          <div class="grid-it-consulting-landing-div" >
           
          

            
          </div>
        </div> */}
      </div>

      <Container fluid>
        <Row>
          <Col lg={6} style={{ background: "#550000" }}>
            <img
              src="../../Assets/problem solving.png"
              alt="Your description"
              className="homepage-img-seconddiv"
            />
          </Col>
          <Col lg={6} className="bg-light">
            <div className="it-consulting-subdiv-main">
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
