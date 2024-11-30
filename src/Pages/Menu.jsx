import React, { useState, useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./contactus.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMailBulk,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import { Dropdown, DropdownButton } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Contactus() {
  const baseUrl = process.env.REACT_APP_API_URL;



  const [capValue, setCapvalue] = useState(null);

  const keycaptcha = process.env.REACT_APP_SITE_KEY; 

   //v2 checkbox NacreWebsite



  const recaptcha = useRef();

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    website: "",
    email: "",
    phone: "",
    countryCode: "+91", // Default country code
    industry: "",
    subject: "",
    message: "",
  });

  // State to manage country options and loading state

  const [countryOptions, setCountryOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState({
    code: "+91",
    flag: "https://flagcdn.com/w320/in.png", // URL for India's flag
  });
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const response = await res.json();

        const countryData = response.map((country) => {
          const countryCode =
            country.idd?.root && country.idd.suffixes?.[0]
              ? country.idd.root + country.idd.suffixes[0]
              : "+0";

          return {
            name: country.name.common,
            code: countryCode,
            flag: country.flags?.png,
          };
        });

        setCountryOptions(countryData);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCountrySelect = (code, name, flag) => {
    setSelectedCountry({ code, name, flag });
    setFormData({ ...formData, countryCode: code });
    setSearchTerm(""); // Clear search term on selection
  };

  // Filtered countries based on search term
  const filteredCountries = countryOptions.filter(
    (country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.code.includes(searchTerm)
  );

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Allow only numbers for phone input
    if (name === "phone" && !/^\d*$/.test(value)) {
      return; // If the value contains non-numeric characters, do not update state
    }

    setFormData({ ...formData, [name]: value });
  };

  // Validate phone number (example: must be at least 10 digits for India)
  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10,15}$/; // Adjust regex according to your requirements
    return phoneRegex.test(phone);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const captchaValue = recaptcha.current.getValue();
    if (!captchaValue) {
      toast.error('Please verify the reCAPTCHA!')
      return;
    } 
    // console.log('print form data',formData);
    
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message ||
      !formData.company ||
      !formData.website ||
      !formData.phone ||
      !formData.industry 
     
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (!validatePhone(formData.phone)) {
      toast.error(
        "Please enter a valid phone number (only digits, 10 to 15 characters)."
      );
      return;
    }

    const requestData = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      cname: formData.company,
      cweb: formData.website,
      phone: formData.phone,
      ccode: formData.countryCode,
      industry: formData.industry,
      "g-recaptcha-response": captchaValue,
    };
    // console.log("request data", requestData);

    // try {
      const response = await fetch(`${baseUrl}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok ) {
        const result = await response.json();
        // console.log("result", result);
        // toast.success(result.message);
      //  if(result.status=0){
      //   toast.error(result.message)
      //  }else if(result.status=1){
      //   toast.error(result.message)
      //  }else if(result.status=2){
      //   toast.error(result.message)
      //  }else if(result.status=3){
      //   toast.error(result.message)
      //  }else if(result.status=4){
      //   toast.success(result.message)
      //  }else if(result.status=5){
      //   toast.error(result.message)
      //  }else if(result.status=6){
      //   toast.error(result.message)
      //  }else if(result.status=7){
      //   toast.error(result.message)
      //  }

      if ([0, 1, 2, 3, 6, 7].includes(result.status)) {
        toast.error(result.message);
      } else {
        toast.success(result.message);
      }
      
        setFormData({
          name: "",
          company: "",
          website: "",
          email: "",
          phone: "",
          countryCode: "+91", // Reset to default
          industry: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("Error submitting the form. Please try again later.");
      }
    // } 
    // catch (error) {
    //   alert("An error occurred. Please try again.");
    //   console.error(error);
    // }
  };

  // =============================
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className="contact-section mt-2">
  
  <ToastContainer />
      <section class="contact-page-sec">
      
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="contact-info">
                <div class="contact-info-item">
                  <div class="contact-info-icon">
                    <i class="fas fa-map-marked"></i>
                  </div>
                  <div class="contact-info-text">
                    <h2>address</h2>
                    <span style={{ color: "white" }}>
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        style={{ color: "white" }}
                      />{" "}
                      Malampuzha Rd, 
                      <br />
                      Palakkad Kerala 678002
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="contact-info">
                <div class="contact-info-item">
                  <div class="contact-info-icon">
                    <i class="fas fa-envelope"></i>
                  </div>
                  <div class="contact-info-text">
                    <h2>INDIA</h2>

                    <span>
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        style={{ color: "white" }}
                      />{" "}
<a style={{ textDecoration: 'none' }} className="text-white" href="mailto:info@nacresys.com">
  info@nacresys.com
</a>                   
                    </span>
                    <span>
                      <FontAwesomeIcon
                        icon={faPhone}
                        style={{ color: "white" }}
                      />{" "}
                     <a style={{ textDecoration: 'none' }} className="text-white" href="tel:+91 77367 42072">
                     +91 77367 42072
</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="contact-info">
                <div class="contact-info-item">
                  <div class="contact-info-icon">
                    <i class="fas fa-clock"></i>
                  </div>
                  <div class="contact-info-text">
                    <h2>UAE</h2>
                    {/* <span>info@LoremIpsum.com</span>  */}
                    <span>
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        style={{ color: "white" }}
                      />{" "}
                    
                      <a style={{ textDecoration: 'none' }} className="text-white" href="mailto:kumar@nacresys.com">
                      kumar@nacresys.com
</a>
                    </span>
                    <span>
                      <FontAwesomeIcon
                        icon={faPhone}
                        style={{ color: "white" }}
                      />{" "}
                     
                      <a style={{ textDecoration: 'none' }} className="text-white" href="tel: +971 56 815 9306">
                      +971 56 815 9306
</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-8">
              <div class="contact-page-form">
                <h2>Get in Touch</h2>
                {/* ===========================contact form=============== */}
                <form onSubmit={handleSubmit}   method="post">
                  <div class="row">
                    <div class="col-md-6 col-sm-6 col-xs-12">
                      <div class="single-input-field">
                        {/* <input
                          type="text"
                          placeholder="Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                        /> */}
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Your Name"
                          className="mb-3"
                        >
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="name@example.com"
                          />
                        </FloatingLabel>
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-12">
                      <div class="single-input-field">
                        {/* <input
                          type="text"
                          placeholder="Company Name"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          required
                        /> */}
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Company Name"
                          className="mb-3"
                        >
                          <Form.Control
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="name@example.com"
                          />
                        </FloatingLabel>
                      </div>
                    </div>

                    <div class="col-md-6 col-sm-6 col-xs-12">
                      <div class="single-input-field">
                        {/* <input
                          type="text"
                          placeholder="Company Website"
                          name="website"
                          value={formData.website}
                          onChange={handleInputChange}
                        /> */}
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Company Website"
                          className="mb-3"
                        >
                          <Form.Control
                            type="text"
                            name="website"
                            value={formData.website}
                            onChange={handleInputChange}
                            placeholder="name@example.com"
                          />
                        </FloatingLabel>
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-12">
                      <div class="single-input-field">
                        {/* <input
                          type="email"
                          placeholder="E-mail"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        /> */}
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Email  "
                          className="mb-3"
                        >
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="name@example.com"
                          />
                        </FloatingLabel>
                      </div>
                    </div>

                    <div class="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field d-flex">
                        <DropdownButton
                          id="dropdown-basic-button"
                          title={
                            selectedCountry ? (
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <img
                                  src={selectedCountry.flag}
                                  alt={selectedCountry.name}
                                  width="20"
                                  height="15"
                                  style={{ marginRight: "10px" }}
                                />
                                {selectedCountry.code}
                              </div>
                            ) : (
                              "Select Country code"
                            )
                          }
                          className="country-dropdown"
                          menuClassName="dropdown-menu-custom"
                        >
                          {/* Search input field */}
                          <div className="dropdown-search">
                            <input
                              type="text"
                              placeholder="Search country code..."
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                              className="dropdown-search-input"
                            />
                          </div>

                          {loading ? (
                            <Dropdown.Item>
                              Loading country codes...
                            </Dropdown.Item>
                          ) : filteredCountries.length > 0 ? (
                            filteredCountries.map((country, index) => (
                              <Dropdown.Item
                                key={index}
                                onClick={() =>
                                  handleCountrySelect(
                                    country.code,
                                    country.name,
                                    country.flag
                                  )
                                }
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <img
                                    src={country.flag}
                                    alt={country.name}
                                    width="20"
                                    height="15"
                                    style={{ marginRight: "10px" }}
                                  />
                                  {country.code}
                                </div>
                              </Dropdown.Item>
                            ))
                          ) : (
                            <Dropdown.Item>No results found</Dropdown.Item>
                          )}
                        </DropdownButton>
                        {/* Phone Number Input */}
                        {/* <input
                          type="tel"
                          placeholder="Phone Number"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                        /> */}
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Phone Number"
                          className="mb-3"
                        >
                          <Form.Control
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            style={{ width: "320px", height: "20px" }}
                            onChange={handleInputChange}
                            placeholder="name@example.com"
                          />
                        </FloatingLabel>
                      </div>
                    </div>

                    <div class="col-md-6 col-sm-6 col-xs-12">
                      <div class="single-input-field">
                        {/* <input
                          type="text"
                          placeholder="Industry"
                          name="industry"
                          value={formData.industry}
                          onChange={handleInputChange}
                        /> */}
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Industry"
                          className="mb-3"
                        >
                          <Form.Control
                            type="text"
                            name="industry"
                            value={formData.industry}
                            onChange={handleInputChange}
                            placeholder="name@example.com"
                          />
                        </FloatingLabel>
                      </div>
                    </div>

                    <div class="col-md-12">
                      <div class="single-input-field">
                        {/* <input
                          type="text"
                          placeholder="Subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                        /> */}
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Subject"
                          className="mb-3 ms-0"
                        >
                          <Form.Control
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="name@example.com"
                          />
                        </FloatingLabel>
                      </div>
                    </div>

                    <div class="col-md-12 message-input">
                      <div class="single-input-field">
                        {/* <textarea
                          placeholder="Write Your Message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                        /> */}
                        {/* <FloatingLabel
                          controlId="floatingTextarea2"
                          label="Write Your Message"
                        >
                          <Form.Control
                            as="textarea"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            style={{ height: "100px" }}
                          />
                        </FloatingLabel> */}
                        <FloatingLabel controlId="floatingTextarea2" label="Write Your Message">
        <Form.Control
           name="message"
          as="textarea"
          placeholder="Leave a comment here"
          value={formData.message}
          onChange={handleInputChange}
          style={{ height: '100px' }}
        />
      </FloatingLabel>
                        <ReCAPTCHA className="mt-2"
                          ref={recaptcha}
                          sitekey={keycaptcha}
                          onChange={(val) => setCapvalue(val)}
                        />
                      </div>
                    </div>
                    <div class="single-input-fieldsbtn">
                      <input
                       
                        type="submit"
                        value="Send Now"
                      />
                    </div>
                  </div>
                </form>

                {/* =========================================== */}
              </div>
            </div>

            <div class="col-md-4">
              <div class="contact-page-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1530229867985!2d76.64428577481853!3d10.799589658766479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba86fe1b9379cdd%3A0x295ae1ce9e81c364!2sNacre%20System!5e0!3m2!1sen!2sin!4v1730780934340!5m2!1sen!2sin"
                  width="400"
                  height="350"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
   
      <Footer />
    </div>
  );
}

export default Contactus;
