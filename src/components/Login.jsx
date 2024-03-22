import React, { useState } from 'react';
import './Login.css';
import couponIllustration from '../assets/ecell.png';
import SignUp from './SignUp'; 
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);
    const [loginMethod, setLoginMethod] = useState('password');
    const navigate = useNavigate(); 

    const handleLogin = async (event) => {
        event.preventDefault();
        const loginUrl = `http://127.0.0.1:3000/user/login/`;
        let requestBody = {};

        if (loginMethod === 'otp') {
            console.log('OTP login method is selected:', emailOrPhone);
            alert('OTP functionality is under development.');
            return;
        } else {
            console.log('Password login method is selected:', emailOrPhone, password);
            requestBody = {
                username: emailOrPhone,
                password: password,
            };
        }

        const response = await fetch(`http://127.0.0.1:3000/user/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestBody),
            });

            const data = await response.json();
            if (response.ok) {
                console.log('Login successful:', data);
                navigate('/dashboard'); 
            } else {
                console.error('Login failed:', data);
            }
           
        
    };

    const toggleAuthMode = () => {
        navigate('/SignUp');
    };
    

    return isSignUp ? (
        <SignUp toggleAuthMode={toggleAuthMode} />
    ) : (
        <div className="login-container">
            <div className="login-illustration">
                <img src={couponIllustration} alt="E-Cell IIT Bombay" className="login-illustration-img" />
            </div>
            <div className="login-form-container">
                <h1>Login</h1>
                <p>Welcome to E-Cell IIT Bombay Team</p>
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        className="login-input"
                        placeholder="Enter Email/Mobile number"
                        value={emailOrPhone}
                        onChange={(e) => setEmailOrPhone(e.target.value)}
                        required
                    />
                    {loginMethod === 'password' && (
                        <input
                            type="password"
                            className="login-input"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    )}
                    <button type="submit" className="login-submit-button">
                        {loginMethod === 'otp' ? 'Request OTP' : 'Login'}
                    </button>
                </form>
                <button onClick={() => setLoginMethod(loginMethod === 'otp' ? 'password' : 'otp')} className="login-method-toggle-button">
                    {loginMethod === 'otp' ? 'Use Password Instead' : 'Use OTP Instead'}
                </button>
                <p className="terms">By continuing, you agree you are a part of the E-Cell Team</p>
                <button onClick={toggleAuthMode} className="toggle-auth-button">
                    Create an account
                </button>
                   
            </div>
        </div>
    );
                    };

export default Login;
