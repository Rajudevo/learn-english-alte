import React from 'react';
import { Row } from "react-bootstrap";

import Course from "../Course/Course";
import UseCourses from '../Hooks/UseCourses/UseCourses';
import './ExploreCourse.css';

const ExploreCourse = () => {
         // use custom Hooks
  const [courses] = UseCourses();
    return (
   
    <div className='container mt-5'>
      <p className='explore-title'>Latest Courses</p>
      <Row xs={1} md={4} className='g-4'>
        {courses.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </Row>
    </div>
    );
};

export default ExploreCourse;