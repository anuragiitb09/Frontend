import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css'; // Verify this path is correct for your project

const SignUp = () => {
  const navigate = useNavigate(); // Initialize navigate using useNavigate
  const [formData, setFormData] = useState({
    name: '',
    branch: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignUp = async (event) => {
    event.preventDefault();

    const response = await fetch(`http://127.0.0.1:3000/user/register/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (response.ok) {
      console.log('Registration successful', data);
      navigate('/login'); // Redirect user to the login page upon successful registration
    } else {
      console.error('Registration failed', data);
      setError(data.message || 'An error occurred during signup.'); // Set error message
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <h1>Sign Up</h1>
        {error && <div className="signup-error">{error}</div>}
        <form onSubmit={handleSignUp}>
          
          <input
            type="name"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
           <input
            type="branch"
            placeholder="Branch"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        <button onClick={() => navigate('/')} className="back-to-main-button">Back to Main</button>
        <p className="login-prompt">
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
