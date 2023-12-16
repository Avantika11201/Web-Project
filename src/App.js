import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Signup from './Components/Signup';
import Signin from './Components/Singin';
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
    </Router>
  );
}
export default App;
