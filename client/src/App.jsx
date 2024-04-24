// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Note: Import Routes from 'react-router-dom'

import Register from './Components/Register';
import Login from './Components/Login';

function App() {
  return (
    <Router>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>

        <Routes> 
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
