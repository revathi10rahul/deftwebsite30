import React,{useState,useEffect} from "react";
import Commonnavbar from "../CommonNavbar/Commonnavbar";
import { Col, Container, Row } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Aos from 'aos'
import "aos/dist/aos.css"
function ITConsulting() {
  useEffect(() => {
    Aos.init({duration:2000})
   }, [])

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

      {/* <div class="box">
	<h2 class="ribbon expand"><span>IT CONSULTING</span></h2>
</div> */}
<div class="twelve" >
  <h1 class='it-consulting-heading' data-aos="zoom-in-down">IT CONSULTING</h1>
</div>


      <div 
      // class="custom-root" 
    >
        <div class='it-consulting-landing-div'>
        <div class="grid-it-consulting-landing-div">
 
  
        <div style={{ height: "10vh" }}></div>
 <div class="figure-1" >
   <img src="../../Assets/supplysolutions.png" alt="Pic of Picasso"/>
 
 </div>

 <article class="picasso-1" >
   {/* <h1>IT CONSULTING</h1> */}
   <p className="fs-5"><b> At Deft lab,</b> we specialize in delivering innovative IT consulting solutions that empower businesses to thrive in the digital age. Whether you’re looking to streamline operations, enhance security, or embrace cutting-edge technologies, we are here to guide you every step of the way.
   Empowering Your Business with Innovative IT Solutions . Let us transform your business with expert IT consulting services tailored to meet your unique needs. From strategic planning to seamless implementation, we deliver cutting-edge technology solutions to optimize operations, enhance efficiency, and drive growth.Partner with us to unlock the full potential of your business with reliable, scalable, and future-ready IT strategies. </p>
 </article>


</div>
        </div>

</div>














{/* <div class='paragraph-itconsulting'>
  <p class='paragraph-itconsulting-content'>AI Solutions for Smarter Business Decisions and Efficiency Deft lab specialize in providing integrated IT consulting solutions that combine AI, supply chain optimization, and fintech expertise. Our innovative approaches deliver smarter, more efficient operations, from predictive analytics in supply chains to secure and scalable fintech solutions. With our customized services, we help you enhance performance, reduce costs, and stay ahead of industry trends.</p>
</div> */}









      {/* <h1 style={{fontFamily:'pirulen',textAlign:'center'}}>IT Consulting</h1> */}


   {/* <Container>
   <div className="container-main">
      <div className="container-divs">
        <div
          className={`split left ${hoveredSide === 'left' ? 'hover-left' : ''}`}
          onMouseEnter={() => handleMouseEnter('left')}
          onMouseLeave={handleMouseLeave}
        >
          <h3>IT</h3>
         
        </div>
        <div
          className={`split right ${hoveredSide === 'right' ? 'hover-right' : ''}`}
          onMouseEnter={() => handleMouseEnter('right')}
          onMouseLeave={handleMouseLeave}
        >
          <h3>CONSULTING</h3>
          
        </div>
      </div>
    </div>
   </Container> */}

















      <div class="body-content">
        <div class="card-wrapper">
          <div class="card-list">
            <div class="product-imgs" >
              <div class="img-display">
                <div class="img-showcase">
                  <img src="../../Assets/multi.jpg" alt="shoe pic" />
                  <img
                    src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg"
                    alt="shoe pic"
                  />
                  <img
                    src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg"
                    alt="shoe pic"
                  />
                  <img
                    src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg"
                    alt="shoe pic"
                  />
                </div>
              </div>
            </div>

            <div class="product-content" >
              <h2 class="product-title">AI Solutions for Smarter Business Decisions and Efficiency
              </h2>

              <div class="product-detail py-2">
                <p className="fs-4">
                Deft lab specialize in providing integrated IT consulting solutions that combine AI, supply chain optimization, and fintech expertise. Our innovative approaches deliver smarter, more efficient operations, from predictive analytics in supply chains to secure and scalable fintech solutions. With our customized services, we help you enhance performance, reduce costs, and stay ahead of industry trends.



               
                </p>
                {/* <ul>
          <li>Color: <span>Black</span></li>
          <li>Available: <span>in stock</span></li>
          <li>Category: <span>Shoes</span></li>
          <li>Shipping Area: <span>All over the world</span></li>
          <li>Shipping Fee: <span>Free</span></li>
        </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: "3vh" }}></div>























      {/* <div class='deft-itconsulting-card-maindiv'>
      <div class='deft-itconsulting-card-main'>
<div class="card__group-deft">
  <div class="card-deft">
    <div class="card__image-deft-itconsulting">
      <img class='deft-card-img-img' src="https://images.unsplash.com/photo-1517705008128-361805f42e86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGZ1cm5pdHVyZXxlbnwwfDB8MHx8fDA%3D" alt="furniture__img" />
    </div>
    <div class="card__content-deft">
      <h1 class='card-heading-deft'>Minimalist Design</h1>
      <p class='card-subcontent-deft'>Clean lines, neutral colors, and functional forms create a serene and stylish space.</p>
      <a href="#" class='card-learnmore-deft'>
        Learn more
        <i class="fa-solid fa-chevron-right icon-deft-itconsulting"></i></a>
    </div>
  </div>
  <div class="card-deft">
    <div class="card__image-deft-itconsulting">
      <img class='deft-card-img-img'src="https://plus.unsplash.com/premium_photo-1661962296943-bc59322f6424?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kdWxhciUyMGZ1cm5pdHVyZXxlbnwwfDB8MHx8fDA%3D" alt="furniture__img" />
    </div>
    <div class="card__content-deft">
      <h1 class='card-heading-deft'>Modular Design</h1>
      <p class='card-subcontent-deft'>Customizable pieces that can be rearranged to suit different spaces and lifestyles.</p>
      <a href="#">
        Learn more
        <i class="fa-solid fa-chevron-right icon"></i></a>
    </div>
  </div>
  <div class="card-deft">
    <div class="card__image-deft-itconsulting">
      <img class='deft-card-img-img' src="https://images.unsplash.com/photo-1687075196943-8e5bf699c760?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYwfHxmdXJuaXR1cmV8ZW58MHwwfDB8fHww" alt="furniture__img" />
    </div>
    <div class="card__content-deft">
      <h1 class='card-heading-deft'>Sustainable Materials</h1>
      <p class='card-subcontent-deft'>Eco-friendly materials like recycled wood and organic fabrics promote well being of environment.</p>
      <a href="#">
        Learn more
        <i class="fa-solid fa-chevron-right icon"></i></a>
    </div>
  </div>
  <div class="card-deft">
    <div class="card__image-deft-itconsulting">
      <img class='deft-card-img-img'src="https://plus.unsplash.com/premium_photo-1664298221432-04f508b7444d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHNtYXJ0JTIwZnVybml0dXJlfGVufDB8MHwwfHx8MA%3D%3D" alt="furniture__img" />
    </div>
    <div class="card__content-deft">
      <h1 class='card-heading-deft'>Smart Furniture</h1>
      <p class='card-subcontent-deft'> Integrated technology, such as voice-controlled lighting and adjustable seating, adds convenience and luxury.</p>
      <a href="#">
        Learn more
        <i class="fa-solid fa-chevron-right icon"></i></a>
    </div>
  </div>
</div>
</div>
</div> */}

{/* ================second div====================== */}
<div class='main-deft-ai'>
  <h1 class='deft-ai-heading' data-aos="zoom-in-down">Streamlining Innovation: The 5 D Process
  </h1>
  <div class="timeline desk-itconsulting-deft">
    <ul>
      <li className="deft-hover-right">
      <div class="deft-right-div-hover">
        
        <div class="deft-text-content" >
          <p>During this phase a Steering Committee is established.  The project team is organized and a commitment for user time allocated on the project is secured.  The objectives are stated in terms of business processes, applications, critical dates, resources, and financial targets.  Resource levels are defined for the project in terms of personnel, systems, facilities and hardware.  Planning activities for training are also initiated within this phase and extend throughout the duration of the project.  All are approved by the Steering Committee.</p>
        </div>
        <i></i>
    </div>
        <div class="content-deft-ai">
         
         
              <div class="card-deft" data-aos="zoom-out-right">
   
    <div class="card__content-deft" >
      <h1 class='card-heading-deft' style={{ color: '#062e39'}}>Discover</h1>
      <p class='card-subcontent-deft' style={{ color: 'black'}}>Discover Phase consists of a set of activities and tasks to confirm the overall objectives, scope, and critical success factors of the project</p>
    
         
    </div>
   
  </div>
  
        </div>
        {/* <div class="time">
          <h4>January 2018</h4>
        </div> */}
      </li>
      
      <li className="deft-hover-left" data-aos="zoom-out-left">
      <div class="deft-right-div-hover-left">
        
        <div class="deft-text-content-left">
          <p>For application enhancement or replacement, the requirements are compared to the current system or procured system’s vanilla functionality to discern existing gaps.  The gaps are analyzed for the most cost-effective solution to eliminate variances.  For database development, the requirements are modeled and entered into a CASE tool as the basis for the Entity Relationship Diagram or (ERD).  Reporting requirements will be analyzed and mapped to the database.  Evaluation of report requirements may be used in determining OLAP and reporting tool recommendations.</p>
        </div>
        <i></i>
    </div>
      <div class="content-deft-ai">
          {/* <h3>content 1</h3>
          <p>content 1 </p> */}
              <div class="card-deft" style={{background:'#FFDD95'}}>
    {/* <div class="card__image-deft-itconsulting">
      <img class='deft-card-img-img' src="https://images.unsplash.com/photo-1517705008128-361805f42e86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGZ1cm5pdHVyZXxlbnwwfDB8MHx8fDA%3D" alt="furniture__img" />
    </div> */}
    <div class="card__content-deft">
      <h1 class='card-heading-deft'>Diagnose</h1>
      <p class='card-subcontent-deft' style={{color:'black'}}>The Diagnose Phase is the set of activities and tasks focused on assessing the data requirements, reporting requirements, and documenting user requirements</p>
      {/* <a href="#" class='card-learnmore-deft'>
        Learn more
        <i class="fa-solid fa-chevron-right icon-deft-itconsulting"></i></a> */}
    </div>
  </div>
        </div>
      </li>
      
      <li className="deft-hover-right" data-aos="zoom-out-right">
      <div class="deft-right-div-hover">
        
        <div class="deft-text-content">
          <p>During this phase a complete detailed design document for all required programs, reports, panels and queries is created and used as a blueprint during development.  Conversions and automated interfaces are also designed during this phase.  All gaps defined in the previous phase serve as the primary design criteria.  An integration prototype should include actual data (both control table and limited transactional), allowing the users to become more familiar with the system through interaction with their own data.</p>
        </div>
        <i></i>
    </div>
      <div class="content-deft-ai">
          {/* <h3>content 1</h3>
          <p>content 1 </p> */}
              <div class="card-deft" >
    {/* <div class="card__image-deft-itconsulting">
      <img class='deft-card-img-img' src="https://images.unsplash.com/photo-1517705008128-361805f42e86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGZ1cm5pdHVyZXxlbnwwfDB8MHx8fDA%3D" alt="furniture__img" />
    </div> */}
    <div class="card__content-deft">
      <h1 class='card-heading-deft' style={{ color: '#062e39'}}>Define</h1>
      <p class='card-subcontent-deft' style={{ color: 'black'}}>The Define Phase uses the requirements defined during the Discover and Diagnose phases to develop specific specifications for the design of the application and database.  </p>
      {/* <a href="#" class='card-learnmore-deft'>
        Learn more
        <i class="fa-solid fa-chevron-right icon-deft-itconsulting"></i></a> */}
    </div>
  </div>
        </div>
        {/* <div class="time">
          <h4>March 2018</h4>
        </div> */}
      </li>
      
      <li className="deft-hover-left" data-aos="zoom-out-left">
      <div class="deft-right-div-hover-left">
        
        <div class="deft-text-content-left">
          <p>While the system is being fully tested, the user process documentation and policies and procedures are developed and tested.  As pieces of the system are completed they are tested and reviewed by the users and then approved.  Resource allocation of staff and infrastructure are identified and put in place.  Training in the new functionality occurs as soon as the programs are built and the necessary documentation is available.</p>
        </div>
        <i></i>
    </div>
      <div class="content-deft-ai">
          {/* <h3>content 1</h3>
          <p>content 1 </p> */}
              <div class="card-deft" style={{background:'#FFDD95'}}>
    {/* <div class="card__image-deft-itconsulting">
      <img class='deft-card-img-img' src="https://images.unsplash.com/photo-1517705008128-361805f42e86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGZ1cm5pdHVyZXxlbnwwfDB8MHx8fDA%3D" alt="furniture__img" />
    </div> */}
    <div class="card__content-deft">
      <h1 class='card-heading-deft'>Develop</h1>
      <p class='card-subcontent-deft' style={{color:'black'}}>The Develop Phase is the group of activities and tasks where the designs are constructed and tested within the prototype or and the final system is fully tested, individually by application and system-wide across application.</p>
      {/* <a href="#" class='card-learnmore-deft'>
        Learn more
        <i class="fa-solid fa-chevron-right icon-deft-itconsulting"></i></a> */}
    </div>
  </div>
        </div>
      </li>
      <li className="deft-hover-right" data-aos="zoom-out-right">
      <div class="deft-right-div-hover">
        
        <div class="deft-text-content">
          <p>Key to this successful transition is a set of tasks that evaluate the project and overall implementation process, focused on providing the most appropriate post-implementation production support.  The technical and project documentation for the system is turned over to the client systems group. </p>
        </div>
        <i></i>
    </div>
      <div class="content-deft-ai">
          {/* <h3>content 1</h3>
          <p>content 1 </p> */}
              <div class="card-deft" >
    {/* <div class="card__image-deft-itconsulting">
      <img class='deft-card-img-img' src="https://images.unsplash.com/photo-1517705008128-361805f42e86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGZ1cm5pdHVyZXxlbnwwfDB8MHx8fDA%3D" alt="furniture__img" />
    </div> */}
    <div class="card__content-deft">
      <h1 class='card-heading-deft' style={{ color: '#062e39'}}>Deliver</h1>
      <p class='card-subcontent-deft' style={{ color: 'black'}}>The final phase, Deliver, includes activities and tasks that ensure a smooth implementation and transition to a production environment.   </p>
      {/* <a href="#" class='card-learnmore-deft'>
        Learn more
        <i class="fa-solid fa-chevron-right icon-deft-itconsulting"></i></a> */}
    </div>
  </div>
        </div>
        {/* <div class="time">
          <h4>March 2018</h4>
        </div> */}
      </li>
    
    
      
      
      <div style={{clear:'both'}}></div>
    </ul>
  </div>

























<div className="timeline mob-deft-itconsulting">
<ul>
      <li >
      
        <div class="content-deft-ai">
         
         
              <div class="card-deft" >
   
    <div class="card__content-deft">
      <h1 class='card-heading-deft' style={{ color: '#062e39'}}>Discover</h1>
      <p class='card-subcontent-deft' style={{ color: 'black'}}>Discover Phase consists of a set of activities and tasks to confirm the overall objectives, scope, and critical success factors of the project</p>
      <Button variant="primary" onClick={handleShow}>
        Read More
      </Button>
      <Modal show={show} onHide={handleClose} animation={false} centered>
       
        <Modal.Body className="deft-modal-body">During this phase a Steering Committee is established.  The project team is organized and a commitment for user time allocated on the project is secured.  The objectives are stated in terms of business processes, applications, critical dates, resources, and financial targets.  Resource levels are defined for the project in terms of personnel, systems, facilities and hardware.  Planning activities for training are also initiated within this phase and extend throughout the duration of the project.  All are approved by the Steering Committee.</Modal.Body>
      </Modal>
    </div>
   
  </div>
  
        </div>
        
      </li>
      
      <li >
     
      <div class="content-deft-ai">
        
              <div class="card-deft" style={{background:'#FFDD95'}}>
   
    <div class="card__content-deft">
      <h1 class='card-heading-deft'>Diagnose</h1>
      <p class='card-subcontent-deft' style={{color:'black'}}>The Diagnose Phase is the set of activities and tasks focused on assessing the data requirements, reporting requirements, and documenting user requirements</p>
      <Button variant="primary" onClick={handleShowsecond}>
        Read More
      </Button>
      <Modal show={showsecond} onHide={handleClosesecond} animation={false} centered>
       
        <Modal.Body style={{width:"300px",marginRight:'30px',}}>For application enhancement or replacement, the requirements are compared to the current system or procured system’s vanilla functionality to discern existing gaps.  The gaps are analyzed for the most cost-effective solution to eliminate variances.  For database development, the requirements are modeled and entered into a CASE tool as the basis for the Entity Relationship Diagram or (ERD).  Reporting requirements will be analyzed and mapped to the database.  Evaluation of report requirements may be used in determining OLAP and reporting tool recommendations.</Modal.Body>
      </Modal>
    </div>
  </div>
        </div>
      </li>
      
      <li >
    
      <div class="content-deft-ai">
       
              <div class="card-deft" >
   
    <div class="card__content-deft">
      <h1 class='card-heading-deft' style={{ color: '#062e39'}}>Define</h1>
      <p class='card-subcontent-deft' style={{ color: 'black'}}>The Define Phase uses the requirements defined during the Discover and Diagnose phases to develop specific specifications for the design of the application and database.  </p>
      <Button variant="primary" onClick={handleShowthird}>
        Read More
      </Button>
      <Modal show={showthird} onHide={handleClosethird} animation={false} centered>
       
        <Modal.Body style={{width:"300px",marginRight:'30px',}}>During this phase a complete detailed design document for all required programs, reports, panels and queries is created and used as a blueprint during development.  Conversions and automated interfaces are also designed during this phase.  All gaps defined in the previous phase serve as the primary design criteria.  An integration prototype should include actual data (both control table and limited transactional), allowing the users to become more familiar with the system through interaction with their own data.</Modal.Body>
      </Modal>
    </div>
  </div>
        </div>
       
      </li>
      
      <li >
     
      <div class="content-deft-ai">
      
              <div class="card-deft" style={{background:'#FFDD95'}}>
   
    <div class="card__content-deft">
      <h1 class='card-heading-deft'>Develop</h1>
      <p class='card-subcontent-deft' style={{color:'black'}}>The Develop Phase is the group of activities and tasks where the designs are constructed and tested within the prototype or and the final system is fully tested, individually by application and system-wide across application.</p>
      <Button variant="primary" onClick={handleShowfourth}>
        Read More
      </Button>
      <Modal show={showfourth} onHide={handleClosefourth} animation={false} centered>
       
        <Modal.Body style={{width:"300px",marginRight:'30px',}}>While the system is being fully tested, the user process documentation and policies and procedures are developed and tested.  As pieces of the system are completed they are tested and reviewed by the users and then approved.  Resource allocation of staff and infrastructure are identified and put in place.  Training in the new functionality occurs as soon as the programs are built and the necessary documentation is available.</Modal.Body>
      </Modal>
    </div>
  </div>
        </div>
      </li>
      <li >
      
      <div class="content-deft-ai">
        
              <div class="card-deft" >

    <div class="card__content-deft">
      <h1 class='card-heading-deft' style={{ color: '#062e39'}}>Deliver</h1>
      <p class='card-subcontent-deft' style={{ color: 'black'}}>The final phase, Deliver, includes activities and tasks that ensure a smooth implementation and transition to a production environment.   </p>
      <Button variant="primary" onClick={handleShowfifth}>
        Read More
      </Button>
      <Modal show={showfifth} onHide={handleClosefifth} animation={false} centered>
       
        <Modal.Body style={{width:"300px",marginRight:'30px',}}>Key to this successful transition is a set of tasks that evaluate the project and overall implementation process, focused on providing the most appropriate post-implementation production support.  The technical and project documentation for the system is turned over to the client systems group.</Modal.Body>
      </Modal>
    </div>
  </div>
        </div>
       
      </li>
    
    
      
      
      <div style={{clear:'both'}}></div>
    </ul>
</div>


  {/* ============ mob vew-code ============================== */}
</div>
{/* <Container className="mob-view-deft-itconsulting">
  <Row>
    <Col lg={3}>
    <div class="card-deft">
    <div class="card__image-deft-itconsulting">
      <img class='deft-card-img-img' src="https://images.unsplash.com/photo-1517705008128-361805f42e86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGZ1cm5pdHVyZXxlbnwwfDB8MHx8fDA%3D" alt="furniture__img" />
    </div>
    <div class="card__content-deft">
      <h1 class='card-heading-deft'>Minimalist Design</h1>
      <p class='card-subcontent-deft'>Clean lines, neutral colors, and functional forms create a serene and stylish space.</p>
      <a href="#" class='card-learnmore-deft'>
        Learn more
        <i class="fa-solid fa-chevron-right icon-deft-itconsulting"></i></a>
    </div>
  </div>
    </Col>
    <Col lg={3}>
    <div class="card-deft">
    <div class="card__image-deft-itconsulting">
      <img class='deft-card-img-img'src="https://plus.unsplash.com/premium_photo-1661962296943-bc59322f6424?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kdWxhciUyMGZ1cm5pdHVyZXxlbnwwfDB8MHx8fDA%3D" alt="furniture__img" />
    </div>
    <div class="card__content-deft">
      <h1 class='card-heading-deft'>Modular Design</h1>
      <p class='card-subcontent-deft'>Customizable pieces that can be rearranged to suit different spaces and lifestyles.</p>
      <a href="#">
        Learn more
        <i class="fa-solid fa-chevron-right icon"></i></a>
    </div>
  </div>
    </Col>
    <Col lg={3}>
    <div class="card-deft">
    <div class="card__image-deft-itconsulting">
      <img class='deft-card-img-img'src="https://plus.unsplash.com/premium_photo-1661962296943-bc59322f6424?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kdWxhciUyMGZ1cm5pdHVyZXxlbnwwfDB8MHx8fDA%3D" alt="furniture__img" />
    </div>
    <div class="card__content-deft">
      <h1 class='card-heading-deft'>Modular Design</h1>
      <p class='card-subcontent-deft'>Customizable pieces that can be rearranged to suit different spaces and lifestyles.</p>
      <a href="#">
        Learn more
        <i class="fa-solid fa-chevron-right icon"></i></a>
    </div>
  </div>
    </Col>
    <Col lg={3} >
    <div class="card-deft">
    <div class="card__image-deft-itconsulting">
      <img class='deft-card-img-img'src="https://plus.unsplash.com/premium_photo-1661962296943-bc59322f6424?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kdWxhciUyMGZ1cm5pdHVyZXxlbnwwfDB8MHx8fDA%3D" alt="furniture__img" />
    </div>
    <div class="card__content-deft">
      <h1 class='card-heading-deft'>Modular Design</h1>
      <p class='card-subcontent-deft'>Customizable pieces that can be rearranged to suit different spaces and lifestyles.</p>
      <a href="#">
        Learn more
        <i class="fa-solid fa-chevron-right icon"></i></a>
    </div>
  </div>
    </Col>
  </Row>
</Container> */}

































<div style={{ height: "10vh" }}></div>

<Container fluid>
<Row >
  <Col lg={6} style={{background:'#550000'}} >
  <img
              src="../../Assets/problem solving.png"
              alt="Your description"
              className="homepage-img-seconddiv"
            />
  </Col>
  <Col lg={6} className="bg-light" >
<div style={{padding:'20px',margin:'20px 40px'}}>
<h2 className="itconsulting-heading ">AI Solutions for Smarter Business Decisions and Efficiency</h2>
<p className="fs-4"> At Deft lab, we offer IT consulting services that integrate Artificial Intelligence (AI) to streamline your business operations. Our AI-powered solutions help businesses enhance decision-making, automate processes, and optimize workflows. Whether it’s improving customer experience, predictive analytics, or data-driven insights, we help you leverage AI to stay competitive and drive innovation across industries </p>
</div>
  </Col>
</Row>
<Row>
<Col lg={6} className="bg-light" >
<div style={{padding:'20px',margin:'20px 40px'}}>
<h2>Revolutionizing Supply Chain Management with AI
</h2>
<p className="fs-4">Optimize your supply chain with AI-driven solutions that enhance efficiency, reduce costs, and improve decision-making. Our IT consulting services leverage advanced technologies like machine learning, data analytics, and automation to streamline logistics, inventory management, and demand forecasting. We help you create a resilient, agile, and future-proof supply chain that can adapt to changing market dynamics.</p>
</div>
  </Col>
  <Col lg={6} className="bg-primary" >
  <img
              src="../../Assets/problem solving.png"
              alt="Your description"
              className="homepage-img-seconddiv"
            />
  </Col>
  
</Row>
<Row >
  <Col lg={6} className="bg-success" >
  <img
              src="../../Assets/problem solving.png"
              alt="Your description"
              className="homepage-img-seconddiv"
            />
  </Col>
  <Col lg={6} className="bg-light" >
<div style={{padding:'20px',margin:'20px 40px'}}>
<h2>Fintech Consulting for the Digital Finance Revolution

</h2>
<p className="fs-4">Transform your financial operations with our expert IT consulting services tailored for the fintech industry. We help you integrate cutting-edge technologies like AI to improve security, and streamline financial workflows. Our solutions empower you to deliver faster, more secure services and create a seamless digital experience for your customers while optimizing operational efficiency. </p>
</div>
  </Col>
</Row>

</Container>
















      {/* <div
  style={{
    height: '100vh',
    width: '100%',
    backgroundImage: 'url(../../Assets/5hand.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  }}
>
  <div
    style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '100%', 
      height: '600px', 
      backgroundImage: 'url(../../Assets/5ds.png)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <h1 style={{ textAlign: 'center', color: 'Black', fontSize: '2rem' }}>5 D 's</h1>
  </div>
</div> */}

      {/* 
<div class="custom-body">

  <div id="circle"></div>

</div> */}
{/* ======================================= chart ====================================================== */}
      {/* <div
        style={{ height: "80vh", background: "#16a085" }}
        className="desk-view"
      >
        {" "}
       
        <CircleLinks />
      </div>

      <div
        style={{ height: "80vh", background: "#16a085" }}
        className="mob-view"
      >
        {" "}
       
        <MobCirclelink />
      </div> */}
{/* ==================================================================== */}
      {/* <section className='sec-div-itconsulting'>
    <div class="container">
        <div class="row " >
        
           

            <div class="round-pro">
                <div class="r-1">
                  5 D's
                    
                </div>
                <div class="list-round t-1">Discover Phase</div>
                <div class="list-round t-2">Diagnose Phase </div>
                <div class="list-round t-3">Define Phase</div>
                <div class="list-round t-4">Develop Phase</div>
                <div class="list-round t-5">Deliver Phase </div>
            </div>
        </div>
    </div>
</section> */}

      <div style={{ height: "8vh" }}></div>
    </div>
  );
}

export default ITConsulting;
