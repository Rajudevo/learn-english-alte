import React from 'react';
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
    return (
        <div className='banner container'>
        <h1 className='banner-title'>
        Want to improve <br /> your English? 
        </h1>
        <p className='banner-text'>
          We have tons of Practice material and learning resources <br />  to help you improve your English.
        </p>
        <Link to='/service'>
          <button className='btn btn-info btn-regular'>Discover Now</button>
        </Link>
      </div>
    );
};

export default Banner;