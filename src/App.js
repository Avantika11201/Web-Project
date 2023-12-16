import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Signup from './Components/Signup';
import Signin from './Components/Singin';
import { Business } from './Components/Business';
import { Product } from './Components/Products'
// import { Signin } from './Components/Singin'
// import {Routes, Route} from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Redirect from="/" to="/signup" />
      </Switch>
      <Business />
      <Product />
    </Router>
    
  );
}
export default App;
