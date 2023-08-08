import React, { useState } from 'react';
import './style.css';
import NavBar from '../NavBar/NavBar';
import { NavLink, useNavigate } from 'react-router-dom'; // Import useNavigate

const Loginpage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Replace with your preset email and password for validation
    const presetEmail = 'user@myapp.com';
    const presetPassword = 'user123';

    if (email === presetEmail && password === presetPassword) {
      // Navigate to the Main page on successful login
      navigate('/Main');
    } else {
      // Handle incorrect credentials or display an error message
      console.log('Invalid credentials');
    }
  };

  return (
    <div className='body'>
      <div class="main">
        <NavBar />
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div class="login">
          <form>
            <label for="chk" aria-hidden="true">Login</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="button" className='buttn' onClick={handleLogin}>Login</button> <br /><br />
            <NavLink to='/register' className='buttn'>Sign up</NavLink>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
