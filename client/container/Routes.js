import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import LandingPage from '../components/LandingPage';
import BusinessList from '../components/BusinessList/BusinessList';
import AddBusinessx from '../components/AddBusiness/AddBusiness';
import Signup from '../components/Signup/Signup';
import Login from '../components/Login/Login';
import BusinessDetails from '../components/BusinessDetails/BusinessDetails';
import EditBusiness from '../components/EditBusiness/EditBusiness'
import NavFoot from '../hoc/NavFoot/NavFoot'

function Routes() {
  return (
    <BrowserRouter>
      <NavFoot>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/businesses" component={BusinessList} />
        <Route exact path="/add-business" component={AddBusinessx} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path={"/businesses/:id"} component={BusinessDetails} />
        <Route exact path={"/businesses/:id/edit"} component={EditBusiness} />
      </NavFoot>
    </BrowserRouter>
  );
}

export default Routes;

