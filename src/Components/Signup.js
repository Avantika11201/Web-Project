// Signup.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Signup.css' ;


const Signup = ({ history }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreement, setAgreement] = useState(false);

  const handleSignup = () => {
    // Perform signup logic here
    // You can add validation, API calls, etc.

    // Redirect to the signin page after successful signup
    history.push('/signin');
  };

  return (
    <div className='Sign_up_form container'>
      <h2>Create An Account</h2>
      
      <input type="text" value={fullName} placeholder='Full Name' onChange={(e) => setFullName(e.target.value)} />

      <input type="email" value={email} placeholder='Email Address' onChange={(e) => setEmail(e.target.value)} />
    
      <input type="password" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
    
      <input type="password" value={confirmPassword} placeholder='Confirm Password' onChange={(e) => setConfirmPassword(e.target.value)} />

      <input type="checkbox" checked={agreement} onChange={() => setAgreement(!agreement)}/>
    
      <p className='agreement_text'>Agree to Terms and Conditions</p>

      <button onClick={handleSignup} disabled={!agreement}> Create Account </button>
      <p className='signin_link'>
        Already have an account? <Link to="/signin">Signin here</Link>
      </p>
    </div>
  );
};

export default Signup;
