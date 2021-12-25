import React from 'react';
import { Col, Row } from "react-bootstrap";
import "./Service.css";
import Courses from "../Courses/Courses";
import ClientService from "../ClientService/ClientService";
import img from "../../Images/Englishforkids.jpg";

const Service = () => {
    return (
        <div className='service'>
      <ClientService></ClientService>
      <Row xs={1} md={2} className='g-4 mt-5'>
        <Col>
          {/* Another section for educational service */}
          <p className='education-service'>Services</p>
          <p className='education-service-text'>
          Whatever motivates you to learn, our courses can make your dreams a reality. Whether it’s career progression, the chance to live and work abroad, or the challenge of mastering a new skill, our highly qualified teachers will help you progress. 

We have a local and online presence in over 100 countries, so however you want to learn, this is the place to start.
          </p>
        </Col>
        <Col>
          <img
            className='img-fluid'
            src={img}
            alt=''
          />
        </Col>
      </Row>
      <Courses></Courses>
    </div>
    );
};

export default Service;