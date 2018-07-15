import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * @class LoginForm
 *
 * @classdesc logs in user
 *
 */
const LoginForm = ({
  email, password, onChange, onSubmit
}) => (

  <div className="login-cover-img">
    <div className="login-cover-overlay">
      <div className="container py-5">
        <div className="card text-center mt-5 pt-3 auth-card ">
          <div className="card-body ">
            <h3>Sign In </h3>
            <p>Fill this form to Login</p>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={onChange}
                  name="email"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Password *"
                  required
                  value={password}
                  onChange={onChange}
                  name="password"
                />
              </div>
              <input type="submit" className="btn btn-outline-dark btn-block" />
            </form>
          </div>
          <div className="card-footer py-4">No account yet?  <Link to="/signup">Sign up</Link></div>
        </div>
      </div>
    </div>
  </div>
);

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};


export default LoginForm;
