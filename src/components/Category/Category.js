import React from 'react';
import { Card, Col, Row } from "react-bootstrap";
import "./Category.css";

const Category = () => {
    return (
        <div className='mt-5'>
      <h1 className="category-heading">Running Courses</h1>
      <div className='container category'>
        <Row xs={1} md={2} className='g-4'>
          <Col>
            <Card>
              <div className='img-hover'>
                <img className='img-fluid' src="https://www.linkpicture.com/q/Englishforjob.jpg" alt='' />
              </div>
              <div className='category-title'>
                <p>English for</p>
                <h6>Job</h6>
              </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <div className='img-hover'>
                <img className='img-fluid' src="https://www.linkpicture.com/q/Englishforkids.jpg" alt='' />
              </div>
              <div className='category-title'>
                <p>English for</p>
                <h6>Kids</h6>
              </div>
            </Card>
          </Col>
        </Row>
        <Row xs={1} md={3} className='g-4 mt-2'>
          <Col>
            <Card>
              <div className='img-hover'>
                <img className='img-fluid' src="https://www.linkpicture.com/q/Englishforteen.jpg" alt='' />
              </div>
              <div className='category-title'>
                <p>English for</p>
                <h6>Teen</h6>
              </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <div className='img-hover'>
                <img className='img-fluid' src="https://www.cambridgeenglish.org/Images/TE-AP-002-640460.jpg" alt='' />
              </div>
              <div className='category-title'>
                <p>English for</p>
                <h6>Parents</h6>
              </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <div className='img-hover'>
                <img className='img-fluid' src="https://www.cambridgeenglish.org/Images/TE-AP-003-640460.jpg" alt='' />
              </div>
              <div className='category-title'>
                <p>English for</p>
                <h6>Professionals</h6>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
    );
};

export default Category;