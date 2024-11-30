import React,{useEffect} from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Aos from 'aos'
import "aos/dist/aos.css"
function Supplychain() {
  useEffect(() => {
    Aos.init({duration:2000})
   }, [])
  return (
    <div>
          <div style={{ height: "15vh" }}></div>
      <div class="twelve">
        <h1 class="it-consulting-heading" data-aos="zoom-in-down">SUPPLY CHAIN</h1>
      </div>
      <section class="about-section">
    	<div class="container">
        	<div class="row clearfix">
            	
            <div class="image-column col-md-6 col-sm-12 col-xs-12">
                	<div class="inner-column " data-wow-delay="0ms" data-wow-duration="1500ms" data-aos="fade-right">
                    	<div class="image">
                        <img src="../../Assets/supplychainimg.webp" alt="" />
                           
                        </div>
                    </div>
                </div>
                <div class="content-column col-md-6 col-sm-12 col-xs-12">
                	<div class="inner-column" data-aos="fade-right">
                    	{/* <div class="sec-title">
                    	
                        	<h2>We Are The Leader In <br/> The Interiores</h2>
                        </div> */}
                        <div class="text">Optimizing Efficiency with Cutting-Edge Technology
                        In today’s fast-paced global market, an efficient supply chain is crucial for business success. Our IT consulting services offer advanced solutions that help businesses optimize their supply chain operations, improve visibility, and streamline processes. From inventory management to logistics, we provide end-to-end solutions that enhance the flow of goods and information across the entire supply chain.</div>
                        <div class="text">
                  We focus on implementing technology that enables real-time
                  tracking, predictive analytics, and automation, ensuring that
                  every part of the supply chain is managed efficiently. <br />
                  
                </div>
             
              </div>
            </div>
          </div>
        </div>
      </section>




      <h1 className='text-center'>Our expertise spans</h1>
      <Container>
        <Row className='mt-5'>
            <Col lg={4}>
            <Card  style={{ borderTop:'5px solid blue' }}>
       
        <Card.Body>
          <Card.Title>Inventory Optimization</Card.Title>
          <Card.Text>
          Using data-driven insights to manage stock levels and reduce waste.
          </Card.Text>
        </Card.Body>
      </Card>
            </Col>
            <Col lg={4}>
            <Card  style={{ borderTop:'5px solid blue' }}>
       
        <Card.Body>
          <Card.Title>Demand Forecasting</Card.Title>
          <Card.Text>
          Leveraging AI and machine learning for accurate demand predictions, minimizing stockouts and overstocking.
          </Card.Text>
        </Card.Body>
      </Card>
            </Col>
            <Col lg={4}>
            <Card  style={{ borderTop:'5px solid blue' }}>
       
        <Card.Body>
          <Card.Title>Logistics Management</Card.Title>
          <Card.Text>
          Enhancing transportation efficiency and route optimization to reduce costs and improve delivery times.
          </Card.Text>
        </Card.Body>
      </Card>
            </Col>
          
        </Row>
        <Row className='mt-5 mb-5'>
        <Col lg={6}>
            <Card  style={{ borderTop:'5px solid blue' }}>
       
        <Card.Body>
          <Card.Title>Supply Chain Visibility</Card.Title>
          <Card.Text>
          Offering real-time data tracking and reporting to improve decision-making and responsiveness.
          </Card.Text>
        </Card.Body>
      </Card>
            </Col>
            <Col lg={6}>
            <Card  style={{ borderTop:'5px solid blue' }}>
       
        <Card.Body>
          <Card.Title>Automation</Card.Title>
          <Card.Text>
          Streamlining manual processes to reduce errors, increase speed, and lower operational costs.
          </Card.Text>
        </Card.Body>
      </Card>
            </Col>
        </Row>
      </Container>

      <div className="deft-desktop-supplychain"></div>
    </div>
  )
}

export default Supplychain