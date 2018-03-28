import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import LandingPage from '../components/LandingPage';
import BusinessList from '../components/BusinessList';
import AddBusiness from '../components/AddBusiness';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/businesses" component={BusinessList} />
      <Route exact path="/add-business" component={AddBusiness} />
    </div>
  </BrowserRouter>
);

export default Routes;

