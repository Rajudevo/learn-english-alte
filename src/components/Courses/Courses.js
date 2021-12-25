import React from 'react';
import { Row } from "react-bootstrap";

import Course from "../Course/Course";
import UseCourses from '../Hooks/UseCourses/UseCourses';
import "./Courses.css";

const Courses = () => {
    // Use custom Hooks for Loading Courses data.
  const [courses] = UseCourses();
    return (
        <div className='container mt-5'>
      
      <p className='courses-title'>Our Courses</p>
      <Row xs={1} md={2} className='g-4'>
        {/* Slice array for map and show 4 data */}
        {courses.slice(0, 4).map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </Row>
    </div>
    );
};

export default Courses;