import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './Home';
import { Medium } from './Medium';
import { Hard } from './Hard';
import { Easy } from './Easy';
import BackgroundVideo from './BackgroundVideo';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BackgroundVideo />} />
        <Route path="/easy" element={<Easy />} />
        <Route path="/medium" element={<Medium />} />
        <Route path="/hard" element={<Hard />} />
      </Routes>
    </Router>
  );
};

export default App;
