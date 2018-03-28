import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import LandingPage from '../components/LandingPage';
import BusinessList from '../components/BusinessList';
// import Login from '../components/Login';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/businesses" component={BusinessList} />
      {/* <Route exact path="/businesses" component={BusinessList} /> */}
    </div>
  </BrowserRouter>
);

export default Routes;

