import React, { useState ,useEffect} from "react";
import CommonNavbar from '../CommonNavbar/Commonnavbar'
import Newfooter from '../components/Newfooter'
import { Container,Row,Col } from 'react-bootstrap'
import Aos from 'aos'
import "aos/dist/aos.css"
function Aboutus() {
  useEffect(() => {
    Aos.init({duration:2000})
    }, [])
  return (
    <div>
        <CommonNavbar/>
      <div style={{height:"10vh"}}></div>
      <div class="deft-aboutus-main">
      <div class="container-aboutus">
  <div class="deft-contentLeft">
    
    <div class="deft-row-aboutus ">
      
        <div class="deft-imgWrapper">
            <img src="https://images.unsplash.com/photo-1687579521048-217e24217d53?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODg5ODcxNzl8&ixlib=rb-4.0.3&q=85" alt=""/>
        </div>
        <div class="deft-imgWrapper">
            <img src="https://images.unsplash.com/photo-1686580546412-80e80519abd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODg5ODcyMDN8&ixlib=rb-4.0.3&q=85" alt=""/>
        </div>
        <div class="deft-imgWrapper">
            <img src="https://images.unsplash.com/photo-1688133338995-a394ce7314e4?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODg5ODcyMDN8&ixlib=rb-4.0.3&q=85" alt=""/>
        </div>
        <div class="deft-imgWrapper">
            <img src="https://images.unsplash.com/photo-1686354715732-7e4685269a25?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODg5ODcyNzN8&ixlib=rb-4.0.3&q=85" alt=""/>
        </div>
    </div>
  </div>
  <div class="deft-contentRight">
    <div class="deft-content">
      {/* <h4>Welcome To</h4> */}
      <h2 >Forging enterprise value through technology driven innovation</h2>
      <p>In a rapidly evolving world, businesses must proactively shape their future to remain competitive. At Deft Lab, we empower organizations to harness the transformative potential of cutting-edge technologies such as generative AI, robotics, quantum computing, and digital engineering. By embracing innovation, we help you discover new ways to connect with customers, enhance operational resilience, and secure sustainable growth in an ever-changing landscape.</p>
      <p>Our mission is to partner with forward-thinking businesses, providing expertise and tailored solutions to navigate challenges and unlock opportunities. From leveraging generative AI for drug discovery to employing satellite data collection for groundbreaking advancements, we ensure that your business stays ahead of the curve. With a long-term vision and a focus on adaptability, we enable organizations to thrive in dynamic environments.</p>
    <p>Technology innovation is at the core of what we do. It drives smarter decision-making, empowers businesses to create unique solutions, and lays the foundation for lasting success. At Deft Lab, we are committed to helping you forge a path toward progress, set new standards for the future, and achieve excellence in today’s vibrant, ever-evolving marketplace. Together, let’s redefine what’s possible.</p>
    </div>
  </div>
</div>
</div>









{/* <Newfooter/> */}



    </div>
  )
}

export default Aboutus