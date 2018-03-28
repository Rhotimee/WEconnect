import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import LandingPage from '../components/LandingPage';
import BusinessList from '../components/BusinessList';
import AddBusiness from '../components/AddBusiness';
import Signup from '../components/Signup';
import Login from '../components/Login';
import BusinessDetails from '../components/BusinessDetails';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/businesses" component={BusinessList} />
      <Route exact path="/add-business" component={AddBusiness} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/detail" component={BusinessDetails} />
    </div>
  </BrowserRouter>
);

export default Routes;
