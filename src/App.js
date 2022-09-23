import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


//import file
import NavbarComponent from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import Education from './pages/education';
import Interest from './pages/interests';
import Awards from './pages/awards';
import Skills from './pages/skills';
import Experience from './pages/experience';


function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <main id='main'>
          <Routes>
                  <Route path="/home" element={<Home/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/experience" element={<Experience/>}/>
                  <Route path="/education"  element={<Education/>}/>
                  <Route path="/skills" element={<Skills/>}/>
                  <Route path="/interest" element={<Interest/>}/>
                  <Route path="/awards" element={<Awards/>}/>
          </Routes>
      </main>
    </div>
  );
}

export default App;
