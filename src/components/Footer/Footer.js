import React from 'react';
import { Link } from 'react-router-dom';
import img from "../../Images/logo.png";
import "./Footer.css";
const Footer = () => {
    return (
        <div className='footer'>
        <div className='footer-container row row-cols-3 container'>
          <div className='col-6'>
           
            <img src={img} alt='' />
            <p className='footer-text'>
            Learn at your own pace, with flexible and personalised training courses designed to build your confidence and help you thrive. Improve your interview skills
            and Prepare for the career you want.
               
            </p>
          </div>
          <div className='col-3'>
            {/* Footer Important Anchor Link  */}
            <p className='footer-title'>Important Links</p>
            <p>
              <Link to ="/courses">
               <a href='/courses'>Courses</a> 
               </Link>
             
            </p>
            <p>
              <a href='link'>Mentors</a>
            </p>
            <p>
            <Link to ="/aboutus">
               <a href='/aboutus'>About Us</a> 
               </Link>
            </p>
            <p>
              <a href='link'>Contact Us</a>
            </p>
          </div>
          <div className='col-3'>
            
            <p className='footer-title'>Location</p>
            <p>
              <i className='fas fa-map-marker-alt'></i>  512, Dhanmondi, Dhaka
            </p>
            <p>
              <i className='fas fa-envelope-open-text'></i>  info@alte.com
            </p>
            <p>
              <i className='fas fa-phone'></i>  02-000058345
            </p>
          </div>
        </div>
        <hr />
      </div>
    );
};

export default Footer;