import React from 'react'
import CommonNavbar from '../CommonNavbar/Commonnavbar'
import { Container, Row,Col } from 'react-bootstrap'
function Contactus() {
  return (
    <div>
        <CommonNavbar/>
        
<div class='deft-contactus'>
  
  <div class='deft-contact-section'>
    
    <div class="section-header">
      <div class="deft-contactus-container mt-5">
        <h2 className='text-black'>Contact Us</h2>
        <p  className='text-black fs-2'>Thank you for your interest in Nacre System! Kindly complete the form below, and we’ll get back to you within 1-2 business days..</p>
      </div>
    </div>
    
    <div class="container-deft-contact">
      <div class="row-contactus">
        
        <div class="contact-info">
            {/* <div class="contact-info-item">
                <div class="contact-info-icon">
                <i class="fas fa-home"></i>
                </div>
                
                <div class="contact-info-content">
                <h4>Address</h4>
                <p>4671 Sugar Camp Road,<br/> Owatonna, Minnesota, <br/>55060</p>
                </div>
            </div>
            
            <div class="contact-info-item">
                <div class="contact-info-icon">
                <i class="fas fa-phone"></i>
                </div>
                
                <div class="contact-info-content">
                <h4>Phone</h4>
                <p>571-457-2321</p>
                </div>
            </div>
            
            <div class="contact-info-item">
                <div class="contact-info-icon">
                <i class="fas fa-envelope"></i>
                </div>
                
                <div class="contact-info-content">
                <h4>Email</h4>
                <p>ntamerrwael@mfano.ga</p>
                </div>
            </div> */}
        </div>
        
        <div class="contact-form">
          <form action="" id="contact-form">
            <h2>Send Message</h2>
            <div class="input-box">
              <input type="text" required="true" name=""/>
              <span>Your Name</span>
            </div>
            <div class="input-box">
              <input type="text" required="true" name=""/>
              <span>Company Name</span>
            </div>
            <div class="input-box">
              <input type="email" required="true" name=""/>
              <span>Email</span>
            </div>
            <div class="input-box">
              <input type="tel" required="true" name=""/>
              <span>Phone Number</span>
            </div>
            <div class="input-box">
              <textarea required="true" name=""></textarea>
              <span>Type your Message...</span>
            </div>
            
            <div class="input-box">
              <input type="submit" value="Send" name=""/>
            </div>
          </form>
        </div>
        
      </div>
    </div>



    <Container fluid className='mt-5'>
        <Row className='contactus-glassmorph'>
            <Col lg={4} className='mt-3'>
            <div class="contact-info-item">
            {/* <div class="contact-info-icon">
              <i class="fas fa-home"></i>
            </div> */}
            
            <div class="contact-info-content ms-5">
           <div className='mob-view-addresssection'>
           <div class="contact-info-icon ms-5 ">
              <i class="fas fa-home"></i>
            </div>
              <h4>Address</h4>
              <p>4671 Sugar Camp Road,<br/> Owatonna, Minnesota, <br/>55060</p>
            </div>
          </div>
           </div>
            </Col>
            <Col lg={4} className='mt-3'>
            <div class="contact-info-item ms-5">
           
            
            <div class="contact-info-content">
            <div class="contact-info-icon ms-5">
              <i class="fas fa-phone"></i>
            </div>
              <h4 className='ms-3'>Phone</h4>
              <p className='ms-5'>571-457-2321</p>
            </div>
          </div>
            </Col>
            <Col lg={4} className='mt-3'>
            <div class="contact-info-item ms-5">
            
            
            <div class="contact-info-content">
            <div class="contact-info-icon ms-5">
              <i class="fas fa-envelope"></i>
            </div>
              <h4>Email</h4>
             <p>ntamerrwael@mfano.ga</p>
            </div>
          </div>
            </Col>
        </Row>
    </Container>
  </div>
  
</div>

    </div>
  )
}

export default Contactus