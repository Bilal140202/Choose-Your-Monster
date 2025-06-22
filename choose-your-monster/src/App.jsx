import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MemberUniversePage from './pages/MemberUniversePage'; // Import the actual page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/member/:memberName" element={<MemberUniversePage />} /> {/* Use the actual component */}
      </Routes>
    </Router>
  );
}

export default App;
