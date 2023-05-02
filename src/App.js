import React from 'react';
import Home  from './Components/Home';
import Resume from './Components/Resume'
import Projects from './Components/Projects'
import Contacts from './Components/Contacts'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './style.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// import Try from './Components/Try'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path='/Contacts' element={<Contacts/>}/>
      </Routes>
    </BrowserRouter>
    // <Try/>
  );
}

export default App;
