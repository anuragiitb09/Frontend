import sticker1 from '../assets/wellsuit.png';

import sticker4 from '../assets/ecell.png';
import React, { useState } from 'react';
import './Mainpage.css';
import backgroundImage from '../assets/black.jpg';
import SignUp from './SignUp';
import Login from './Login';

const Mainpage = () => {
  const [currentPage, setCurrentPage] = useState('main'); // Possible values: 'main', 'signup', 'login'

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  if (currentPage === 'signup') {
    return <SignUp />;
  }

  if (currentPage === 'login') {
    return <Login />;
  }
  

  // Main page content
  return (
    <div className="main-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1 className="main-headline">Asia’s largest student-run entrepreneurship-promoting body</h1>
      <div className="buttons">
        <button className="button sign-offers" onClick={() => navigateTo('signup')}>Sign Up</button>
        <button className="button login-coupons" onClick={() => navigateTo('login')}>Login</button>
      </div>
      <img src={sticker1} alt="Sticker 1" className="sticker1" />
      <img src={sticker4} alt="Sticker 4" className="sticker4" />
    </div>
   
  );
};

export default Mainpage;
