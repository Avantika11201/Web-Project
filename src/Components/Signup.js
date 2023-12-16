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
    <div className='Sign_up_form'>
      <h2>Signup</h2>
      <label>
        Full Name:
        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <label>
        Confirm Password:
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </label>
      <label>
        Agree to terms:
        <input
          type="checkbox"
          checked={agreement}
          onChange={() => setAgreement(!agreement)}
        />
      </label>
      <button onClick={handleSignup} disabled={!agreement}>
        Signup
      </button>
      <p>
        Already have an account? <Link to="/signin">Signin here</Link>
      </p>
    </div>
  );
};

export default Signup;
