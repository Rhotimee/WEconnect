import React from 'react';
import NavFoot from './NavFoot';

const Signup = () => (
  <NavFoot>

    <div className="cover">
      <div className="cover-overlay">

        <div className="container py-5 auth" id="signup">
          <div className="card  text-center card-form my-2">
            <div className="card-body">
              <h3>Sign up </h3>
              <p>Fill this form to register</p>
              <form>
                <p className="col-12 my-3">Fields with <small>*</small> are required </p>
                <div className="form-group">
                  <input type="name" className="form-control form-control-lg" placeholder="First Name *" required />
                </div>
                <div className="form-group">
                  <input type="name" className="form-control form-control-lg" placeholder="Last Name *" required />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control form-control-lg" placeholder="Email *" required />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control form-control-lg" placeholder="Password *" required />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control form-control-lg" placeholder="Confirm Password *" required />
                </div>
                <input type="submit" className="btn btn-outline-dark btn-block" />
              </form>
            </div>
            <div className="card-footer">Have an account ?  <a href="signin.html">Sign in</a></div>
          </div>
        </div>

      </div>
    </div>

  </NavFoot>
);

export default Signup;
