import React from 'react';
import { Col, Row } from "react-bootstrap";

const ClientService = () => {
    return (
        <div>
      <p className='service-title pb-4'>
      Why choose us?
      </p>
      <Row xs={1} md={2} className='g-4'>
        <Col>
          <img
            className='img-fluid '
            src='https://www.pngitem.com/pimgs/m/381-3814583_solutions-why-choose-us-hd-png-download.png'
            alt=''
          />
        </Col>
        <Col>
          {/* Some boolet points */}
          <div className='service-info'>
            <p className='service-sub'>
              <span className='icon'>
                <i className='fas fa-check-circle'></i>
              </span>
             Learn
            </p>
            <p className='service-text'>
            For us, learning English is more than just exams and grades. It’s about having the confidence to communicate and access a lifetime of enriching experiences and opportunities.
            </p>
          </div>
          <div className='service-info'>
            <p className='service-sub'>
              <span className='icon'>
                <i className='fas fa-check-circle'></i>
              </span>
              Support
            </p>
            <p className='service-text'>
            With the right support, learning a language is an exhilarating journey. We’re there with learners, every step of the way.
            </p>
          </div>
          <div className='service-info'>
            <p className='service-sub'>
              <span className='icon'>
                <i className='fas fa-check-circle'></i>
              </span>
              Quality
            </p>
            <p className='service-text'>
            Our qualifications and tests are accepted by over 25,000 organisations worldwide, and provide the English language skills to communicate and succeed in the real world.
            </p>
          </div>
        </Col>
      </Row>
    </div>
    );
};

export default ClientService;