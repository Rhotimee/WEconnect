import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const SignupForm = ({
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  onChange,
  onSubmit,
  onFileChange,
  isLoading
}) => (
  <div className="login-cover-img">
    <div className="login-cover-overlay">
      <div className="container py-3">
        <div className="card text-center mt-5 pt-3 auth-card ">
          <div className="card-body ">
            <h3>Sign Up </h3>
            <p>Fill this form to Signup</p>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="First Name *"
                  value={firstName}
                  onChange={onChange}
                  name="firstName"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Last Name *"
                  value={lastName}
                  onChange={onChange}
                  name="lastName"
                  required
                />
              </div>
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
              <div className="form-group">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Confirm Password *"
                  value={confirmPassword}
                  onChange={onChange}
                  name="confirmPassword"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="file"
                  className="form-control-file"
                  id="filefield"
                  onChange={onFileChange}
                  name="Image"
                  accept="image/*"
                />
              </div>
              <input disabled={isLoading} type="submit" className="btn btn-outline-dark btn-block" />
            </form>
          </div>
          <div className="card-footer py-4">Have an account?  <Link to="/login">Login</Link></div>
        </div>
      </div>
    </div>
  </div>
);

SignupForm.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onFileChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};


export default SignupForm;
