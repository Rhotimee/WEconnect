import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoginForm from './loginForm';
import { userSigninRequest } from '../../actions/userActions';


/**
 * @class Login
 *
 * @classdesc logs in user
 *
 */
class Login extends PureComponent {
  /**
   * @description render - renders the class component
   *
   * @return {object} returns an object
   *
   */
  render() {
    return (
      <div className="login-cover-img">
        <div className="login-cover-overlay">
          <div className="container py-5">
            <div className="card text-center mt-5 pt-3 auth-card ">
              <div className="card-body ">
                <h3>Sign In </h3>
                <p>Fill this form to Login</p>
                <LoginForm userSigninRequest={this.props.userSigninRequest} />
              </div>
              <div className="card-footer py-4">No account yet?  <Link to="/signup">Sign up</Link></div>
            </div>
          </div>
        </div>
      </div>


    );
  }
}

Login.propTypes = {
  userSigninRequest: PropTypes.func.isRequired
};


export default connect(null, { userSigninRequest })(Login);
