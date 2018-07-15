import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import LandingPage from './components/LandingPage';
import BusinessList from './container/BusinessList';
import AddBusiness from './container/AddBusiness';
import Signup from './container/Signup';
import Login from './container/Login';
import BusinessDetails from './container/BusinessDetails';
import EditBusiness from './container/EditBusiness';
import Dashboard from './container/Dashboard';
import UpdateUser from './container/UpdateUser';
// import NotFound from './components/NotFound';
import NavBar from './container/NavBar';
import Footer from './components/Footer';

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
            <NavBar showBox />
          </Route>
        </Switch>
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
        <Footer />
      </div>

    </BrowserRouter>
  );
}

export default Routes;

