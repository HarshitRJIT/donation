import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Impact from './pages/Home/Impact';
import Members from './pages/Home/Members';
import Reachpresence from './pages/Home/Reachpresence';
import CivicDriven from './pages/Home/CivicDriven';
import GoodGovernance from './pages/Home/GoodGovernance';
import Education from './pages/Our Work/Education';
import Health from './pages/Our Work/Health';
import Livelihood from './pages/Our Work/Livelihood';
import Women_Empowerment from './pages/Our Work/Women_Empowerment';
import Join from './pages/Join/Join';
import Getintouch from './pages/ContactUs/Get-in-touch';
import FAQs from './pages/ContactUs/FAQs';



const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/members" element={<Members />} />
          <Route path="/reach-presence" element={<Reachpresence />} />
          <Route path="/civic-driven" element={<CivicDriven />} />
          <Route path="/good-governance" element={<GoodGovernance />} />
          <Route path="/education" element={<Education />} />
          <Route path='/health' element={<Health />} />
          <Route path="/livelihood" element={<Livelihood />} />
          <Route path='/women_empowerment' element={<Women_Empowerment/>} />
          <Route path="/join" element={<Join />} />
          <Route path="/Getintouch" element={<Getintouch />} />
          <Route path="/FAQs" element={<FAQs />} />
        </Routes>
        </div>
    </Router>
    
  );
};

export default App;
 