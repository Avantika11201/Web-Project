// Signin.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/signin.css';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = () => {
    // Perform signin logic here
    // You can add validation, API calls, etc.
  };

  return (
    <div className='signin_form'>
      <h2>Signin</h2>
      
      <input type="email" value={email} placeholder='Email Address' onChange={(e) => setEmail(e.target.value)} />
    
      <input type="password" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
      
      <button onClick={handleSignin}>Signin</button>
      <p>
        Don't have an account? <Link to="/signup">Signup here</Link>
      </p>
    
    </div>
  );
};

export default Signin;
