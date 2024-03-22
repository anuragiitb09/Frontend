import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoImage1 from '../assets/E-logo.png';


const Header = () => {
    return (
        <header className="header-container">
            <div className="logo-container">
                {/* Make the logo a link to the main page */}
                <Link to="/mainpage">
                    <img src={logoImage1} alt="E-Cell Logo" className="logo" />
                </Link>
            </div>

            <nav className="navigation-header">
                {/* Update the Home link to navigate to the MainPage */}
                <Link to="/mainpage" className="nav-link">Home</Link>
                <Link to="/" className="nav-link">Structure</Link>
                <Link to="/" className="nav-link">Tracks</Link>
                <Link to="/" className="nav-link">Incentives</Link>
                <Link to="/" className="nav-link">Sponsors</Link>
                <Link to="/" className="nav-link">Contact</Link>
            </nav>

            {/* Use a Link component here if you want a stylable link instead of a button */}
            <Link to="/login" className="login-button">Login</Link>
            <Link to="/Signup" className="login-button">SignUp</Link>
        </header>
    );
};

export default Header;