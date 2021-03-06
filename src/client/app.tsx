import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// Screens
import Home from './screens/home/home';
import Signin from './screens/authentication/signin/signin';
import Signup from './screens/authentication/signup/signup';

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/signin" component={Signin}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/" component={Home}/>
      </Switch>
    </Router>
  )
}