// Signin.js
import React, { useState } from 'react';
import { Link , useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/signin.css';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory(); // Initialize useHistory

  const handleSignin = () => {
    
    // Assuming successful sign-in, redirect to Business.js
    // Replace the following line with your actual logic for successful sign-in
    const isSignInSuccessful = true;

    if (isSignInSuccessful) {
      history.push('/business'); // Redirect to Business.js
    }
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
