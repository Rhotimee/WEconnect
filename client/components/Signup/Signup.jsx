import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { userSignupRequest } from '../../actions/userActions';
import SignupForm from './SignupForm';

/**
 * @class LoginForm
 *
 * @classdesc logs in user
 *
 */
class Signup extends PureComponent {
  /**
   * @description render - renders the class component
   *
   * @return {object} returns an object
   *
   */
  render() {
    const { userSignupRequest } = this.props;
    return (
      <div className="login-cover-img">
        <div className="login-cover-overlay">
          <div className="container py-3">
            <div className="card text-center mt-5 pt-3 auth-card ">
              <div className="card-body ">
                <h3>Sign Up </h3>
                <p>Fill this form to Signup</p>
                <SignupForm userSignupRequest={userSignupRequest} />
              </div>
              <div className="card-footer py-4">Have an account?  <Link to="/login">Login</Link></div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

Signup.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
};

export default connect(null, { userSignupRequest })(Signup);
