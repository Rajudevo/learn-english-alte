import React from 'react';
import AboutCompany from '../AboutCompany/AboutCompany';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import ClientService from '../ClientService/ClientService';
import Courses from '../Courses/Courses';
import Example from '../Example/Example';
import Header from '../Header/Header';


const Home = () => {
    return (
        <div>
            
       <Banner></Banner>
      
      <AboutCompany></AboutCompany>
      <Category></Category>
      <br />
      <br />
      <ClientService></ClientService>
      <Courses></Courses>
    
    </div>
    );
};

export default Home;