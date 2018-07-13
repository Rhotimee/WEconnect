import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import LandingPage from './components/LandingPage';
import BusinessList from './components/BusinessList/BusinessList';
import AddBusiness from './container/AddBusiness';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import BusinessDetails from './components/BusinessDetails/BusinessDetails';
import EditBusiness from './components/EditBusiness/EditBusiness';
import NavFoot from './hoc/NavFoot/NavFoot';
import Dashboard from './components/Dashboard/Dashboard';
import UpdateUser from './components/UpdateUser/UpdateUser';
import NotFound from './components/NotFound';
import NavBar from './hoc/NavFoot/NavBar';
import Footer from './hoc/NavFoot/Footer';

/**
   * @description mapStateToProps
   *
   * @returns {void}
   */
function Routes() {
  return (
    <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/">
          <NavBar showBox={false} />
        </Route>
        <Route>
          <NavBar showBox={true} />
        </Route>
      </Switch>
      {/* <NavFoot> */}
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/businesses" component={BusinessList} />
        <Route exact path="/add-business" component={AddBusiness} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/businesses/:id" component={BusinessDetails} />
        <Route exact path="/businesses/:id/edit" component={EditBusiness} />
        <Route exact path="/user/:id" component={Dashboard} />
        <Route exact path="/user/:id/update" component={UpdateUser} />
        {/* <Route component={NotFound} /> */}
      <Footer/>
      </div>
      {/* </NavFoot> */}

    </BrowserRouter>
  );
}

export default Routes;

