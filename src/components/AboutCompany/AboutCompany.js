import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import img from "../../Images/Aboutus.jpg";
import "./AboutCompany.css";

const AboutCompany = () => {
  // This Components will be displayed Our Company Features
  return (
    <div className='about-company container mt-5'>
      <Row xs={1} md={2} className='g-4'>
        <Col>
          <img className='img-fluid' src={img} alt='' />
        </Col>
        <Col className='description'>
          <p className='sub'>About ALTE </p>
          <p className='company-title'>ALTE is a Online Learning platform</p>
          <div className='company-text'>
            <p>
            We help people learn English and prove their skills to the world
            </p>
            <p>
              <i className='far fa-check-circle'></i> More than 25,000 organisations in 130 countries around the world rely on our secure exams and tests as proof of English language ability.
            </p>
            <p>
              <i className='far fa-check-circle'></i> Our range of free teaching resources, lesson plans and activities is designed to help you and execute your skills.
            </p>
            
          </div>
          <Link to='/courses'>
            <button className='btn btn-info btn-regular'>Courses</button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default AboutCompany;
