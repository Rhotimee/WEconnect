import React from 'react';
import NavFoot from './NavFoot';

const Login = () => (
  <NavFoot>

    <div className="cover">
      <div className="cover-overlay">
        <div className="container py-5 auth" id="signin">
          <div className="card justify-content-center text-center card-form mt-5">
            <div className="card-body my-3">
              <h3>Sign In </h3>
              <p>Fill this form to Login</p>
              <form>
                <p className="col-12 my-3">Fields with <small>*</small> are required </p>
                <div className="form-group">
                  <input type="email" className="form-control form-control-lg" placeholder="Email *" required />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control form-control-lg" placeholder="Password *" required />
                </div>
                <input type="submit" className="btn btn-outline-dark btn-block" />
              </form>
            </div>
            <div className="card-footer">No account yet?  <a href="signup.html">Sign up</a></div>
          </div>
        </div>
      </div>
    </div>

  </NavFoot>
);

export default Login;
