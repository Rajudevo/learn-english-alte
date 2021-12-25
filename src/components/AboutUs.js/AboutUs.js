import React from "react";
import { Col, Row } from "react-bootstrap";
import "./AboutUs.css";
import img from "../../Images/Aboutus.jpg";
import Example from "../Example/Example";

const AboutUs = () => {
  // This Components will be displayed Our AboutUs page
  return (
    <div className='about-us'>
      <div className='container'>
        <Row xs={1} md={2} className='g-4 px-4'>
          <Col>
          {/* Header for AboutUs page */}
            <p className='about-title'>
              Learn <br /> from <br /> the best!
            </p>
          </Col>
          <Col>
            <img src={img} alt='' />
          </Col>
        </Row>
        <p className='second-title'>Who we are</p>
        <p className='text'>
        Whatever your level of English, we’re here to help. From children to adults, we have courses, lessons and activities which lead to internationally recognised qualifications. 

Learning English with ALTE will help you unlock a whole new world of opportunity. So whether you want to learn online, join us at a face-to-face class or study English with group, this is the place to start.
        </p>
      </div>
      {/* Show here About Our service and Customers data */}
      <div className='about-info my-4 p-4'>
        <p className='second-title'>keep growing with us</p>
        <p className='text'>
        Reach your organisation’s goals with customised English language courses, professional communication skills programmes, and assessments for businesses, institutions and governments.
          <br /> 
        </p>
        <Row xs={1} md={1}>
         
          <Col>
            <h1 className='col-title'>English for professionals</h1>
            <button className='btn btn-info'>Book a free consultation</button>
            
          </Col>
        </Row>
      </div>
      <Example />
      
    </div>
  );
};

export default AboutUs;
