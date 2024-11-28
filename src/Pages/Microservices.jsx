import React, { useState ,useEffect} from "react";

import Footer from '../components/Footer'
import CommonNavbar from '../CommonNavbar/Commonnavbar'
import '../components/Responsive.css'
import Aos from 'aos'
import "aos/dist/aos.css"

function Microservices() {
  useEffect(() => {
    Aos.init({duration:2000})
    }, [])
  return (
    <div>
        <CommonNavbar/>
       <div className='mob-view-starting'></div>
        <div class="twelve">
        <h1 class='it-consulting-heading' data-aos="zoom-in-down">MICRO SERVICES</h1>

</div>
        {/* <div  className='mob-view'></div> */}
        <div class='div1' data-aos="zoom-in-up">
  <div class="pricing-container">
    <div class="pricing-card" onclick="selectCard(this)" data-aos="flip-left">
      <h3>iOS Basics</h3>
      <p class="price">$99.99</p>
      <ul>
        <li>Introduction to Swift</li>
        <li>Basic App Development</li>
        <li>3-Month Access</li>
      </ul>
      <button class="btn">Choose iOS Basics</button>
    </div>

    <div  data-aos="flip-right" class="pricing-card "
    //  featured onclick=selectCard(this)
     >
      <h3>Advanced iOS</h3>
      <p class="price">$199.99</p>
      <ul>
        <li>Advanced Swift Concepts</li>
        <li>Complex UI Design</li>
        <li>6-Month Access</li>
        <li>Access to Weekly Webinars</li>
      </ul>
      <button class="btn">Choose Advanced iOS</button>
    </div>
    <div data-aos="flip-right" class="pricing-card "
    // featured onclick="selectCard(this)
    >
      <h3>Advanced iOS</h3>
      <p class="price">$199.99</p>
      <ul>
        <li>Advanced Swift Concepts</li>
        <li>Complex UI Design</li>
        <li>6-Month Access</li>
        <li>Access to Weekly Webinars</li>
      </ul>
      <button class="btn">Choose Advanced iOS</button>
    </div>
    <div data-aos="flip-left" class="pricing-card-2" onclick="selectCard(this)">
      <h3>iOS Basics</h3>
      <p class="price2">$99.99</p>
      <ul>
        <li>Introduction to Swift</li>
        <li>Basic App Development</li>
        <li>3-Month Access</li>
      </ul>
      <button class="btn">Choose iOS Basics</button>
    </div>
  </div>
</div>


<div style={{height:'20vh'}}></div>

    </div>
  )
}

export default Microservices