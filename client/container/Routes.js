import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import LandingPage from '../components/LandingPage';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={LandingPage} />
    </div>
  </BrowserRouter>
);

export default Routes;

