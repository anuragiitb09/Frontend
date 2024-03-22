import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Dashboard from './components/Dashboard'; // Only one Dashboard import
import MainPage from './components/Mainpage';

import CoordinatorComponent from './components/Coordinator';



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>

          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/SignUp" element={<SignUp />} />

        </Routes>
      
        <Dashboard />
        <CoordinatorComponent />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
