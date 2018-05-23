import React, { Component } from 'react';
import LoginForm from './loginForm';
import { userSigninRequest } from '../../actions/userActions';
import { connect } from 'react-redux';

class Login extends Component {
  render() {
    const { userSigninRequest } = this.props;
    return (

        <div className="cover">
          <div className="cover-overlay">
            <div className="container py-5 auth" id="signin">
              <div className="card justify-content-center text-center card-form mt-5">
                <div className="card-body my-3">
                  <h3>Sign In </h3>
                  <p>Fill this form to Login</p>
                  <LoginForm userSigninRequest={userSigninRequest} />
                </div>
                <div className="card-footer">No account yet?  <a href="signup.html">Sign up</a></div>
              </div>
            </div>
          </div>
        </div>

    );
  }
}


export default connect(null, { userSigninRequest })(Login);
