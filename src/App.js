import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs.js/AboutUs';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Service from './components/Service/Service';
import ExploreCourse from './components/ExploreCourse/ExploreCourse';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header></Header>
     <Routes>
       <Route path="" element={<Home />} />
       <Route path="home" element={<Home />} />
       <Route path="/aboutus" element={<AboutUs />} />
       <Route path="/service" element={<Service />} />
       <Route path="/courses" element={<ExploreCourse />} />
       <Route path="*" element={<NotFound />} />

       
     </Routes>
     <Footer></Footer>
     </BrowserRouter>
    </div>
  );
}

export default App;
